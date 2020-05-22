function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Получение случайного элемента из массива
let items = [12, 548, 'a', 2, 5478, 'foo', 8852, 'Doe', 2145, 119];
let randomItem = items[Math.floor(Math.random() * items.length)];
