//Создаём переменные
let name = "Солиха";
let age = 17;
let city = "Бишкек";
let isStudent = true;

//Выводим типы переменных
console.log( typeof"Имя:", name);
console.log( typeof"Возраст:", age);
console.log( typeof"Город:", city);
console.log( typeof"Студент:", isStudent);

//Создаём пременные для вычислений
const a = 20;
const b = 5;

//Выполняем математические операции
console.log("Сумма:", a + b);
console.log("Разность:", a - b);
console.log("Произведение:", a * b);
console.log("Деление:", a / b);
console.log("Остаток от деления:", a % b);

//Создаём переменные для товара
const product = "Мышка";
const price = 800;
const quantity = 3;
const delivery = 200;

//Вычисляем стоимость
const totalPrice = price * quantity;
const finalPrice = totalPrice + delivery;

//Выводим результат
console.log("Товар:", product);
console.log("Количество:", quantity);
console.log("Стоимость товаров:", totalPrice, "сом");
console.log("Доставка:", delivery, "сом");
console.log("Итого:", finalPrice, "сом");

//Проверяем возраст
console.log("Возраст больше или равен 18:", age >= 18);
console.log("Возраст меньше 18:", age < 18);
console.log("Возраст строго равен 17:", age === 17);
console.log("Возраст не равен 20:", age !== 20);

//Выводим результат возраста
console.log(age >= 18);
console.log(age < 18);
console.log(age === 17);
console.log(age !== 20);

// Создаём переменные
const score = 85;
const attendance = 90;
const isBlocked = false;

// Проверка №1: Баллы не меньше 60 И посещаемость не меньше 75%
const check1 = score >= 60 && attendance >= 75;

// Проверка №2: Баллы не меньше 90 ИЛИ посещаемость не меньше 90%
const check2 = score >= 90 || attendance >= 90;

// Проверка №3: Студент НЕ заблокирован
const check3 = !isBlocked;

// Выводим результаты в консоль
console.log("Проверка 1:", check1);
console.log("Проверка 2:", check2);
console.log("Проверка 3:", check3);
