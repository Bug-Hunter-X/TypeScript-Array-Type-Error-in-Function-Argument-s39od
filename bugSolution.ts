function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Accessing the array element
console.log(greeter(user[0])); // Accessing the first element of the array

// Solution 2:  Handling arrays in the function
function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(" ");
}
console.log(greeterArray(user)); //Correctly handles the array