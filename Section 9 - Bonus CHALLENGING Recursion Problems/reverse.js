function reverse(str) {
    // add whatever parameters you deem necessary - good luck!
    if (str.length === 1) return str
    return str[str.length - 1] + reverse(str.slice(0, str.length - 1))
}

console.log(reverse('Ahmed'))
    // reverse('awesome') // 'emosewa'
    // reverse('rithmschool') // 'loohcsmhtir'