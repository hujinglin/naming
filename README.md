# Usage

```
var str = 'apple-Banana\_cake'

naming(str, 'camel')    // appleBananaCake
naming(str, 'pascal')   // AppleBananaCake
naming(str, 'snake')    // apple\_banana\_cake
naming(str, 'kebab')    // apple-banana-cake
naming(str, 'caps')     // APPLE\_BANANA\_CAKE

naming.disperse(str)    // ['apple', 'banana', 'cake']

var obj = { red\_apple: 0, yellow\_banana: 1, green\_cake: 2 }

naming(obj, 'camel')    // { redApple: 0, yellowBanana: 1, greenCake: 2 }
```