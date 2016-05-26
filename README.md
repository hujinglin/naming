# Usage

```
var str = 'apple-Banana_cake'

naming(str, 'camel')    // appleBananaCake
naming(str, 'pascal')   // AppleBananaCake
naming(str, 'snake')    // apple_banana_cake
naming(str, 'kebab')    // apple-banana-cake
naming(str, 'caps')     // APPLE_BANANA_CAKE

naming.disperse(str)    // ['apple', 'banana', 'cake']

var obj = { red_apple: 0, yellow_banana: 1, green_cake: 2 }

naming(obj, 'camel')    // { redApple: 0, yellowBanana: 1, greenCake: 2 }
```