import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header style={{ padding: '1rem', background: '#eee' }}>
      <h1>Mi Recetario</h1>
      <nav>
        <Link to="/">Inicio</Link>
      </nav>
    </header>
  )
}
