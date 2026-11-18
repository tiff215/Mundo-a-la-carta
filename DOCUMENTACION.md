# Documentación del sitio "Mundo a la Carta"

Sitio de una sola página hecho con **React + Vite**. Muestra el propósito del proyecto, dos documentos, tres videos y el equipo.

## 1. Cómo correrlo

```bash
npm install      # solo la primera vez
npm run dev      # abre el sitio en http://localhost:5173
npm run build    # genera la carpeta dist/ para publicar
```

## 2. Mapa de archivos (qué tocar y qué no)

| Archivo | Para qué sirve | ¿Lo vas a editar? |
|---|---|---|
| `src/data/contenido.js` | **Todo el texto, enlaces, nombres y rutas de archivos.** | **Sí, casi siempre aquí** |
| `src/index.css` | Estilos globales originales (columna central de 1126px, fuente base). | Casi nunca |
| `src/pages/inicio.css` | Estilos de las secciones: propósito, tarjetas, documentos, videos, equipo. | Para cambiar el diseño |
| `src/components/*/…css` | Estilos de Navbar, HeroBanner, Button, SectionTitle y Footer (los originales). | Para cambiar esas partes |
| `src/pages/inicio.jsx` | Arma la página: el orden de las secciones. | Para agregar o quitar secciones |
| `src/components/Navbar/Navbar.jsx` | Barra superior y sus enlaces. | Si cambias secciones |
| `src/components/HeroBanner/HeroBanner.jsx` | Portada con la imagen de la familia y los 2 botones. | Para cambiar botones |
| `src/components/Showcase.jsx` | Tarjetas de documento, de video y de integrante. | Rara vez |
| `src/components/Button/` | Botón original de la cafetería (se reutiliza). | Para cambiar botones |
| `src/components/SectionTitle/SectionTitle.jsx` | Título + subtítulo de cada sección. | Rara vez |
| `src/components/Footer/Footer.jsx` | Pie de página. | Para cambiar el texto |
| `src/router/AppRouter.jsx` | Rutas. Ahora hay una sola página. | No |
| `src/assets/mundo-hero.png` | Imagen de la portada. | Para cambiar la imagen |
| `public/docs/` | Aquí van tus PDF y sus imágenes de vista previa. | Sí |
| `public/videos/` | Aquí van videos si no usas YouTube. | Opcional |
| `index.html` | Título de la pestaña y fuentes de Google. | Rara vez |

Los archivos de la cafetería (`pages/menu.jsx`, `acerca.jsx`, `contacto.jsx`, `resenas.jsx`, `components/ProductCard`, etc.) **ya no se usan**. Puedes borrarlos sin afectar el sitio.

## 3. Diseño y colores (los originales de la cafetería)

El diseño es el del proyecto original: barra café, portada con fondo arena, títulos centrados con línea café debajo, tarjetas blancas con esquinas redondeadas sobre fondo crema, botones café y fuente **Montserrat**. Los colores están escritos directamente en cada archivo CSS (como en el proyecto original):

| Color | Valor | Dónde se ve | Dónde cambiarlo |
|---|---|---|---|
| Café | `#8B5A2B` | Barra superior, botones, línea bajo los títulos, aro de fotos | `Navbar.css`, `Button.css`, `SectionTitle.css`, `inicio.css` |
| Café oscuro | `#4F362C` | Títulos, footer, hover de botones | `Footer.css`, `HeroBanner.css`, `Button.css`, `inicio.css` |
| Arena | `#CBAF8D` | Fondo de la portada, hover de la barra, botón de play | `HeroBanner.css`, `Navbar.css`, `inicio.css` |
| Crema | `#F8F5F2` | Fondo de la página | `inicio.css` (`.inicio-page`) |
| Texto | `#2B2B2B` | Párrafos | `HeroBanner.css`, `inicio.css` |

**Cómo cambiar un color:** en tu editor usa buscar y reemplazar en toda la carpeta `src` (por ejemplo `#8B5A2B` por el nuevo valor).

**Qué agregué al diseño original** (solo lo necesario para una página única): la barra superior se queda fija al bajar y se acomoda en dos líneas en celular; el botón puede usarse como enlace (`a.custom-button`) y tiene una versión blanca (`custom-button--claro`); el hero ahora lleva la imagen en un marco redondeado.

