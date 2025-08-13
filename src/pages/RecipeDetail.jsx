import { useParams, Link } from 'react-router-dom'
import { recipes } from '../data/recipes'

export default function RecipeDetail() {
  const { id } = useParams()
  const recipe = recipes.find(r => r.id === parseInt(id))

  if (!recipe) return <p>Receta no encontrada.</p>

  return (
    <>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <h4>Ingredientes:</h4>
      <ul>
        {recipe.ingredients.map((ing, index) => <li key={index}>{ing}</li>)}
      </ul>
      <Link to="/">← Volver</Link>
    </>
  )
}
