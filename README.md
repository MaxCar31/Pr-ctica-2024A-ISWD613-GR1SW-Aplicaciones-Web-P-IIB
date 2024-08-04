# Práctica-2024A-ISWD613-GR1SW-Aplicaciones-Web-P-IIB
Este repositorio contiene un proyecto de práctica para la asignatura 2024A-ISWD613-GR1SW-Aplicaciones Web-P-IIB. La aplicación web muestra información detallada sobre un Pokémon específico usando la API de Pokémon

![image](https://github.com/user-attachments/assets/20bbcbc2-eab0-45b0-b2fb-87e6264e97bb)

## Características

- Muestra el nombre, imagen, tipos, habilidades y movimientos del Pokémon.
- Implementa paginación para los movimientos.
- Utiliza JavaScript modular para una mejor organización del código.

## Requisitos

- Visual Studio Code (recomendado, para usar `Live Server`) o
- Node.js (opcional, para usar `http-server`)

## Configuración y Ejecución

### Usando Visual Studio Code con Live Server

1. Abre el proyecto en Visual Studio Code.
2. Instala la extensión [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) si no la tienes instalada.
3. Haz clic derecho en `index.html` y selecciona `Open with Live Server`.


## Estructura del Proyecto

```sh
2024A-ISWD613-GR1SW-Aplicaciones-Web-P-IIB/
│
├── css/
│ └── styles.css
│
├── images/
│ └── background.jpg
│
├── js/
│ ├── app.js
│ ├── modules/
│ │ ├── displayFunctions.js
│ │ ├── fetchData.js
│ │ ├── tabFunctions.js
│ │ └── utilityFunctions.js
│
└── index.html
```

- **css/styles.css**: Contiene los estilos CSS para la página web.
- **images/background.jpg**: Imagen de fondo utilizada en la página web.
- **js/app.js**: Archivo principal de JavaScript que inicializa la aplicación.
- **js/modules/displayFunctions.js**: Contiene funciones para mostrar datos del Pokémon en la página.
- **js/modules/fetchData.js**: Contiene la función para obtener datos de la API de PokeAPI.
- **js/modules/tabFunctions.js**: Contiene funciones para manejar el cambio de pestañas en la interfaz.
- **js/modules/utilityFunctions.js**: Contiene funciones utilitarias adicionales.
- **index.html**: Archivo HTML principal que estructura la página web.

## Uso

- Navega por la aplicación para ver información detallada del Pokémon.
- Utiliza los botones "Anterior" y "Siguiente" para navegar por los movimientos del Pokémon.

## Contribuciones
- Las contribuciones son bienvenidas. Por favor, crea un fork del repositorio y envía un pull request con tus mejoras.

## Autor
- Desarrollado por Max Carrión como parte de un pequeño ejercicio academico de una asignatura. Puedes encontrar más sobre mí en GitHub.

# Licencia
- Este proyecto está licenciado bajo la MIT License - ver el archivo LICENSE para más detalles.



