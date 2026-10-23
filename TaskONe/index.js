//2
const arr = [2, 3, 4],
  x = 3,
  word = "hello";

// console.log(arr, x, word);

// 3
const user = {
  name: "lenah",
  email: "lenah.mahmoud@gmail.conm",
};
// console.log(`name: ${user.name} emai: ${user.email}`);

// 4
const users = [
  {
    name: "lenah",
    email: "lenah.mahmoud@gmail.conm",
  },
  {
    name: "lenah",
    email: "lenah.mahmoud@gmail.conm",
  },
  {
    name: "lenah",
    email: "lenah.mahmoud@gmail.conm",
  },
];
// console.log(users[2].email);

// 5
const firstWord = "GDG",
  secondWord = "Backend";
// console.log(firstWord+secondWord);
// console.log(firstWord.concat("",secondWord));

// 6
// console.log(4 * 5);
// console.log(5 - 3);
// console.log(10 / 2);
// console.log(8+3);

// 7
const bool = false;
const result = bool.toString();
// console.log(Boolean(result));

// 8
const driver = {
  hasLicense: true,
  age: 29,
};
if (driver.age > 18 && driver.hasLicense) {
  console.log("can drive");
} else {
  console.log("cant");
}
