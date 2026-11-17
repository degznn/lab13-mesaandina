function Header() {
  return (
    <header className="border-b border-orange-100 bg-white/95 shadow-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-600">Juegos para compartir</p>
          <h1 className="text-2xl font-bold text-slate-900">MesaAndina</h1>
        </div>
        <nav aria-label="Navegación principal" className="flex gap-4 text-sm font-medium text-slate-600">
          <a className="transition hover:text-orange-600" href="#catalogo">Catálogo</a>
          <a className="transition hover:text-orange-600" href="#categorias">Categorías</a>
          <a className="transition hover:text-orange-600" href="#nosotros">Nosotros</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
