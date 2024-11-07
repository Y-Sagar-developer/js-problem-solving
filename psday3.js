// switch case

// let num ="a5"
// switch(true){
//     case 0:
//         console.log("neither positive nor negative")
//     break

//     case num>0:
//         console.log("positive number")
//     break

//     case num<0:
//         console.log("negative number")
//     break
//     default:
//         console.log("not a number")
// }

// --------------------------------------------------------------------------------------------------------------------------------

// var day=6;

// switch (day) {
//   case 1:
//     console.log("sunday");
//     break;

//   case 2:
//     console.log("monday");
//     break;

//   case 3:
//     console.log("tuesday");
//     break;

//   case 4:
//     console.log("wednesday");
//     break;

//   case 5:
//     console.log("thursday");
//     break;

//   case 6:
//     console.log("friday");
//     break;

//   case 7:
//     console.log("saturday");
//     break;

//   default:
//     console.log("Invalid day");
// }

// ---------------------------------------------------------------------------------------------------------------

// print months using switch case

// truthsy values: "string" 123 true [] {} are truthsy values
// falsy values:  false 0 "" null undefined

// namee="goutham"
// if(0){
//     console.log("truthsy values")
// }else{
//     console.log("falsy values")

// }

// --------------------------------------------------------------------------------------------------------------

// let operator="delete"
// person="admin"

// switch(person){
//     case "admin":
//         switch(operator){
//             case "delete":
//                 console.log("deleted successfully")
//                 break
//             case "update":
//                 console.log("updated")
//                 break
//             default: console.log("Invalid Operation")
//         }
//         break

//         case "user":
//         switch(operator){
//             case "delete":
//                 console.log("deleted successfully")
//                 break
//             case "update":
//                 console.log("updated")
//                 break
//             default: console.log("Invalid Operation")

//         }
//         break
//         default: console.log("invalid person")
// }

// -------------------------------------------------------------------------------------------------------------------

// Check Even or Odd number using switch case

// var num=15

// switch(true){
//     case num%2==0:
//         console.log("Even")
//         break
//     case num%2!==0:
//         console.log("Odd")
//         break
//     default:
//         console.log("invalid number")
// }

// ---------------------------------------------------------------------------------------------------------------

// let card="sbi"
// amount=10000

// switch(amount){
//     case 10000:
//         switch(card){
//             case "hdfc":
//                 console.log(`your discount is ${amount*10/100}`)
//             break
//             case "sbi":
//                 console.log(`your discount is ${amount*5/100}`)
//             break
//             default: console.log("no discount on your card")
//         }
//     break
//     default:
//         console.log(`minimum bill is 10000 for applying discount`)
// }

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------

// Task:

// 1.print months by using switch

var month = 2;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("Invalid Input");
}

// 2.print grade by using switch

var percentage = 90;
switch (true) {
  case percentage >= 90:
    console.log("A grade");
    break;
  case percentage >= 75:
    console.log("B grade");
    break;
  case percentage >= 65:
    console.log("C grade");
    break;
  case percentage >= 35:
    console.log("D grade");
    break;
  case percentage < 35:
    console.log("F-Fail");
    break;
    default:console.log("Invalid Input")
}