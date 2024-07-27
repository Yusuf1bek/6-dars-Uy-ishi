// Uy-ishi

// task -1
// let numbers = 123;

// function reverseNumber(number) {
    
//     let numToString = number.toString();
//     let reversString = "";
    
//     for (let i = numToString.length - 1; i >= 0; i--) {
//         reversString += numToString[i];
//     }
//     return reversString;
// }

// let reversedNumber = reverseNumber(numbers);
// console.log(reversedNumber); 
// task -1

// task -2
// function calculateFactorial(number) {
//     if (number === 0) {
//         return 1;
//     }
//     let factorial = 1;
//     for (let i = 1; i <= number; i++) {
//         factorial *= i;
//     }

//     return factorial;
// }

// let num = 5;

// console.log(calculateFactorial(num)); 
// task -2

// task -3
// function userCompareAges(user1, user2) {
//     if (user1.age > user2.age) {
//         console.log(user1.name);
//     } else if (user1.age < user2.age) {
//         console.log(user2.name);
//     }
// }
// let userFirst = {
//     name: "Yusufbek",
//     age: 19
// };

// let userSecond = {
//     name: "Komiljon",
//     age: 18
// };
// userCompareAges(userFirst, userSecond); 
// task -3

// task -4
// function userNumber(number) {
//     if (number < 1) {
//         return;
//     }
//     console.log(number);
//     userNumber(number - 1);
// }
// let number = 5;
// userNumber(number); 
// task -4

// task -5
// function userInfo(name, age, job) {
//     return {
//         name: name,
//         age: age,
//         job: job
//     };
// }
// let person = userInfo("Shaxzod", 25, "Developer");
// console.log(person);
// task -5

// task -6
// function userTotalSalary(employers) {
//     let totalSalary = 0;
//     for (let key in employers) {
//         totalSalary += employers[key];
//     }
//     return totalSalary;
// }
// let employersalaries = {
//     aXodim: 150,
//     bXodim: 180,
//     cXodim: 210
// };
// let totalSalary = userTotalSalary(employersalaries);
// console.log(totalSalary); 
// task -6

// task -7
// let numArr = [1,3,5,2,6,2];
// function maxNumber(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// let maximumValue = maxNumber(numArr);
// console.log(maximumValue); 
// task -7

// task -8
// let arr = [2, 4, 6, 7, true, false, null, undefined];
// function userArr(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let value = arr[i];
//         if (typeof value === 'number') {
//             total += value;
//         } else if (value === true) {
//             total += 1; 
//         } else if (value === false) {           
//             continue;
//         } else if (value === undefined) {
//             total += 0;
//         }
//     }
//     return total;
// }
// let totalArr = userArr(arr);
// console.log(totalArr); 
// task -8

// task -9
// const userList = [
//     {
//         name:"Abdulloh",
//         age:21,
//         status:false
//     },
//     {
//         name:"Botir",
//         age:18,
//         status:true
//     },
//     {
//         name:"Shokir",
//         age:12,
//         status:false
//     },
// ]
//  let user1 = userList[0].status
//  function userNames(arr){
//     for(let user of arr){
//         if(user.status == user1){
//             console.log(user.name);
//         }
//     }
//  }
//  let res = userNames(userList)
// task -9

// task -10
// let userNumber = prompt("biror bir son kiriting?");
// function numberUpTo(n) {
//     let total = 0;
//     for (let i = 1; i <= n; i++) {
//         total += i;
//     }
//     return total;
// }
// let number = Number(userNumber);
// if (number > 0) {
//     let res = numberUpTo(number);
//     console.log(`1 dan ${number} gacha sonlarning yig'indisi: ${res}`);
// } else {
//     console.log("Tog'ri musbat son kiriting.");
// }
// task -10

// task -11
// let array1 = [1, 2, 3, 4, 5];
// let array2 = [4, 5, 6, 7, 8];
// function arrNumbers(arr1, arr2) {
//     let count = 0;
//     for (let num1 of arr1) {
//         let isCommon = false;
//         for (let num2 of arr2) {
//             if (num1 === num2) {
//                 isCommon = true;
//                 break; 
//             }
//         }
//         if (isCommon) {
//             count++;
//         }
//     }
//     return count;
// }
// let count = arrNumbers(array1, array2);
// console.log(`Birhil sonlar soni -  ${count}`); 
// task -11

// task -12
// let array1 = [1, 2, 3, 4, 5];
// let array2 = [4, 5, 6, 7, 8];
// function totalArr(arr1, arr2) {
//     let largestCommon = null; 
//     for (let num1 of arr1) {
//         for (let num2 of arr2) {
//             if (num1 === num2) { 
//                 if (largestCommon === null || num1 > largestCommon) { 
//                     largestCommon = num1; 
//                 }
//                 break; 
//             }
//         }
//     }
//     return largestCommon;
// }
// let largestCommon = totalArr(array1, array2);
// console.log(`Umumiy eng katta qiymat - ${largestCommon}`); 
// task -12

// task -13
// let userNumber = prompt("biror bir son kiriting?");

// function userNum(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(i);
//     }
// }
// if (userNumber > 0) {
//     userNum(userNumber);
// } else {
//     console.log("Tog'ri musbat son kiriting.");
// }
// task -13

// Uy-ishi