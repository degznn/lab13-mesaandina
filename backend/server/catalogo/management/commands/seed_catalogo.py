from django.core.management.base import BaseCommand

from catalogo.models import Categoria, Producto


class Command(BaseCommand):
    help = 'Carga categorías y productos de demostración para MesaAndina.'

    def handle(self, *args, **options):
        datos = {
            'Estrategia': ('Pachamama', 'Juego de estrategia para construir una comunidad andina sostenible.', '89.90', 12),
            'Familiar': ('Ruta Familiar', 'Una aventura sencilla para compartir entre niños y adultos.', '64.50', 8),
            'Cartas': ('Llamas en Fiesta', 'Cartas rápidas y divertidas para reuniones con amigos.', '39.90', 20),
        }
        for categoria_nombre, (nombre, descripcion, precio, cantidad) in datos.items():
            categoria, _ = Categoria.objects.get_or_create(nombre=categoria_nombre)
            Producto.objects.update_or_create(
                nombre=nombre,
                defaults={'descripcion': descripcion, 'precio': precio, 'cantidad_disponible': cantidad, 'categoria': categoria},
            )
        self.stdout.write(self.style.SUCCESS('Catálogo de demostración cargado correctamente.'))
