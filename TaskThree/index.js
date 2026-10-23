// 1
const obj = {
  name: "lenah",
  arrow: () => {
    console.log(this.name);
  },
  exp: function () {
    console.log(this.name);
  },
};

// obj.arrow();
// obj.exp();

// 2
const mult = (x, y) => x * y;
// console.log(mult(8, 2));

// 3
const arr1 = [1, 2, 3],
  arr2 = [4, 5, 6];
const res = [...arr1, ...arr2];
// console.log(res);

// 4
const obj1 = {
  name: "Ahmed",
  age: 25,
  positions: ["front", "back", "software", "tester"],
};
const obj2 = { ...obj1 };

obj2.name = "lenah";
obj2.positions[1] = "backend";
// console.log(obj1.name);
// console.log(obj1.positions[1]);

// 5
function sumOfAges(...arrObjs) {
  return arrObjs.reduce((acc, curr) => {
    return acc + curr.age;
  }, 0);
}

// console.log(sumOfAges({ name: "lenah", age: 21 }, { name: "leno", age: 20 }));

// 6
function f1(name, age) {
  console.log(name, age);
}
function f2({ name, age }) {
  console.log(name, age);
}
// f1("lenah", 21);
// // wrong order
// f1(21, "lenah");
// f2({
//     age:21,
//     name:"lenah"
// });
// f2({
//   name: "lenah",
//   age: 21,
// });

// 7
const user = {
  password: 2344,
  username: "lenah_mahmoud",
};
let isLoggedIn = user.password == 1234 && user.username == "lenah_mahmoud";
if (isLoggedIn) {
  //   console.log("valid");
} else {
  //   console.log("not valid");
}


// 9

let result="";
const userName=result||"lenah";
// console.log(userName);

// 10

const r= null??"val";
console.log(r)
