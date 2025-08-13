import { useState } from 'react'
import { recipes } from '../data/recipes'
import SearchBar from '../components/SearchBar'
import RecipeList from '../components/Recipe/RecipeList'

export default function Home() {
  const [search, setSearch] = useState('')

  const filteredRecipes = recipes.filter(r =>
    r.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <h2>Recetas</h2>
      <SearchBar value={search} onChange={setSearch} />
      <RecipeList recipes={filteredRecipes} />
    </>
  )
}
