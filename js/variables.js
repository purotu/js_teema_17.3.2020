// Muuttujat ja vakiot
// var, let, const
const firstName = 'John'; // string
const lastName = 'Smith';
var age = 18; // Number

age = '40';

const rate = 4.9009; 
const isStudent = false; // Boolean
const x = null;
const y = undefined;

console.log(typeof firstName)
console.log(typeof age);
console.log(typeof rate);
console.log(typeof isStudent);
console.log(typeof x);
console.log(typeof y);

// Merkkijonojen yhdistäminen (Concatenation)
document.write('My name is ' + firstName + ' ' + lastName + '. ' + age + ' years old.')

// Template string
let html = `<br>My name is ${firstName} ${lastName}. And I'm ${age} years old.`;
document.write(html);
console.log(html);