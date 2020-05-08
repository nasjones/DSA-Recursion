function reverseString(text) {
    let letter = text.substr(0, 1)
    if (text.length == 0)
        return letter
    else
        return reverseString(text.slice(1)) + letter
}


console.log(reverseString("hello"))