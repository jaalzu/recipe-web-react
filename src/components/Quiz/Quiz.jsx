import styles from './Quiz.module.css';
import { useState } from 'react';
import preguntas from '../../data/quiz.js';
import Button from '../Button/Button'


export default function Quiz() {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
  const [quizTerminado, setQuizTerminado] = useState(false);


  const pregunta = preguntas[preguntaActual];

  const handleClick = (index) => {
     if (respuestaSeleccionada !== null) return; 
  setRespuestaSeleccionada(index);
  if (index === pregunta.correcta) {
    setPuntaje(puntaje + 10);
  }
  };

  const getClassName = (index) => {
    if (respuestaSeleccionada === null) return '';
    if (index === pregunta.correcta) return styles.correcta;
    if (index === respuestaSeleccionada) return styles.incorrecta;
    return '';
  };

const siguientePregunta = () => {
  if (preguntaActual < preguntas.length - 1) {
    setPreguntaActual(preguntaActual + 1);
    setRespuestaSeleccionada(null);
  } else {
    setQuizTerminado(true); //
  }
};

const reiniciar = () => {
  setPreguntaActual(0);
  setPuntaje(0);
  setRespuestaSeleccionada(null);
    setQuizTerminado(false); // 
};

const mensajeFinal = () => {
    if(puntaje <= 10) return "bastante flojo chee"
    if(puntaje <= 20) return "not bad"
    return "el nuevo einstein"
}
  return (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    {quizTerminado ? (
      <div className={styles.resultadoFinal} style={{ textAlign: 'center', marginTop: '3rem' }}>
        <h1>Lograste {puntaje} puntos!</h1>
        <p>{mensajeFinal()}</p>
         <Button color='blue' onClick={reiniciar}>
            Reiniciar
         </Button>
      </div>
    ) : (
      <>
        <div className={styles.quizInfo} style={{ width: '100%' }}>
          <p className={styles.quizQuestionNumber}>
            Pregunta {preguntaActual + 1} de {preguntas.length}
          </p>
          <p className={styles.quizScoreText}>Puntuación: {puntaje}</p>
        </div>

        <div className={styles.questionsContainer} style={{ width: '100%' }}>
          <h2>{pregunta.texto}</h2>
          <ul>
            {pregunta.opciones.map((opcion, index) => (
              <li
                key={index}
                onClick={() => handleClick(index)}
                className={getClassName(index)}
              >
                <span>{index + 1}. </span>
                {opcion}
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
            <Button color='green' onClick={siguientePregunta}>Siguiente</Button>
          </div>
        </div>
      </>
    )}
  </div>
);

}
