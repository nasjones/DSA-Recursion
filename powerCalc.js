function powerCalculator(b, e) {
    if (e <= 0)
        return "exponent should be >= 0"

    if (e == 1)
        return b
    else
        return b * powerCalculator(b, e - 1)
}


console.log(powerCalculator(10, 2))
console.log(powerCalculator(9, 6))
console.log(powerCalculator(10, -2))
