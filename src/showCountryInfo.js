function buildCountryWindow(country) {
  const countryWindow = document.createElement('div');
  countryWindow.classList.add('window', 'country-window');

  const closeButton = document.createElement('button');
  closeButton.classList.add('window__close', 'country-window__close');
  closeButton.addEventListener('click', () => {
    countryWindow.remove();
  });
  countryWindow.append(closeButton);

  const countryName = document.createElement('div');
  countryName.classList.add('window__name');
  const countryNameText = document.createElement('h2');
  countryNameText.textContent = country.name;
  countryName.append(countryNameText);
  countryWindow.append(countryName);

  const countryFlag = document.createElement('div');
  countryFlag.classList.add('country-window__flag');
  const countryFlagImg = document.createElement('img');
  countryFlag.style.backgroundImage = `url('/assets/flags/${country.id}.png')`;
  countryFlag.append(countryFlagImg);
  countryWindow.append(countryFlag);

  const countryTreasure = document.createElement('div');
  countryTreasure.classList.add(
    'window__parameter',
    'country-window__treasure'
  );
  const countryTreasureIcon = document.createElement('div');
  countryTreasureIcon.classList.add(
    'window__parameter-icon',
    'country-window__treasure-icon'
  );
  const countryTreasureValue = document.createElement('span');
  countryTreasureValue.classList.add(
    'window__parameter-value',
    'country-window__treasure-value'
  );
  countryTreasureValue.innerText = 'Казна государства: ' + country.treasure;
  countryTreasure.title =
    'Денежные накопления, которыми правительство в лице игрока может распоряжаться';
  countryTreasure.append(countryTreasureIcon, countryTreasureValue);
  countryWindow.append(countryTreasure);

  const countryFullIncome = document.createElement('div');
  countryFullIncome.classList.add(
    'window__parameter',
    'country-window__income-full'
  );
  const countryFullIncomeIcon = document.createElement('div');
  countryFullIncomeIcon.classList.add(
    'window__parameter-icon',
    'country-window__income-full-icon'
  );
  const countryFullIncomeValue = document.createElement('span');
  countryFullIncomeValue.classList.add(
    'window__parameter-value',
    'country-window__income-full-value'
  );
  countryFullIncomeValue.innerText =
    'Общая прибыль: ' + Math.floor(country.income.full);
  countryFullIncome.title = 'Ежесезонный доход государства';
  countryFullIncome.append(countryFullIncomeIcon, countryFullIncomeValue);
  countryWindow.append(countryFullIncome);

  const countryBaseIncome = document.createElement('div');
  countryBaseIncome.classList.add(
    'window__parameter-small',
    'country-window__income-base'
  );
  const countryBaseIncomeValue = document.createElement('span');
  countryBaseIncomeValue.classList.add(
    'window__parameter-small-value',
    'country-window__income-base-value'
  );
  countryBaseIncomeValue.innerText =
    'Прибыль от влияния: ' + Math.floor(country.income.base);
  countryBaseIncome.title =
    'Доход государства от влияния в мировых торговых узлах';
  countryBaseIncome.append(countryBaseIncomeValue);
  countryWindow.append(countryBaseIncome);

  const countryTradeIncome = document.createElement('div');
  countryTradeIncome.classList.add(
    'window__parameter-small',
    'country-window__income-trade'
  );
  const countryTradeIncomeValue = document.createElement('span');
  countryTradeIncomeValue.classList.add(
    'window__parameter-small-value',
    'country-window__income-trade-value'
  );
  countryTradeIncomeValue.innerText =
    'Прибыль от торговли: ' + Math.floor(country.income.trade);
  countryTradeIncome.title = 'Доход государства от сбыта товаров';
  countryTradeIncome.append(countryTradeIncomeValue);
  countryWindow.append(countryTradeIncome);

  document.body.append(countryWindow);
}

function showCountryInfo(country) {
  document.querySelectorAll('.country-window').forEach((counttyWindow) => {
    counttyWindow.remove();
  });
  buildCountryWindow(country);
}
