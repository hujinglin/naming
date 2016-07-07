# Naming
naming case convention

## Installation

``` shell
npm install naming
```

## Usage

``` javascript
var naming = require('naming')

// parse string
var str = 'apple-bananaCherry_durian'
naming(str, 'camel')    // appleBananaCakeDurian
naming(str, 'pascal')   // AppleBananaCakeDurian
naming(str, 'snake')    // apple_banana_cake_durian
naming(str, 'kebab')    // apple-banana-cherry-durian
naming(str, 'caps')     // APPLE_BANANA_CHERRY_DURIAN
naming.disperse(str)    // ['apple', 'banana', 'cherry', 'durian']

// parse object
var obj = { red_apple: 0, yellow_banana: 1, green_cake: 2 }
naming(obj, 'camel')    // { redApple: 0, yellowBanana: 1, greenCake: 2 }
```

__Note__

The consecutive '_' in the beginning or end, and $' before the actual word, and consecutive numbers will be treated as a word, such as follow

``` javascript
var str = '__$$apple-bananaCherry_durian2012__'
naming(str, 'camel')    // __$$appleBananaCherryDurian2012__
naming(str, 'pascal')   // __$$AppleBananaCherryDurian2012__
naming(str, 'snake')    // __$$-apple-banana-cherry-durian-2012__
naming(str, 'kebab')    // __$$_apple_banana_cherry_durian_2012__
naming(str, 'caps')     // __$$_APPLE_BANANA_CHERRY_DURIAN_2012__
```

## License
MIT (http://www.opensource.org/licenses/mit-license.php)
