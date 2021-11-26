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

// Dting adout

// function drinkk(odd) {
//     if (odd >= 4 && odd <= 13) {
//         return 'drink toddy'
//     }
//     else if (odd >=14 && odd <=17) {
//         return 'drink coke'
//     }
//     else if (odd >= 18 && odd < 20) {
//         return 'drink beer';
//     }
//     else if (odd >= 21){
//         return 'drink whisky';
//     }
// }

// console.log(drinkk(13));


// данную кату списал сам не додумался
// function one(a) {
//     let cor = {
//         "5": 's',
//         "0": 'o',
//         "1": 'i'
//     }

//     return a.replace(/[501]/g, (char) => cor[char]);

// }

// console.log(one('1 l0ve y0u'))

// Swict it Up Code wars

// function swichItUp(number) {
//     if (number == 1) return 'One';
//     if (number == 2) return 'two';
//     if (number == 3) return 'three';
//     if (number == 4) return 'Four';
//     if (number == 5) return 'Five';
//     if (number == 6) return 'Six';
//     if (number == 7) return 'Seven';
//     if (number == 8) return 'Eight';
//     if (number == 9) return 'Nine';
// }

// console.log(swichItUp(1));

let flauer = ['i love you','a little', 'a lot', 'passionately', 'madly','not at all'];


function one (num) {
    return flauer[(num - 1) % flauer.length]
}

console.log(one(30));
console.log(29);






