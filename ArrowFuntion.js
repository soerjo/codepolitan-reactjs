//ES5
function perkalian(a, b) {
  return a * b;
}

//arrowfunction
var perkalianArrow = (a, b) => a * b;

console.log(perkalian(3, 4));
console.log(perkalianArrow(3, 4));

//function biasa =====================
function sayHello() {
  console.log("say hello dari fungsi biasa");
}

//arrow function lagi
var newSayHello = () => {
  console.log("say hello dari ArrowFunction");
};

//function biasa=====================
function greeting(guestName) {
  return `Welcome back to Codepolitan, ${guestName}`;
}
//Arrow functionnya
var newGreeting = guestName => `Welcome back to Codepolitan, ${guestName}`;

sayHello();
newSayHello();
console.log(greeting("soerjo"));
console.log(newGreeting("bujank"));
