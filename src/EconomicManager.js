class EconomicManager {
  async getData() {
    const fetchJSON = async (url) => {
      const response = await fetch(url);
      return response.json();
    };

    this.countries = await fetchJSON('./dashboard/countries.json');
    this.goods = await fetchJSON('./dashboard/goods.json');
    this.tradenodes = await fetchJSON('./dashboard/tradenodes.json');
  }

  initIncome() {
    this.countries.list.forEach((country) => {
      country.income = new Income();
    });
  }

  countBaseIncome() {
    for (let country of this.countries.list) {
      for (let tradenode of this.tradenodes.list) {
        for (let tradeCountry of tradenode.countries) {
          if (tradeCountry.id === country.id) {
            const incomeIncrease =
              (tradenode.income * tradeCountry.influence * country.efficiency) /
              10000;
            country.income.base += incomeIncrease;
          }
        }
      }
    }
  }

  countTradeIncome() {
    for (let good of this.goods.list) {
      good.tradeCost = 0;
      good.countries = [];

      for (let country of this.countries.list) {
        if (country.goods.includes(good.id)) {
          good.countries.push(country.id);
        } else {
          good.tradeCost += (country.income.base * good.share) / 100;
        }
      }

      good.countryIncome = Math.floor(good.tradeCost / good.countries.length);

      for (let countryId of good.countries) {
        let country = this.countries.list.find((c) => c.id == countryId);
        country.income.trade += good.countryIncome;
      }
    }
  }

  countFullIncome() {
    this.countries.list.forEach((country) => {
      country.income.full = country.income.base + country.income.trade;
    });
  }
}
