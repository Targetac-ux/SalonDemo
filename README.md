# AURUM - Salón de Belleza Unisex Premium

Sitio web de landing page para AURUM, un salón de belleza premium unisex que ofrece servicios de corte, diseño, tratamientos capilares y servicios de spa.

## 🌟 Características

- **Diseño Responsivo**: Totalmente adaptado para desktop, tablet y mobile
- **Hero Section**: Imagen de fondo impactante con CTA
- **Servicios**: 3 categorías de servicios (Para Él, Para Ella, Uñas & Spa)
- **Galería**: Showcae de trabajos en layout masonry con 6 imágenes
- **Testimonios**: Carrusel automático de testimonios de clientes
- **Contacto**: Formulario de reserva de citas con validación
- **Navbar Dinámico**: Cambio de estilo al hacer scroll
- **Menú Móvil**: Menú hamburguesa full-screen en dispositivos móviles
- **Animaciones**: Scroll-reveal para elementos al desplazarse

## 🎨 Paleta de Colores

- **Dorado Primario**: `#C4975A`
- **Dorado Hover**: `#D4A96E`
- **Fondo Oscuro**: `#0D0B08`
- **Cream**: `#F5F1EB`
- **Off-white**: `#F8F4EE`

## 🔤 Tipografía

- **Cormorant Garamond** - Serif elegante para títulos y headings
- **Jost** - Sans-serif moderna para body text

## 📁 Estructura del Proyecto

```
SalonDemo/
├── index.html          # Página principal HTML5
├── styles.css          # Estilos CSS (sin dependencias)
├── script.js           # JavaScript vanilla
├── vercel.json         # Configuración de Vercel
├── README.md           # Este archivo
├── .gitignore          # Archivos a ignorar en Git
└── public/
    └── images/
        └── galeria/
            ├── HeroPrincipal.png
            ├── CorteCaballero.png
            ├── DisenoBarba.png
            ├── BalaygeNatural.png
            ├── UnasAcrilicas.png
            ├── PeinadoElegante.png
            ├── NutricionCapilar.png
            ├── PorQueElegirnos.png
            ├── Testimonios.png
            └── Reservaciones.png
```

## 🚀 Deployment en Vercel

### Pasos para deploy

1. **Crear repositorio en GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AURUM landing page"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/salon-demo.git
   git push -u origin main
   ```

2. **Importar en Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Haz clic en "New Project"
   - Selecciona el repositorio `SalonDemo`
   - Vercel detectará automáticamente que es un sitio estático
   - Haz clic en "Deploy"

3. **Listo** ✅
   Tu sitio estará disponible en una URL como `https://salon-demo.vercel.app`

### Configuración automática
- Vercel servira directamente los archivos estáticos
- No requiere compilación ni build
- Las imágenes se optimizan automáticamente
- Las fuentes desde CDN se cachean

## 🌐 CDNs Utilizados

- **Google Fonts**: Cormorant Garamond + Jost
- **Font Awesome 6.5.1**: Iconografía

## 📱 Responsividad

| Breakpoint | Descripción |
|---|---|
| **1200px+** | Desktop completo |
| **768px - 1199px** | Tablet |
| **480px - 767px** | Mobile landscape |
| **< 480px** | Mobile portrait |

## ✨ Secciones

### Hero (`#inicio`)
- Imagen de fondo fullscreen
- CTA principal "Reservar Cita"
- Scroll indicator animado

### Servicios (`#servicios`)
- 3 tabs interactivos: Para Él, Para Ella, Uñas & Spa
- 4 servicios por categoría
- Cards con descripción y precio

### Galería (`#galeria`)
- 6 imágenes en layout masonry
- Overlay con categoría y título
- Hover effects elegantes
- Link a Instagram

### Por Qué Elegirnos (`#nosotros`)
- 4 puntos clave de diferenciación
- Numeración romana
- Fondo decorativo

### Testimonios (`#testimonios`)
- Carrusel de 4 testimonios
- Auto-advance cada 5.2 segundos
- Controles manuales (flechas y dots)
- Rating de 5 estrellas

### Contacto (`#contacto`)
- Formulario de reserva de citas
- Campos: nombre, servicio, fecha, hora, teléfono, notas
- Información de ubicación, horarios, teléfono
- Validación en cliente

### Footer
- Links de navegación
- Copyright

## 🔧 Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Estilos sin preprocesadores
- **JavaScript Vanilla** - Sin dependencias

## 📦 Sin Dependencias Externas

Este proyecto es 100% vanilla:
- ✅ Sin frameworks (React, Vue, Angular)
- ✅ Sin bundlers (Webpack, Vite, Parcel)
- ✅ Sin npm/node_modules
- ✅ Sin build step requerido

Solo requiere conexión a internet para las fuentes y iconos desde CDN.

## 📄 Licencia

© 2024 Aurum Salón de Belleza. Todos los derechos reservados.

---

**Demo en vivo**: [salon-demo.vercel.app](https://salon-demo.vercel.app)
