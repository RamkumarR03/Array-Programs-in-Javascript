
//First Question...

// let num;
// for(num=1;num<=100;num++){
// if(num%3==0 && num%5==0){
//     document.write("FIZZBUZZ");
// }
// else if(num%5==0){
//     document.write("BUZZ");
// }
// else if(num%3==0){
//     document.write("FIZZ");
// }
// }

//Second Question....

//  let str="madam";
// let str1=str.split("").reverse().join("");
// if(str==str1){
//     console.log("Palindrome");  
// }
// else{
//     console.log("Not Palindrome");
// }



//third Question....

// let arr1=[1,2,3,4,5];
// let arr2=arr1.sort();
// {
// document.write("Largest value is :"+ arr2[arr2.length-1]);
// }

// 4th Questions....

// function countCharacterOccurences(str){
//     const charCount={};
//     for(let i=0;i<str.length;i++){
//     const char=str[i];
//     if(charCount[char]){
//         charCount[char]++;
//     }
//     else{
//         charCount[char]=1;
//     }
//     }
//     return charCount;
// }
// const result=console.log(countCharacterOccurences("Hello"));
// console.log(result);



//5th Question...

function longeststr(str){
    let max = 0;
    let longestword = "";
    let words = str.split(" ");
    for(let i=0; i<words.length; i++){
        if(words[i].length > max){
            max = words[i].length;
            longestword = words[i];
        }
    }    
    console.log(longestword)
}
let str=("I am Ram");
console.log(longeststr(str));


// 6th Question....

// function factorial(number){
//         if(number === 0){
//             return 1;
//         }
//         else{
//             return number * factorial(number-1);
//         }       
//     }
//     console.log(factorial(3));