const student = {
    fName: 'John',
    lName: 'Smith',
    age: 18,
    hobbies: ['math','literature', 'gaming'],
    address: {
        street: 'Raviradantie 8-10',
        city: 'Mikkeli',
        zip: '50100'
    }
}

console.log(student);

console.log(student.firstName);
console.log(student.hobbies[0]);
console.log(student.address.city);

const { fName, lName, address: { city } } = student;
console.log(fName);

// Lisätään ominaisuuksia
student.phone = '123123';
console.log(student);