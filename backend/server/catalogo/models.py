from django.db import models


class Categoria(models.Model):
    nombre = models.CharField(max_length=80, unique=True)

    class Meta:
        ordering = ['nombre']

    def __str__(self):
        return self.nombre


class Producto(models.Model):
    nombre = models.CharField(max_length=120)
    descripcion = models.TextField()
    precio = models.DecimalField(max_digits=8, decimal_places=2)
    imagen = models.URLField(blank=True)
    cantidad_disponible = models.PositiveIntegerField(default=0)
    categoria = models.ForeignKey(Categoria, on_delete=models.PROTECT, related_name='productos')

    class Meta:
        ordering = ['nombre']

    def __str__(self):
        return self.nombre
