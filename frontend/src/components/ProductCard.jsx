function ProductCard({ product }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <img className="h-44 w-full object-cover" src={product.imagen} alt={product.nombre} />
      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-slate-900">{product.nombre}</h3>
          <span className="rounded-full bg-orange-100 px-2 py-1 text-xs font-semibold text-orange-700">{product.categoria}</span>
        </div>
        <p className="min-h-12 text-sm leading-6 text-slate-600">{product.descripcion}</p>
        <div className="flex items-center justify-between border-t border-slate-100 pt-3">
          <span className="text-xl font-bold text-orange-600">S/ {product.precio.toFixed(2)}</span>
          <span className="text-xs text-slate-500">Stock: {product.cantidad}</span>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
