// 1
for (let i = 1; i <= 10; i++) {
  // console.log(i);
}

// 2
for (let i = 10; i >= 1; i--) {
  //   console.log(i);
}

// 3
const fruits = ["apple", "banana", "orange"];
fruits.push("grapes");
fruits.pop();
// console.log(fruits);

// 4
const numbers = [2, 4, 5];
numbers.shift();
numbers.unshift(10);
// console.log(numbers);

// 5
const arr = [1, 2, 3, 4, 5];
const result = arr.map((e) => e * e);
// console.log(result)

// 6
const array = [5, 10, 15, 20, 25];
const res = array.filter((el) => el % 5 == 0 && el % 2 == 0);
// console.log(res)

// 7
const students = [
  {
    name: "leno",
    grade: 100,
  },
  {
    name: "lenah",
    grade: 90,
  },
];

// console.log(students.find((s)=>s.grade==90).name)

// 8
const obj = {
  name: "lenah",
  age: 21,
  city: "cairo",
};

const { name, age, city } = obj;
// console.log(name, age, city);

// 9
function sum(x, y) {
  return x + y;
}
// console.log(sum(3, 4));

// 10

const getEvenNumbers = (...nums) => {
  return nums.filter((n) => n % 2 == 0);
};
// console.log(getEvenNumbers(3,2,5,10,8));
