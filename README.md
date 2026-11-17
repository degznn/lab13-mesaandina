# MesaAndina

Proyecto académico del Laboratorio S13 para estructurar una tienda virtual con ReactJS, Vite, Tailwind CSS, shadcn/ui, Django REST Framework y SQLite.

## Estructura

```text
lab13-mesaandina/
├── frontend/                 # React + Vite
│   ├── src/components/ui/     # Componentes base shadcn/ui
│   ├── src/pages/             # Páginas de la tienda
│   └── src/services/          # Cliente y servicios HTTP
├── backend/
│   ├── requirements.txt
│   └── server/                # Proyecto Django
└── evidencias/               # Capturas reales por ejercicio
```

## Requisitos

- Node.js y npm.
- Python 3.10 o posterior.

## Frontend

```powershell
cd frontend
npm install
npm run dev
```

Vite indica la dirección local al iniciar, normalmente `http://localhost:5173`.

## Backend

Desde la carpeta principal del proyecto:

```powershell
cd backend
.\.venv\Scripts\Activate.ps1
cd server
python manage.py migrate
python manage.py runserver 127.0.0.1:8000
```

La base usa SQLite. Django REST Framework y CORS están instalados y registrados para permitir la futura comunicación con Vite.

## Estado del laboratorio

La base de frontend y backend está preparada. Los componentes de catálogo y los modelos/endpoints de productos se desarrollarán en los ejercicios siguientes, siguiendo la guía S13.
