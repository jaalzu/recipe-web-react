import { useState } from 'react'
import styles from './App.module.css';
import Card from './components/card/Card';
import Counter from './components/Counter/Counter';
import TextInput from './components/TextInput/TextInput';
import ToggleBtn from './components/ToggleBtn/ToggleBtn';
import TodoList from './components/TodoList/TodoList';
import Form from './components/Form/Form';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Calculator from './components/Calculator/Calculator';
import Gallery from './components/Gallery/Gallery';

export default function App() {
  const [active, setActive] = useState("counter");

  const ejercicios = {
    counter: (
      <Card titulo="📊 Ejercicio 1: Contador simple"
            tarea="Agrega estado para el contador y haz que los botones funcionen"
            pista="Usa useState(0) y funciones que modifiquen el estado"
            color='#18c96eff'>
        <Counter />
      </Card>
    ),
    text: (
      <Card titulo="✏️ Ejercicio 2: Input de Texto"
            tarea="Haz que el input muestre lo que el usuario escribe"
            pista="value={texto} onChange={(e) => setText(e.target.value)}"
            color='#237bd9ff'>
        <TextInput />
      </Card>
    ),
    toggle: (
      <Card titulo="👁️ Ejercicio 3: Mostrar/Ocultar Contenido"
            tarea="Haz que el botón muestre u oculte el mensaje."
            pista="usar && para renderizado condicional"
            color='#8842bf'>
        <ToggleBtn />
      </Card>
    ),
    todo: (
      <Card titulo="✅ Ejercicio 4: Lista de Tareas"
            tarea="Permite agregar nuevas tareas a la lista"
            pista="[...tareas, nuevaTarea] para agregar al array"
            color='#b43638'>
        <TodoList />
      </Card>
    ),
    form: (
      <Card titulo="📋 Ejercicio 5: Formulario Completo"
            tarea="Maneja múltiples campos y muestra los datos"
            pista="Crea un objeto con todos los datos y guárdalo en un estado"
            color='#e78d3e'>
        <Form />
      </Card>
    ),
    color: (
      <Card titulo="🎨 Ejercicio 6: Selector de Color"
            tarea="Cambia el color de fondo del cuadrado"
            pista="Usa useState para guardar la clase CSS del color seleccionado"
            color='#089d0aff'>
        <ColorPicker />
      </Card>
    ),
    calculator: (
      <Card titulo="📊 Ejercicio 6: Calculadora Simple"
            tarea=" Haz que funcionen las operaciones básicas"
            pista="💡 Pista: Convierte a Number() antes de hacer operaciones"
            color='#18c96eff'>
        <Calculator />
      </Card>
    ),
    gallery: (
      <Card titulo="📊 Ejercicio 7: Galería de Imágenes"
            tarea=" Navega entre las imágenes con botones"
            pista="💡 Pista: Usa useState para el índice y verifica límites con disabled"
            color='#e8b409ff'>
        <Gallery />
      </Card>
    )
  }

  return (
    <div className={styles.layout}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <h2>Ejercicios</h2>
        <ul>
          <li onClick={() => setActive("counter")}>Contador</li>
          <li onClick={() => setActive("text")}>Input Texto</li>
          <li onClick={() => setActive("toggle")}>Toggle</li>
          <li onClick={() => setActive("todo")}>Todo List</li>
          <li onClick={() => setActive("form")}>Formulario</li>
          <li onClick={() => setActive("color")}>Color Picker</li>
          <li onClick={() => setActive("calculator")}>Calculator</li>
          <li onClick={() => setActive("gallery")}>Gallery</li>
        </ul>
      </aside>

      {/* Contenido */}
      <main className={styles.content}>
        <h1>Ejercicios de estado en React</h1>
        {ejercicios[active]}
      </main>
    </div>
  )
}
