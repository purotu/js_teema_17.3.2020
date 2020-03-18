// String metodit
const lause = 'Mitäpä kuuluu!';

console.log(lause.length);

console.log(lause.toUpperCase());
console.log(lause.toLowerCase());

console.log(lause.substring(0,6).toUpperCase())

let oteMerkkijonosta = lause.substring(0,6);
console.log(oteMerkkijonosta);

// Split
console.log(lause.split(''))

const tags = 'js, html, css, php';
console.log(tags.split(', '));