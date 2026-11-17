# Evidencias del Laboratorio S13

Toma las capturas reales cuando completes cada ejercicio. En el informe, coloca el subtítulo y la descripción debajo de la imagen. No uses capturas de funcionalidades que aún no se hayan desarrollado.

## Ejercicio 1

### Figura 1. Planificación inicial de MesaAndina

Captura la planificación del negocio, su descripción, funcionalidades, categorías y campos del producto en el informe.

**Descripción:** En esta actividad definí MesaAndina como una tienda de juegos de mesa. También establecí las funciones iniciales del catálogo y los datos que se mostrarán para cada producto.

### Figura 2. Comunicación entre React, Django REST Framework y la base de datos

Captura el esquema de arquitectura del Ejercicio 1 con sus tres componentes y flechas de comunicación.

**Descripción:** Representé cómo React solicitará datos a Django REST Framework y cómo el backend consultará la base de datos para responder con la información del catálogo.

## Ejercicio 2

### Figura 3. Organización del frontend y backend del proyecto

**Captura:** En VS Code abre el proyecto `lab13-mesaandina` y expande `frontend/src` y `backend/server`. Deja visibles `components`, `pages`, `services`, `config`, `manage.py` y `requirements.txt`.

**Guardar en:** `evidencias/Ejercicio-02-Configuracion/figura-03-estructura.png`

**Descripción:** Organicé el proyecto en dos partes independientes: el frontend desarrollado con React y Vite, y el backend preparado con Django. También dejé separadas las carpetas para componentes, páginas y servicios del frontend.

### Figura 4. Dependencias de React, Tailwind CSS y shadcn/ui

**Captura:** Muestra `frontend/package.json` con React, Vite, Tailwind CSS y las dependencias de componentes. Luego muestra `frontend/tailwind.config.js` y `frontend/components.json`; si no entran juntos, usa dos imágenes para esta misma figura.

**Guardar en:** `evidencias/Ejercicio-02-Configuracion/figura-04-configuracion-frontend.png`

**Descripción:** Instalé React con Vite y configuré Tailwind CSS para aplicar estilos con utilidades. Además, preparé la configuración de shadcn/ui y una carpeta de componentes reutilizables para la interfaz.

### Figura 5. Preparación de Django REST Framework y CORS

**Captura:** Muestra `backend/requirements.txt` con Django, Django REST Framework y django-cors-headers. En otra toma, muestra `backend/server/config/settings.py` donde aparecen `rest_framework`, `corsheaders`, su middleware y los orígenes locales permitidos.

**Guardar en:** `evidencias/Ejercicio-02-Configuracion/figura-05-configuracion-backend.png`

**Descripción:** Preparé el entorno del backend con Django y Django REST Framework, además de habilitar CORS para el desarrollo local. Esta configuración permitirá conectar el frontend con los servicios REST en los siguientes ejercicios.

### Figura 6. Ejecución local del frontend y backend

**Captura:** Ejecuta `npm run dev` desde `frontend` y `python manage.py runserver 127.0.0.1:8000` desde `backend/server`. Muestra ambos terminales con las direcciones activas y el navegador con la página Vite y el panel `/admin/` de Django. Puedes hacer dos capturas para que se lea todo.

**Guardar en:** `evidencias/Ejercicio-02-Configuracion/figura-06-servidores-locales.png`

**Descripción:** Inicié los dos servidores en el equipo y comprobé que Vite respondió en el puerto 5173 y Django en el puerto 8000. También verifiqué que ambas direcciones locales cargaran correctamente.

Los ejercicios 3 a 6 se documentarán aquí cuando se desarrollen, para que cada descripción coincida con las capturas reales.
