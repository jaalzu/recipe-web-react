import { useState } from 'react'
import Counter from './components/Counter/Counter'
import TodoList from './components/TodoList/TodoList'
import ColorPicker from './components/ColorPicker/ColorPicker'
import styles from './App.module.css'

export default function App() {
  const [selected, setSelected] = useState('Counter')

  const components = {
    Counter: <Counter />,
    TodoList: <TodoList />,
    ColorPicker: <ColorPicker />
  }

  return (
    <div className={styles.container}>
      {/* Barra lateral */}
      <aside className={styles.sidebar}>
        {Object.keys(components).map(name => (
          <button
            key={name}
            className={`${styles.sidebarBtn} ${selected === name ? styles.active : ''}`}
            onClick={() => setSelected(name)}
          >
            {name}
          </button>
        ))}
      </aside>

      {/* Contenido principal */}
      <main className={styles.main}>
        {components[selected]}
      </main>
    </div>
  )
}
