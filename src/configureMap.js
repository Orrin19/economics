(async function configureMap() {
  var economicManager = await configureEconomics();
  for (const tradenode of economicManager.tradenodes.list) {
    const region = document.getElementById(tradenode.id);
    region.addEventListener('click', (event) =>
      showTradenodeInfo(event, economicManager)
    );
  }

  resizeMap();
  window.addEventListener('resize', resizeMap);
})();
