var student1 = { name: "Alice", age: 21 };
var student2 = { name: "Bob", age: 22 };

function introduce(subject, grade) {
    console.log("Hi, I'm " + this.name + ". I'm " + this.age + " years old. I study " + subject + " and got a " + grade);
}

// Using call
introduce.call(student1, "Math", "A");
// Output: Hi, I'm Alice. I'm 21 years old. I study Math and got a A

// Using apply
introduce.apply(student2, ["Science", "B"]);
// Output: Hi, I'm Bob. I'm 22 years old. I study Science and got a B

// Using bind
let introduceFunction = introduce.bind(student1, "Physics", "A+");
introduceFunction();
// Output: Hi, I'm Alice. I'm 21 years old. I study Physics and got a A+
