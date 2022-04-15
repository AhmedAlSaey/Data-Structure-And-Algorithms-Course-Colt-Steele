function collectStrings(obj) {
    let stringArr = []
    for (let key of Object.keys(obj)) {
        if (typeof obj[key] === 'object') stringArr = stringArr.concat(collectStrings(obj[key]))
        else if (typeof obj[key] === 'string') stringArr.push(obj[key])
    }
    return stringArr
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])