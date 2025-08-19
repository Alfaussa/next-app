const countries = [
  {
    name: "Россия",
    language: "Русский",
    area: 17098242,
    population: 146171015,
    cities: [
      { name: "Москва", area: 2561, population: 12655050, founded: 1147 },
      { name: "Санкт-Петербург", area: 1439, population: 5384342, founded: 1703 }
    ]
  },
  {
    name: "Германия",
    language: "Немецкий",
    area: 357022,
    population: 83149300,
    cities: [
      { name: "Берлин", area: 891.8, population: 3769495, founded: 1237 },
      { name: "Мюнхен", area: 310.7, population: 1558395, founded: 1158 }
    ]
  },
  {
    name: "Франция",
    language: "Французский",
    area: 551695,
    population: 67081000,
    cities: [
      { name: "Париж", area: 105.4, population: 2161000, founded: -52 },
      { name: "Лион", area: 47.87, population: 522228, founded: 43 }
    ]
  },
  {
    name: "США",
    language: "Английский",
    area: 9833520,
    population: 331893745,
    cities: [
      { name: "Нью-Йорк", area: 783.8, population: 8419600, founded: 1624 },
      { name: "Лос-Анджелес", area: 1302, population: 3898747, founded: 1781 }
    ]
  },
  {
    name: "Канада",
    language: "Английский и Французский",
    area: 9984670,
    population: 38454327,
    cities: [
      { name: "Торонто", area: 630.2, population: 2731571, founded: 1793 },
      { name: "Монреаль", area: 431.5, population: 1780000, founded: 1642 }
    ]
  },
  {
    name: "Япония",
    language: "Японский",
    area: 377975,
    population: 125960000,
    cities: [
      { name: "Токио", area: 2194, population: 13960000, founded: 1457 },
      { name: "Киото", area: 827.8, population: 1474570, founded: 794 }
    ]
  },
  {
    name: "Китай",
    language: "Китайский",
    area: 9596961,
    population: 1412600000,
    cities: [
      { name: "Пекин", area: 16410.54, population: 21542000, founded: -1045 },
      { name: "Шанхай", area: 6340.5, population: 24870895, founded: 960 }
    ]
  },
  {
    name: "Индия",
    language: "Хинди и Английский",
    area: 3287263,
    population: 1407563842,
    cities: [
      { name: "Дели", area: 1484, population: 30291000, founded: -300 },
      { name: "Мумбаи", area: 603.4, population: 20411000, founded: 1507 }
    ]
  },
  {
    name: "Бразилия",
    language: "Португальский",
    area: 8515767,
    population: 215986577,
    cities: [
      { name: "Сан-Паулу", area: 1521, population: 12300000, founded: 1554 },
      { name: "Рио-де-Жанейро", area: 1182.3, population: 6748000, founded: 1565 }
    ]
  },
  {
    name: "Великобритания",
    language: "Английский",
    area: 243610,
    population: 68207116,
    cities: [
      { name: "Лондон", area: 1572, population: 8982000, founded: 43 },
      { name: "Бирмингем", area: 267.8, population: 1141816, founded: 600 }
    ]
  },
  {
    name: "Австралия",
    language: "Английский",
    area: 7692024,
    population: 26821300,
    cities: [
      { name: "Сидней", area: 12367.7, population: 5312000, founded: 1788 },
      { name: "Мельбурн", area: 9992.5, population: 5078000, founded: 1835 }
    ]
  },
  {
    name: "Италия",
    language: "Итальянский",
    area: 301340,
    population: 58870762,
    cities: [
      { name: "Рим", area: 1285, population: 2873000, founded: -753 },
      { name: "Милан", area: 181.8, population: 1378689, founded: -600 }
    ]
  }
];

