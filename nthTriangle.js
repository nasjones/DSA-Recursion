function nthTriangle(a, b) {
    b = b || 2

    if (a == 1)
        return a
    else
        return nthTriangle(a - 1, b + 1) + a

}

console.log(nthTriangle(9))