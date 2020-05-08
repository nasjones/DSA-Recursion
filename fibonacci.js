function fib(n, a, b) {
    a = a || 1
    b = b || 1
    if (n == 0) {
        return ""
    }
    else {
        let out = a + b
        return a + ", " + fib(n - 1, b, out)
    }
}

console.log(fib(7))