function stringSplit(text) {
    let cut = text.search('/')
    let head
    if (cut !== -1)
        head = text.slice(0, cut)
    else
        return [text]

    let temparr = [head]

    return temparr.concat(stringSplit(text.slice(cut + 1)))
}


console.log(stringSplit("02/20/2020"))
