/**
 * Obtener datos de la API dada la URL
 * @param {string} url - La URL de la API para obtener datos
 * @returns {Promise<Object>} - Los datos obtenidos
 */
export function fetchData(url) {
  console.log(`Fetching data from URL: ${url}`);
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log("Datos obtenidos de la API:", data);
      return data;
    })
    .catch(error => {
      console.error('Error al obtener los datos:', error);
      return null;
    });
}
