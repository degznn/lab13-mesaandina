function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div id="categorias" className="flex flex-wrap gap-2" aria-label="Filtrar por categoría">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onCategoryChange(category)}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${selectedCategory === category ? 'bg-orange-600 text-white shadow-sm' : 'bg-white text-slate-600 ring-1 ring-inset ring-slate-200 hover:bg-orange-50 hover:text-orange-700'}`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
