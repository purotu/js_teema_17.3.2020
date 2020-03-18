// Array = muuttuja joka voi sisältää useita arvoja

const cars = new Array('Volvo','BMW', 'Ford','Opel');
console.log(cars.length);

const fruits = ['apples','oranges','pears'];
console.log(fruits);

console.log(fruits[1]);

fruits[4] = 'watermelon';
fruits[3] = 'mango';
console.log(fruits)

fruits.push('blueberry');
console.log(fruits)
fruits.pop();
console.log(fruits);
fruits.unshift('strawberry')
console.log(fruits)
