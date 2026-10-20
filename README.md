# RIGMaster

**Hardware y sostenibilidad.**

Sitio web educativo para quienes quieren conocer los componentes de una PC y dar sus primeros pasos en el armado de un equipo, con énfasis en la reutilización de hardware y la reducción de residuos electrónicos.

[Ver el sitio](https://mastercookieuy.github.io/RIGMaster-ProyectoDESEM/)

> Proyecto final del programa **Yo Puedo Programar**, de **DESEM Junior Achievement**, realizado en 2025. El trabajo recibió la distinción **«Página Dorada»** en la graduación del programa.

## Sobre el proyecto

RIGMaster surge de mi interés por el hardware y de mi experiencia ayudando a otras personas a elegir componentes y armar sus computadoras. La propuesta busca acercar información sobre el funcionamiento de una PC a quienes todavía no saben por dónde empezar.

El proyecto combina esa temática con un enfoque ambiental: aprovechar componentes usados o reacondicionados, extender la vida útil de los equipos y promover decisiones de consumo más conscientes.

Se desarrolló como un prototipo frontend para aplicar los conocimientos del curso, con foco en el diseño de la interfaz, la organización de contenidos y la experiencia de navegación.

## Contenido e interacciones

- **Guía de componentes:** carrusel sobre procesador, tarjeta gráfica, memoria RAM, placa madre, almacenamiento, fuente de alimentación, refrigeración y gabinete, con información ampliable mediante botones «Leer más».
- **Configuraciones destacadas:** galería con una clasificación visual de equipos y datos de ejemplo sobre componentes, precios e interacciones.
- **Introducción al armado de PC:** contenido orientativo y un tutorial en video integrado desde YouTube.
- **Sostenibilidad:** información sobre residuos electrónicos y pautas para reutilizar hardware y evaluar componentes de segunda mano.
- **Navegación y presentación:** enlaces entre secciones, animaciones CSS, transiciones y una identidad visual inspirada en el mundo del gaming.

## Tecnologías

| Herramientas usadas en el proyecto |
| --- | --- |
| HTML | Estructura de la página y organización del contenido |
| CSS | Estilos personalizados, maquetación con Flexbox, animaciones y transiciones |
| Bootstrap | Carrusel de componentes y clases de utilidad |
| JavaScript | Interacción básica para mostrar y ocultar información |
| Font Awesome | Iconos de la interfaz |
| GitHub Pages | Publicación |

## Alcance de esta versión

El sitio es una demostración académica de frontend. Las secciones informativas y las interacciones descritas forman parte de la implementación actual.

El constructor de PC y el foro se presentan como parte del concepto del producto y todavía no cuentan con funcionalidad propia. La clasificación de equipos utiliza contenido estático de demostración; no hay registro de usuarios, votaciones, publicaciones ni validación automática de compatibilidad. El proyecto no incluye backend ni base de datos.

La versión actual está diseñada principalmente para **pantallas de escritorio**, con una presentación pensada para formato 16:9. La adaptación completa a teléfonos y tabletas queda pendiente.

## Estructura del repositorio

| Archivos |
| --- | --- |
| `index.html` | Página principal y secciones del sitio |
| `style.css` | Estilos, distribución de elementos y animaciones |
| `main.js` | Función para mostrar y ocultar contenido |
| `imagenes/` | Imágenes de componentes, equipos, logotipos y otros recursos visuales |
| `README.md` | Presentación y documentación del proyecto |

## Posibles mejoras

- Completar el diseño responsive para distintos tamaños de pantalla.
- Revisar la accesibilidad, la navegación con teclado y las preferencias de movimiento reducido.
- Optimizar las imágenes y la carga de recursos externos.
- Ampliar el prototipo con un configurador de componentes y funciones de comunidad.

## Créditos

**Ian Franco** · [MasterCookieUY](https://github.com/MasterCookieUY)

Proyecto realizado en el marco de **Yo Puedo Programar — DESEM Junior Achievement (2025)**.

La función de mostrar y ocultar contenido de `main.js` fue proporcionada en el curso. El tutorial de ensamblaje integrado en la página corresponde a **Sara’s Tech**.
