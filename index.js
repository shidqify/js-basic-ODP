// Soal 1
const person = {
  name: "John",
  age: 25,
  job: "Developer"
}

// Soal 2
console.log(person.name);
console.log(person.job);

// Soal 3
person.hobby = "Reading";

console.log(person);

// Soal 4
person.age = 30;

console.log(person)

// Soal 5
delete person.job;

console.log(person)

// Soal 6
const student = {
  name: "Alice",
  grade: 90,
  address: {
    city: "Jakarta",
    country: "Indonesia"
  }
}

console.log(student.address.city);

// Soal 7
person.greet = function() {
  return `Hi, my name is ${this.name}`
}

console.log(person.greet());