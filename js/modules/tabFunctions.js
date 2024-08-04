/**
 * Configurar la funcionalidad de cambio de pestañas
 */
export function setupTabSwitching() {
  console.log('Configurando la funcionalidad de cambio de pestañas');
  const tabs = document.querySelectorAll('.tablist button');
  tabs.forEach(tab => {
    tab.addEventListener('click', (event) => showTab(event));
  });
}

/**
 * Mostrar la pestaña seleccionada y ocultar las otras
 * @param {Event} event - El evento de clic
 */
function showTab(event) {
  const tabId = event.currentTarget.getAttribute('data-tab');
  console.log(`Cambiando a la pestaña: ${tabId}`);

  const tabs = document.querySelectorAll('.tablist button');
  tabs.forEach(tab => tab.classList.remove('active'));

  const tabPanels = document.querySelectorAll('.tabpanel');
  tabPanels.forEach(panel => panel.classList.add('hidden'));

  const activeTab = document.getElementById(tabId);
  if (activeTab) {
    activeTab.classList.remove('hidden');
  }
  event.currentTarget.classList.add('active');
}
