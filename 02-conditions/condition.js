let age = 21;
let hasJob = true;
let salary = 350000;

if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

if (hasJob === true) {
    console.log("You are employed");
} else {
    console.log("You are not employed");
}

if (salary >= 500000) {
    console.log("Good salary");
} else if (salary >= 300000) {
    console.log("Average salary, keep growing");
} else {
    console.log("Below average, work harder");
}