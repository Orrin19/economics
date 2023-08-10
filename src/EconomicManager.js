class EconomicManager {
  async getData() {
    await fetch('./dashboard/countries.json')
      .then((response) => response.json())
      .then((data) => (this.countries = data));
    await fetch('./dashboard/goods.json')
      .then((response) => response.json())
      .then((data) => (this.goods = data));
    await fetch('./dashboard/tradenodes.json')
      .then((response) => response.json())
      .then((data) => (this.tradenodes = data));
  }

  initIncome() {
    for (let country of this.countries.list) country.income = new Income();
  }

  countBaseIncome() {
    for (let country of this.countries.list)
      for (let tradenode of this.tradenodes.list)
        for (let tradeCountry of tradenode.countries)
          if (tradeCountry.id == country.id)
            country.income.base +=
              (tradenode.income * tradeCountry.influence * country.efficiency) /
              10000;
  }

  countTradeIncome() {
    for (let good of this.goods.list) {
      good.tradeCost = 0;
      good.countries = [];
      for (let country of this.countries.list) {
        if (country.goods.includes(good.id)) good.countries.push(country.id);
        else good.tradeCost += (country.income.base * good.share) / 100;
      }
      good.countryIncome = Math.floor(good.tradeCost / good.countries.length);
      for (let country of good.countries)
        this.countries.list.find((c) => c.id == country).income.trade +=
          good.countryIncome;
    }
  }

  countFullIncome() {
    for (let country of this.countries.list)
      country.income.full = country.income.base + country.income.trade;
  }
}
