var naming = require('./index')

var str = '__$$apple-bananaCherry_durian2012__'

// var str = 'CSApeed'

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

var obj = { 
  big_apple: 'apple', 
  big_banna: {
    small_banana_01: ['banana'], small_banana_02: 'banana'
  },
  big_cake: {
    small_cake_01: 'cake',
    small_cake_02: {
      tiny_cake_01: 'cake',
      tiny_cake_02: function cake () {

      }
    } 
  }
}

console.log(naming(obj, 'camel', true))
console.log(naming(obj, 'pascal', true))
console.log(naming(obj, 'snake', true))
console.log(naming(obj, 'kebab', true))
console.log(naming(obj, 'caps', true))




