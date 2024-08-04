/**
 * Capitalizar la primera letra de una cadena
 * @param {string} string - La cadena a capitalizar
 * @returns {string} - La cadena capitalizada
 */
export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  /**
   * Formatear el nombre del movimiento para que sea más legible
   * @param {string} moveName - El nombre del movimiento a formatear
   * @returns {string} - El nombre del movimiento formateado
   */
  export function formatMoveName(moveName) {
    return moveName.split('-').map(word => capitalizeFirstLetter(word)).join(' ');
  }
  
  /**
   * Formatear el nombre de la estadística para que sea más legible
   * @param {string} statName - El nombre de la estadística a formatear
   * @returns {string} - El nombre de la estadística formateado
   */
  export function formatStatName(statName) {
    return statName.split('-').map(word => capitalizeFirstLetter(word)).join(' ');
  }
  