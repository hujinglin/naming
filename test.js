var naming = require('./index')

var str = '__$$apple-bananaCherry_durian2012__'

console.log(naming(str, 'camel'))
console.log(naming(str, 'pascal'))
console.log(naming(str, 'snake'))
console.log(naming(str, 'kebab'))
console.log(naming(str, 'caps'))

console.log(naming.disperse(str))

var obj = { red_apple: 0, yellow_banana: 1, green_cake: 2 }

console.log(naming(obj, 'camel'))
console.log(naming(obj, 'pascal'))
console.log(naming(obj, 'snake'))
console.log(naming(obj, 'kebab'))
console.log(naming(obj, 'caps'))