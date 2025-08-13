import { Routes, Route } from 'react-router-dom'
import { Link, useParams } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import RecipeDetail from './pages/RecipeDetail'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </main>
      <Footer year={2025} />
    </>
  )
}
