// src/data/ejercicios.js
import Counter from '../components/Counter/Counter';
import TextInput from '../components/TextInput/TextInput';
import ToggleBtn from '../components/ToggleBtn/ToggleBtn';
import TodoList from '../components/TodoList/TodoList';
import Form from '../components/Form/Form';
import ColorPicker from '../components/ColorPicker/ColorPicker';
import Calculator from '../components/Calculator/Calculator';
import Gallery from '../components/Gallery/Gallery';
import Quiz from '../components/Quiz/Quiz';

export const ejerciciosData = [
  {
    id: 'counter',
    titulo: '📊 Ejercicio 1: Contador simple',
    tarea: 'Agrega estado para el contador y haz que los botones funcionen',
    pista: 'Usa useState(0) y funciones que modifiquen el estado',
    color: '#18c96eff',
    component: Counter, // <-- referencia al componente, sin JSX
  },
  {
    id: 'text',
    titulo: '✏️ Ejercicio 2: Input de Texto',
    tarea: 'Haz que el input muestre lo que el usuario escribe',
    pista: 'value={texto} onChange={(e) => setText(e.target.value)}',
    color: '#237bd9ff',
    component: TextInput,
  },
  {
    id: 'toggle',
    titulo: '👁️ Ejercicio 3: Mostrar/Ocultar Contenido',
    tarea: 'Haz que el botón muestre u oculte el mensaje.',
    pista: 'usar && para renderizado condicional',
    color: '#8842bf',
    component: ToggleBtn,
  },
  // ...y así con todos los demás
];
