function sheep(n) {
    if (n == 0)
        console.log("all sheep jumped over the fence")
    else {
        console.log(n + ": Another sheep jumps over the fence")
        sheep(n - 1)
    }

}

sheep(7)
sheep(20)
sheep(3)
sheep(12)