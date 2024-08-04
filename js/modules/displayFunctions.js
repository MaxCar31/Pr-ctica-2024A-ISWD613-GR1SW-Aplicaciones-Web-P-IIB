import { capitalizeFirstLetter, formatMoveName, formatStatName } from './utilityFunctions.js';

/**
 * Registrar que los datos se obtuvieron correctamente
 * @param {Object} data - Los datos obtenidos
 */
export function logDataFetched(data) {
  console.log('Datos obtenidos correctamente:', data);
}

/**
 * Mostrar el nombre del Pokémon en el encabezado
 * @param {string} name - El nombre del Pokémon
 */
export function displayPokemonName(name) {
  document.querySelector('.header h1').textContent = capitalizeFirstLetter(name);
}

/**
 * Mostrar la imagen del Pokémon
 * @param {string} imageUrl - La URL de la imagen del Pokémon
 */
export function displayPokemonImage(imageUrl) {
  document.getElementById('pokemon-image').src = imageUrl;
}

/**
 * Mostrar los tipos del Pokémon
 * @param {Array} types - El array de tipos del Pokémon
 */
export function displayPokemonTypes(types) {
  const typesContainer = document.getElementById('pokemon-types');
  typesContainer.innerHTML = ''; // Limpiar los tipos existentes
  types.forEach(type => {
    const div = document.createElement('div');
    div.classList.add('badge', `badge-${type.type.name}`);
    div.textContent = capitalizeFirstLetter(type.type.name);
    typesContainer.appendChild(div);
  });
}

/**
 * Mostrar las habilidades del Pokémon
 * @param {Array} abilities - El array de habilidades del Pokémon
 */
export function displayPokemonAbilities(abilities) {
  const abilitiesContainer = document.getElementById('pokemon-abilities');
  abilitiesContainer.innerHTML = ''; // Limpiar las habilidades existentes
  abilities.forEach(ability => {
    const div = document.createElement('div');
    div.classList.add('ability');
    div.innerHTML = `<h3>${capitalizeFirstLetter(ability.ability.name)}</h3><p>${ability.is_hidden ? '(Habilidad Oculta)' : ''}</p>`;
    abilitiesContainer.appendChild(div);
  });
}

// Variables para la paginación de movimientos
let currentPage = 1;
const movesPerPage = 10;
let allMoves = [];

/**
 * Mostrar los movimientos del Pokémon con paginación
 * @param {Array} moves - El array de movimientos del Pokémon
 */
export function displayPokemonMoves(moves) {
  console.log('Mostrando los movimientos del Pokémon:', moves);
  allMoves = moves;
  currentPage = 1;
  showMovesPage();
}

/**
 * Mostrar la página actual de movimientos
 */
function showMovesPage() {
  const movesContainer = document.getElementById('moves-list');
  movesContainer.innerHTML = ''; // Limpiar los movimientos existentes

  const startIndex = (currentPage - 1) * movesPerPage;
  const endIndex = startIndex + movesPerPage;

  const currentMoves = allMoves.slice(startIndex, endIndex);
  currentMoves.forEach(move => {
    const li = document.createElement('li');
    li.textContent = formatMoveName(move.move.name);
    movesContainer.appendChild(li);
  });

  document.getElementById('prev-button').disabled = currentPage === 1;
  document.getElementById('next-button').disabled = endIndex >= allMoves.length;
}

/**
 * Ir a la página anterior de movimientos
 */
export function prevMovesPage() {
  if (currentPage > 1) {
    currentPage--;
    showMovesPage();
  }
}

/**
 * Ir a la página siguiente de movimientos
 */
export function nextMovesPage() {
  const totalPages = Math.ceil(allMoves.length / movesPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    showMovesPage();
  }
}

/**
 * Mostrar las estadísticas del Pokémon
 * @param {Array} stats - El array de estadísticas del Pokémon
 */
export function displayPokemonStats(stats) {
  const statsContainer = document.getElementById('stats-list');
  statsContainer.innerHTML = ''; // Limpiar las estadísticas existentes
  stats.forEach(stat => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${formatStatName(stat.stat.name)}:</strong> ${stat.base_stat}`;
    statsContainer.appendChild(li);
  });
}
