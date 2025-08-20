const products = [
  {
    id: 1,
    name: "Беспроводные наушники Xiaomi",
    price: 2499,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Mpr5TXWVv_uR7ANkLQvlPFRfGYfiXXSLdA&s",
    description: "Эргономичные и лёгкие наушники с хорошей шумоизоляцией. Поддерживают Bluetooth 5.0 для стабильного соединения и качественного звука. Зарядки хватает до 4 часов непрерывного воспроизведения. Отличный выбор для повседневного использования."
  },
  {
    id: 2,
    name: "Игровая мышь Logitech G502",
    price: 4299,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Mpr5TXWVv_uR7ANkLQvlPFRfGYfiXXSLdA&s",
    description: "Высокоточная игровая мышь с регулируемым весом и RGB-подсветкой. Оснащена сенсором HERO 25K, обеспечивающим молниеносный отклик. Отлично подойдёт как для шутеров, так и для стратегий. Поддержка программируемых кнопок делает её универсальной."
  },
  {
    id: 3,
    name: "Смарт-часы Amazfit Bip 3",
    price: 3990,
   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Mpr5TXWVv_uR7ANkLQvlPFRfGYfiXXSLdA&s",
    description: "Стильные и функциональные умные часы с мониторингом сердечного ритма и отслеживанием сна. Влагозащита IP68 и большой дисплей позволяют использовать их в любых условиях. Идеальны для активного образа жизни. Батарея держит заряд до 14 дней."
  },
  {
    id: 4,
    name: "Портативная колонка JBL GO 3",
    price: 3690,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Mpr5TXWVv_uR7ANkLQvlPFRfGYfiXXSLdA&s",
    description: "Компактная и мощная колонка с отличным звуком и защитой от воды по стандарту IP67. Работает до 5 часов на одном заряде. Удобна для путешествий и отдыха на природе. Прочный корпус делает её надёжной даже в экстремальных условиях."
  },
  {
    id: 5,
    name: "Внешний аккумулятор PowerBank 10000mAh",
    price: 1490,
   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Mpr5TXWVv_uR7ANkLQvlPFRfGYfiXXSLdA&s",
    description: "Надёжный внешний аккумулятор с двумя портами USB и быстрой зарядкой. Компактный дизайн позволяет брать его с собой куда угодно. Ёмкости хватает для 2-3 полных зарядок смартфона. Идеален для командировок и поездок."
  },
  {
    id: 6,
    name: "Механическая клавиатура Redragon",
    price: 5590,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Mpr5TXWVv_uR7ANkLQvlPFRfGYfiXXSLdA&s",
    description: "Игровая клавиатура с механическими переключателями и подсветкой RGB. Обеспечивает высокую скорость отклика и надёжность. Имеет прочный металлический корпус и съёмную подставку под запястья. Подходит для киберспортсменов и геймеров."
  },
  {
    id: 7,
    name: "Монитор LG 27'' FullHD",
    price: 16990,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Mpr5TXWVv_uR7ANkLQvlPFRfGYfiXXSLdA&s",
    description: "Широкоформатный монитор с IPS-матрицей и отличной цветопередачей. Поддерживает технологию защиты зрения Flicker Safe и Reader Mode. Идеален для работы, учёбы и развлечений. Стильный дизайн украсит любой рабочий стол."
  },
  {
    id: 8,
    name: "Смартфон Samsung Galaxy A14",
    price: 15990,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Mpr5TXWVv_uR7ANkLQvlPFRfGYfiXXSLdA&s",
    description: "Доступный смартфон с большим экраном, тройной камерой и мощным аккумулятором. Поддерживает все современные стандарты связи и быструю зарядку. Отличный выбор для повседневного использования. Работает на Android с удобным интерфейсом One UI."
  },
  {
    id: 9,
    name: "Планшет Lenovo Tab M10",
    price: 11990,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Mpr5TXWVv_uR7ANkLQvlPFRfGYfiXXSLdA&s",
    description: "10-дюймовый планшет с хорошим звуком и производительностью. Подходит для просмотра видео, игр и онлайн-обучения. Обеспечивает до 9 часов автономной работы. Имеет режим защиты глаз для комфортного чтения."
  },
  {
    id: 10,
    name: "Фитнес-браслет Xiaomi Mi Band 7",
    price: 3290,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Mpr5TXWVv_uR7ANkLQvlPFRfGYfiXXSLdA&s",
    description: "Функциональный фитнес-браслет с цветным AMOLED-дисплеем и отслеживанием активности. Мониторинг пульса, сна, стресса и уровня кислорода в крови. Имеет более 100 спортивных режимов. Работает до 14 дней на одном заряде."
  },
  {
    id: 11,
    name: "Bluetooth колонка Sony SRS-XB13",
    price: 4990,
   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Mpr5TXWVv_uR7ANkLQvlPFRfGYfiXXSLdA&s",
    description: "Маленькая, но мощная колонка с глубокими басами и защитой от воды. Поддерживает технологию Extra Bass и стереосопряжение. Идеальна для пикников и путешествий. Удобный ремешок позволяет легко её носить с собой."
  },
  {
    id: 12,
    name: "SSD накопитель Kingston 500GB",
    price: 3990,
 image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Mpr5TXWVv_uR7ANkLQvlPFRfGYfiXXSLdA&s",
    description: "Быстрый и надёжный твердотельный накопитель с интерфейсом SATA III. Обеспечивает ускоренную загрузку системы и приложений. Подходит для апгрейда ноутбуков и ПК. Компактный размер и высокая надёжность данных."
  },
  {
    id: 13,
    name: "USB флешка SanDisk 64GB",
    price: 799,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Mpr5TXWVv_uR7ANkLQvlPFRfGYfiXXSLdA&s",
    description: "Универсальная флешка с высокой скоростью передачи данных. Компактный корпус с выдвижным разъёмом. Подходит для хранения фото, видео и документов. Работает с большинством операционных систем."
  },
  {
    id: 14,
    name: "Умная лампочка Xiaomi Yeelight",
    price: 1290,
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Mpr5TXWVv_uR7ANkLQvlPFRfGYfiXXSLdA&s",
    description: "Светодиодная лампочка с управлением через смартфон и голосовые помощники. Поддерживает миллионы оттенков и настройку расписания. Идеальна для создания уютной атмосферы дома. Энергоэффективность и долговечность на высоте."
  },
  {
    id: 15,
    name: "Игровая гарнитура HyperX Cloud II",
    price: 7990,
   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Mpr5TXWVv_uR7ANkLQvlPFRfGYfiXXSLdA&s",
    description: "Премиальная гарнитура с объёмным звуком 7.1 и мягкими амбушюрами. Идеальна для геймеров и онлайн-конференций. Съёмный микрофон с шумоподавлением обеспечивает чёткую передачу голоса. Подключение через USB и 3.5 мм."
  },
  // Продолжение...
];

export default products;
