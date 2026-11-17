from django.urls import path

from .views import CategoriaList, ProductoList

urlpatterns = [
    path('categorias/', CategoriaList.as_view(), name='categorias'),
    path('productos/', ProductoList.as_view(), name='productos'),
]
