// First exercise

// function me(number, a, b) {
//     if (number % a == 0 && number % b == 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }


// console.log(me(45, 5, 15));
// console.log(12 % 2 == 0)

// Two exercise

// function bmi(w, h) {
//     let a = w / (h * h)
//     if (a <= 18.5) {
//         return "Underweight"
//     }
//     else if (a <= 25.0) {
//         return "Normal"
//     }
//     else if (a <= 30.0) {
//         return "Overweight"
//     }
//     else if (a > 30) {
//         return "Obese"
//     }
// }
// console.log(bmi(80,1.50))
// bmi(80,1.80);

function drinkk(odd) {
    if (odd >= 4 && odd <= 13) {
        return 'drink toddy'
    }
    else if (odd >=14 && odd <=17) {
        return 'drink coke'
    }
    else if (odd >= 18 && odd < 20) {
        return 'drink beer';
    }
    else if (odd >= 21){
        return 'drink whisky';
    }
}

console.log(drinkk(13));