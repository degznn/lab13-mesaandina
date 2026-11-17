import { useEffect, useMemo, useState } from 'react'
import './App.css'
import CategoryFilter from './components/CategoryFilter'
import Header from './components/Header'
import ProductList from './components/ProductList'
import { obtenerCategorias, obtenerProductos } from './services/catalogo'

const productosIniciales = [
  { id: 1, nombre: 'Pachamama', descripcion: 'Juego de estrategia para construir una comunidad andina sostenible.', precio: 89.9, categoria: 'Estrategia', imagen: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=900&q=80', cantidad: 12 },
  { id: 2, nombre: 'Ruta Familiar', descripcion: 'Una aventura sencilla para compartir entre niños y adultos.', precio: 64.5, categoria: 'Familiar', imagen: '/src/assets/hero.png', cantidad: 8 },
  { id: 3, nombre: 'Llamas en Fiesta', descripcion: 'Cartas rápidas y divertidas para reuniones con amigos.', precio: 39.9, categoria: 'Cartas', imagen: 'https://images.unsplash.com/photo-1548266652-99cf27701ced?auto=format&fit=crop&w=900&q=80', cantidad: 20 },
]

function App() {
  const [products, setProducts] = useState(productosIniciales)
  const [categoriesFromApi, setCategoriesFromApi] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    Promise.all([obtenerProductos(), obtenerCategorias()])
      .then(([apiProducts, apiCategories]) => {
        setProducts(apiProducts.map((product) => ({
          ...product,
          categoria: product.categoria_nombre,
          cantidad: product.cantidad_disponible,
        })))
        setCategoriesFromApi(apiCategories.map((category) => category.nombre))
      })
      .catch(() => setError('No se pudo conectar con Django. Se muestran datos de demostración.'))
      .finally(() => setLoading(false))
  }, [])

  const categories = ['Todos', ...(categoriesFromApi.length ? categoriesFromApi : [...new Set(products.map((product) => product.categoria))])]
  const filteredProducts = useMemo(
    () => selectedCategory === 'Todos' ? products : products.filter((product) => product.categoria === selectedCategory),
    [products, selectedCategory],
  )

  return (
    <div className="min-h-screen bg-orange-50/60 text-slate-900">
      <Header />
      <main id="catalogo" className="mx-auto max-w-6xl space-y-8 px-4 py-10">
        <section className="rounded-3xl bg-slate-900 px-6 py-10 text-white shadow-xl sm:px-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">Catálogo 2026</p>
          <h2 className="max-w-2xl text-3xl font-bold sm:text-5xl">Juegos para reunirse, pensar y compartir.</h2>
          <p className="mt-4 max-w-2xl text-slate-300">Descubre juegos de mesa seleccionados para cada tipo de reunión.</p>
        </section>
        <section className="space-y-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="text-sm font-semibold text-orange-600">Explora nuestra colección</p><h2 className="text-2xl font-bold">Juegos disponibles</h2></div>
            <p className="text-sm text-slate-500">{filteredProducts.length} producto(s) mostrado(s)</p>
          </div>
          {loading && <p className="text-sm text-slate-500">Cargando información del catálogo...</p>}
          {error && <p className="rounded-lg bg-amber-100 p-3 text-sm text-amber-800">{error}</p>}
          <CategoryFilter categories={categories} selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
          <ProductList products={filteredProducts} />
        </section>
        <footer id="nosotros" className="border-t border-orange-100 py-6 text-sm text-slate-500">MesaAndina · Juegos para compartir en familia y con amigos.</footer>
      </main>
    </div>
  )
}

export default App
