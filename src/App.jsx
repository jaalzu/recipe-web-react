import styles from './App.module.css';
import Card from './components/card/Card';
import Counter from './components/Counter/Counter';
import TextInput from './components/TextInput/TextInput';
import ToggleBtn from './components/ToggleBtn';
export default function App() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Ejercicios de estado en React</h1>
        <Card titulo="📊 Ejercicio 1: Contador simple" tarea=" Agrega estado para el contador y haz que los botones funcionen" pista=" Usa useState(0) y funciones que modifiquen el estado" color='#18c96eff' >
      <Counter />
     </Card>
      </div>
       
        <br />
        <Card titulo="✏️  Ejercicio 2: Input de Texto" tarea=" Haz que el input muestre lo que el usuario escribe
         " pista=" value={texto} onChange={(e) => setText(e.target.value)}  " color='#237bd9ff'>
    <TextInput />
   </Card>

        <br />

        <Card titulo="👁️ Ejercicio 3: Mostrar/Ocultar Contenido
        " tarea="  Haz que el botón muestre u oculte el mensaje.
        "  pista=" usar && para renderizado condicional"  color='#8842bf'>
          <ToggleBtn />
   </Card>
        <br />

        <Card titulo="✅ Ejercicio 4: Lista de Tareas
        " tarea="  Permite agregar nuevas tareas a la lista
        " pista=" [...tareas, nuevaTarea] para agregar al array"  color='#b43638'>
   </Card>
        <br />

        <Card titulo="📋 Ejercicio 5: Formulario Completo" 
              tarea="  Maneja múltiples campos y muestra los datos"
              pista=" Crea un objeto con todos los datos y guárdalo en un estado"  color='#e78d3e'>
   </Card>
    </div>
  )
}
