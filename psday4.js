// Loops

// continuous doing of a task
// for -- when we know the no.of iterations
// while -- iteration is done based on the condition
// do while --

// ------------------------------------------------------------------------------------------------------------


// for -- when we know the no.of iterations

// var num = 0;
// for (i = 1; i <= 10; i++) {
//   console.log(i);
// }
// output: 1 2 3 4 5....to 10


// 1-50 even numbers
// for(var i=1;i<=50;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }
// output: 2 4 6....to 50 ---even numbers


// 1-70 multiple of 7 
// count=0
// for(var i=1;i<=100;i++){
//     if(i%7==0){
//         count++
//         console.log(i)
//     }
// }
// console.log(`There are ${count} multiples`);
// output: 7 14 21....to 98 There are 14 multiples



// 1-100
// for (let i = 1; i <=100; i=i+5) {
//     console.log(i);
// }
// output: 1 6 11....to 96 



// 5X1=5 ..........5X10=50
// let num=5

// for(let i=1;i<=10;i++){
//     console.log(`${num} X ${i} = ${num*i}`);
    
// }
// output: 5X1=5 ..........5X10=50


// 100-1 odd numbers
// for(i=100;i>=1;i--){
//     if (i%2!=0) {
//         console.log(i)
//     }
// }
// output: 99 97 95........1 odd numbers


// for(i=100;i>=1;i--){
//     if (i%2==1) {
//         console.log(i)
//     }
// }
// output: 99 97 95........1 odd numbers


// 1-100
// 3 -three
// 5 -five
// 3/5 three five

// 1 2 three 4 five.....three five

// for(i=1;i<=100;i++){
//     if (i%3==0&&i%5!=0) {
//         console.log("three");
        
//     }
//     else if (i%5==0 && i%3!=0) {
//         console.log("five");
        
//     }
//     else if (i%3==0&&i%5==0) {
//         console.log("three five");
        
//     }
//     console.log(i);
    
// }


// for(i=1;i<=5;i++){
//     for(j=1;j<=10;j++){
//         console.log(`${i} X ${j} = ${i*j}`);
        
//     }
// }
// --------------------------------------------------------------------------------------------------------------------------------------------



// task:
// -------
// 1Q. 1-100 multiples of 9 and only even numbers ---
// Ans:

for(i=1;i<=100;i++){
    if(i%9==0 && i%2==0){
        console.log(i)
    }
}

//2Q. 1-10  1  3  5 7 9 print table of only odd numbers from 1-10

// Ans:
for(i=1;i<=10;i++){
    if(i%2!=0){
    for(j=1;j<=10;j++){
        console.log(`${i} X ${j} = ${i*j}`);
        
    }
}
}