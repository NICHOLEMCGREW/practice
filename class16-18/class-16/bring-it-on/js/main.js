// *Variables*
// Create a variable and console log the value
let num = 3;
console.log(num);

// Create a variable, add 10 to it, and alert the value

let addTen = 5;

addTen = addTen + 10;
// alert(addTen);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtractFourNums(a, b, c, d) {
    alert(a - b - c - d)
}


// Create a function that divides one number by another and returns the remainder

function returnRemainder(n1, n2) {
    return n1 % n2
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji


function addsTwo(a, b) {
    let sum = a + b;
    if(sum > 50) {
        alert('Jumanji')
    }
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiplyThreeNums(n1,n2,n3){
    let product = n1 * n2 * n3
    if(product % 3 === 0) {
        alert('ZEBRA')
    }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function wordAndNum(word, num) {
    for(let i = 1; i <= num; i++) {
        console.log(word)
    }
}
wordAndNum('goat', 5)