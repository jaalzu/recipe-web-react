import { useState } from 'react';
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
import Quiz from './components/Quiz/Quiz'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'
import PasswordGenerator from './components/PasswordGenerator/PasswordGenerator'
import TemperatureConversor from './components/TemperatureConversor/TemperatureConversor'
import CalculatorTips from './components/CalculatorTips/CalculatorTips'
import Timer from './components/Timer/Timer';
import LikeButton from './components/LikeButton/LikeButton';
import PasswordToggle from './components/PasswordToggle/PasswordToggle';
import StarRating from './components/StarRating/StarRating';
import Cronometro from './components/Cronometro/Cronometro';

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
    ),
    quiz: (
      <Card titulo="📊 Ejercicio 8: Quiz Interactivo"
            tarea=" Sistema de preguntas con puntuación"
            pista="💡 Pista: Compara el índice clickeado con pregunta.correcta"
            color='#8c43c9'>
        <Quiz />
      </Card>
    ),
     shoppingCart: (
      <Card titulo="📊 Ejercicio 9: Carrito de Compras"
            tarea=" Agregar/quitar productos y calcular total"
            pista="💡 Pista: Usa array de objetos para el carrito y reduce() para calcular total"
            color='#31e311ff'>
        <ShoppingCart />
      </Card>
    ),
     passwordGenerator: (
      <Card titulo="📊 Ejercicio 10: Generador de contraseñas"
            tarea=" Genera contraseñas aleatorias "
            pista="💡 Pista:  Usa Math.random(), charAt() y concatena strings según las opciones seleccionadas"
            color='#ef454d'>
        <PasswordGenerator />
      </Card>
    ),
     temperatureConversor: (
      <Card titulo="📊 Ejercicio 11: Conversor de Temperatura"
            tarea=" Convierte entre Celsius , Fahrenheit y Kelvin "
            pista="💡 Pista:  F = C x 9/5 + 32 | K = C + 273.15"
            color='#00e2e6ff'>
        <TemperatureConversor />
      </Card>
    ),
    calculatorTips: (
      <Card titulo="📊 Ejercicio 12: Calculadora de Propinas"
            tarea=" Calcular propinas y dividir entre personas "
            pista="💡 Pista:  propina = monto x (porcentaje / 100)"
            color='#fa04edff'>
        <CalculatorTips />
      </Card>
    ),
    timer: (
      <Card titulo="📊 Ejercicio 13: Reloj digital"
            tarea=" Mostrar hora actual que se actualice automáticamente "
            pista="💡 Pista:  use new Date() y setInterval() con useEffect"
            color='#bdc703ff'>
        <Timer />
      </Card>
    ),
    likeButton: (
      <Card titulo="📊 Ejercicio 14: Like Button"
            tarea=" Hover y cambio de texto en el like button! "
            color='#7a008aff'>
          <LikeButton></LikeButton>
      </Card>
    ),
    starRating: (
      <Card titulo="📊 Ejercicio 15: Star Rating"
            tarea=" Hover en las estrellas "
            color='#06b0f4ff'>
      </Card>
    ),
    passwordToggle: (
      <Card titulo="📊 Ejercicio 16: Password Toggle"
            tarea=" Show & Hide Password "
            color='#00ff80ff'>
      </Card>
    ),
    cronometro: (
      <Card titulo="📊 Ejercicio 17: cronometro"
            tarea=" Cronometro funcional! "
            color='#4000ffff'>
      </Card>
    )

  }

  const items = [
    { id: 'counter', label: 'Contador' },
    { id: 'text', label: 'Input Texto' },
    { id: 'toggle', label: 'Toggle' },
    { id: 'todo', label: 'Todo List' },
    { id: 'form', label: 'Formulario' },
    { id: 'color', label: 'Color Picker' },
    { id: 'calculator', label: 'Calculator' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'quiz', label: 'Quiz' },
    { id: 'shoppingCart', label: 'Shopping Cart' },
    { id: 'passwordGenerator', label: 'Password Generator' },
    { id: 'temperatureConversor', label: 'Temperature Conversor' },
    { id: 'calculatorTips', label: 'Calculator Tips' },
    { id: 'timer', label: 'Timer' },
    { id: 'likeButton', label: 'Like Button' },
    { id: 'starRating', label: 'Star Rating' },
    { id: 'passwordToggle', label: 'Password Toggle' },
    { id: 'cronometro', label: 'Crónometro' }
  ];

  return (
    <div className={styles.layout}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h2>🎯 Ejercicios React</h2>
        </div>
        <ul>
          {items.map(item => (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={active === item.id ? styles.active : ''}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </aside>

      {/* Contenido */}
      <main className={styles.content}>
        {ejercicios[active]}
      </main>
    </div>
  )
}
