import ProductCard from './ProductCard'

function ProductList({ products }) {
  if (products.length === 0) {
    return <p className="rounded-xl border border-dashed border-orange-200 bg-orange-50 p-8 text-center text-slate-600">No hay juegos disponibles en esta categoría.</p>
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => <ProductCard key={product.id} product={product} />)}
    </div>
  )
}

export default ProductList
