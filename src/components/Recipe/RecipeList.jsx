import RecipeCard from './RecipeCard'

export default function RecipeList({ recipes }) {
  if (recipes.length === 0) {
    return <p>No hay recetas que coincidan.</p>
  }

  return (
    <div style={{ display: 'grid', gap: '1rem' }}>
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  )
}
