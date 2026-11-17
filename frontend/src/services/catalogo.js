const API_URL = 'http://127.0.0.1:8000/api'

export async function obtenerProductos() {
  const response = await fetch(`${API_URL}/productos/`)
  if (!response.ok) throw new Error('No se pudieron obtener los productos')
  return response.json()
}

export async function obtenerCategorias() {
  const response = await fetch(`${API_URL}/categorias/`)
  if (!response.ok) throw new Error('No se pudieron obtener las categorías')
  return response.json()
}
