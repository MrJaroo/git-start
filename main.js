function me(number, a, b) {
    if (number % a == 0 && number % b == 0) {
        return true;
    }
    else {
        return false;
    }
}


console.log(me(45, 5, 15));
console.log(12 % 2 == 0)