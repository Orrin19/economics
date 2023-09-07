async function configureEconomics() {
  const economicManager = new EconomicManager();
  await economicManager.getData();
  economicManager.initIncome();
  economicManager.countBaseIncome();
  economicManager.countTradeIncome();
  economicManager.countFullIncome();
  return economicManager;
}
