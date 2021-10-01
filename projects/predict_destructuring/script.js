// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [randomCar] = cars
// const [, otherRandomCar] = cars
// //Predict the output

// // the output of the randomCar will be Tesla,
// // the ouput of the otherRandomcar will be Merceds
// console.log(randomCar)
// console.log(otherRandomCar)

// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// // first console.log(name) will be undefined since we are not calling it by the right key
// // console.log(name);
// console.log(otherName);


// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// //hashedPassword will be undefined since we have not defined anything inside hashedPassword
// const { name : Name } = person;
// console.log(Name);
// console.log(password);
// console.log(hashedPassword);

// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// //Predict the output
// //we are consol loggin (2) and (5) and those are not equal so our result is false
// //in the second consol.log we are asking are (2) and (2) equal and since they are its true
// console.log(first == second);
// console.log(first == third);

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;

//Predict the output
// it will work because we are just looking at index[1] and that is 5, since we can call it any way we want 
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);