## 4. Cómo modificar cada parte

### Portada (hero)
- **Imagen:** reemplaza `src/assets/mundo-hero.png` conservando el nombre, o cambia el `import` en `HeroBanner.jsx`.
- **Frase y subtítulo:** `hero` en `src/data/contenido.js`.
- **Botones:** en `HeroBanner.jsx`, cambia el texto y el `href` (`#videos`, `#documentos`, etc.).
- **Tamaño de la imagen:** `.hero__img` en `HeroBanner.css` (`max-width: 960px`).

### Propósito
Edita `proposito` en `contenido.js`: `titulo`, `intro` y la lista `puntos` (cada uno con `titulo` y `texto`). Puedes agregar o quitar puntos.

### Documentos
En `documentos` de `contenido.js` cada documento tiene:
```js
{ titulo: "Modelado de negocio",
  descripcion: "Texto corto",
  archivo: "/docs/modelado-negocio.pdf",   // PDF dentro de public/docs
  vista: "/docs/modelado-negocio.png" }    // imagen de la primera página (opcional)
```
Pasos: 1) copia el PDF a `public/docs/`; 2) toma captura de su primera hoja y guárdala como PNG en la misma carpeta; 3) pon ambas rutas. Si dejas `archivo` vacío, aparece "Documento próximamente". Para un tercer documento, copia un bloque `{...}` más.

### Videos
En `videos` de `contenido.js`:
```js
{ titulo: "Prototipo", descripcion: "Texto corto",
  youtubeId: "dQw4w9WgXcQ",   // lo que va después de v= en el link de YouTube
  archivo: "",                // alternativa: "/videos/prototipo.mp4"
  miniatura: "" }             // opcional; con YouTube se genera sola
```
Usa `youtubeId` **o** `archivo`, no ambos. Si ambos están vacíos, la tarjeta muestra "Próximamente". Para que el video de YouTube se pueda ver, debe ser **público o no listado**.

### Equipo
En `equipo` de `contenido.js`: `nombre`, `rol` y `foto` (ej. `"/equipo/ana.jpg"`, con la imagen en `public/equipo/`). Sin foto se muestran las iniciales.

### Barra superior
Los enlaces están en el arreglo `links` de `Navbar.jsx`. Cada `id` debe coincidir con el `id` de una sección en `inicio.jsx`.

### Agregar una sección nueva
1. En `inicio.jsx`, dentro de `<main>`, agrega:
   ```jsx
   <section className="seccion" id="nueva">
     <SectionTitle title="Título" subtitle="Subtítulo" />
     ...contenido...
   </section>
   ```
2. Agrega `{ id: "nueva", label: "Nueva" }` en `Navbar.jsx`.
3. Usa `className="seccion"` para tener el mismo espaciado que las demás, y `grid grid--3` con `tarjeta` para tarjetas.

### Fuente
Se usa Montserrat (cargada en `index.html`), igual que en la cafetería.

## 5. Cómo funciona por dentro (resumen)
- La navegación usa **anclas** (`href="#videos"`): el navegador baja a la sección con ese `id`. El scroll suave está en `index.css`.
- Al hacer clic en un video se abre un `<dialog>` (ventana modal nativa). El video solo se carga al abrirlo y se detiene al cerrar.
- El diseño se adapta a celular con `@media` al final de `inicio.css`. En pantallas pequeñas las tarjetas pasan a una sola columna.

## 6. Problemas comunes
- **No se ve mi PDF o video:** revisa que la ruta empiece con `/` y que el archivo esté en `public/`. Ejemplo: `public/docs/a.pdf` → `"/docs/a.pdf"`.
- **La miniatura de YouTube no aparece:** revisa el ID y que el video no sea privado.
- **Cambié un color y no cambia:** busca si ese lugar usa un valor fijo (`#fff`, `rgba(...)`) en lugar de una variable `var(--...)`.
- **Al subir a un servidor no carga una imagen o CSS:** en servidores Linux importan las mayúsculas. Escribe los nombres de archivo exactamente igual en el código.
