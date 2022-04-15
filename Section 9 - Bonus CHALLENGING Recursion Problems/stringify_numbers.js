function stringifyNumbers(obj) {
    let obj2 = {}
    for (let key of Object.keys(obj)) {
        if (typeof obj[key] === 'object' &&
            !Array.isArray(obj[key]) &&
            obj[key] !== null) obj2[key] = stringifyNumbers(obj[key])
        else if (typeof obj[key] === 'number') obj2[key] = `${obj[key]}`
        else obj2[key] = obj[key]
    }
    return obj2
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj))

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/