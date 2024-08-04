// Importa la función fetchData desde el archivo fetchData.js
import { fetchData } from './modules/fetchData.js';

// Importa varias funciones de display desde el archivo displayFunctions.js
import { displayPokemonName, displayPokemonImage, displayPokemonTypes, displayPokemonAbilities, displayPokemonMoves, displayPokemonStats, logDataFetched, prevMovesPage, nextMovesPage } from './modules/displayFunctions.js';

// Importa la función setupTabSwitching desde el archivo tabFunctions.js
import { setupTabSwitching } from './modules/tabFunctions.js';

// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  // URL de la API para obtener los datos del Pokémon con ID 7
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/7'; 

  // Imprime un mensaje en la consola indicando el inicio de la carga de datos
  console.log("Iniciando la carga de datos del Pokémon");

  // Llama a la función fetchData con la URL de la API
  fetchData(apiUrl)
    .then(data => {
      // Si se obtienen datos, se procesan y se muestran en la página
      if (data) {
        logDataFetched(data); // Registra los datos obtenidos
        displayPokemonName(data.name); // Muestra el nombre del Pokémon
        displayPokemonImage(data.sprites.front_default); // Muestra la imagen del Pokémon
        displayPokemonTypes(data.types); // Muestra los tipos del Pokémon
        displayPokemonAbilities(data.abilities); // Muestra las habilidades del Pokémon
        displayPokemonMoves(data.moves); // Muestra los movimientos del Pokémon
        displayPokemonStats(data.stats); // Muestra las estadísticas del Pokémon
      }
    })
    .catch(error => console.error('Error al obtener los datos del Pokémon:', error)); // Maneja cualquier error en la obtención de datos
  
  // Configura la funcionalidad de cambio de pestañas
  setupTabSwitching();

  // Añade un evento de clic al botón de "previo" para cambiar a la página anterior de movimientos
  document.getElementById('prev-button').addEventListener('click', prevMovesPage);

  // Añade un evento de clic al botón de "siguiente" para cambiar a la página siguiente de movimientos
  document.getElementById('next-button').addEventListener('click', nextMovesPage);
});