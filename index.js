let fun = (name) => {
  console.log(`Hello, ${name}`);
};

//call method
fun.call(fun, "Raju");

//appply method
fun.apply(fun, ["Babu Rao"]);

//bind method
let newName = fun.bind(fun, "Shyam");
newName();

let Student = {
  age: 20,
};

let printAge = function () {
  console.log(this.age);
};

let printStudentAge = printAge.bind(Student);
printStudentAge();
