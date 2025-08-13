import { Link } from 'react-router-dom'

export default function RecipeCard({ recipe }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      <Link to={`/recipe/${recipe.id}`}>Ver detalles</Link>
    </div>
  )
}
