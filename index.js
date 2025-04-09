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


// EXC2
// Soal 1
const fruits = ["Apple", "Banana", "Orange"];

// Soal 2
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

// Soal 3
fruits.push("Mango");

// Soal 4
fruits.unshift("Grape");

// Soal 5
fruits.pop();
console.log(fruits);

// Soal 6
fruits.shift();
console.log(fruits);

// Soal 7
console.log(fruits.length);

// Soal 8
console.log(fruits.includes("Banana"));

// Soal 9
console.log(fruits.indexOf("Orange"));

// Soal 10
console.log(fruits.join(","));