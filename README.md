# GS1-128 Encoder

This module encodes GS1-128 string (e.g. `"(90)1234567890"`) to bits (e.g. `"110100111..."`), weights (e.g. `"211232411..."`),
 code array (e.g. `[105, 102, 90, ...]`) or string for [barcode font](http://grandzebu.net/informatique/codbar-en/code128.htm).
And also provides code 128 encoder.

[![NPM](https://nodei.co/npm/gs1-128-encoder.png)](https://nodei.co/npm/gs1-128-encoder/)

This module does not provide barcode rendering feature.

This is inspired by [code-128-encoder](https://www.npmjs.com/package/code-128-encoder).

## Usage

This module is ES6 style module and provides following functions. The default of this es6 module is an object with functions.
```javascript
import {encodeToBits} from "gs1-128-encoder";
encodeToBits('(90)1234');

import gs1_128_encoder from "gs1-128-encoder";
gs1_128_encoder.encodeToBits('(90)1234');
```

### Functions

Argument of functions are GS1-128 HRI string, which is shaped with following format:
```javascript
"(90)123456789" // with '()' for AI
"90123456789"   // without '()' for AI (only for single application)
"(91)12(92)01"  // multiple application
"(21)00ABC00a"  // of course you can use application with alphabet data
```

#### encodeToBits

This function encodes GS1-128 HRI string to bits string for rendering barcode.

Code:
```javascript
import {encodeToBits} from "gs1-128-encoder";

console.log(encodeToBits('(90)1234567890'));
```
Output:
```
1101001110011110101110110111101101011001110010001011000111000101101100001010011011110110101111001001100011101011
```

#### encodeToWeights

This function encodes GS1-128 HRI string to weights string for rendering barcode.

The first digit of output string is width of leftmost bar of barcode.
The second digit is width of blank and the third digit is width of next bar.

Code:
```javascript
import {encodeToWeights} from "gs1-128-encoder";

console.log(encodeToWeights('(90)1234567890'));
```
Output:
```
2112324111312141211122321311233311212411122141211142122331112
```
#### encodeToCodeArray

This function encodes GS1-128 HRI string to array of CODE128 code number.

Code:
```javascript
import {encodeToCodeArray} from "gs1-128-encoder";

console.log(encodeToCodeArray('(90)1234567890'));
```
Output:
```
[ 105, 102, 90, 12, 34, 56, 78, 90, 83, 106 ]
```

#### encodeForBarcodeFont

This function encodes GS1-128 HRI string to string for [barcode font](http://grandzebu.net/informatique/codbar-en/code128.htm).
[code-128-encoder](https://www.npmjs.com/package/code-128-encoder) also includes fonts using the same mapping.

Code:
```javascript
import {encodeForBarcodeFont} from "gs1-128-encoder";

console.log(encodeForBarcodeFont('(90)1234567890'));
```
Output:
```
ÒÏz,BXnzsÓ
```

### Code 128 Encoding

This module also provide code 128 encoder submodule.

Code 128 encoder has the same signature functions as main functions. See [Functions](#functions).

```javascript
import {code128} from "gs1-128-encoder";

console.log(code128.encodeForBarcodeFont('String to encode'));
```

`code128.FNC1`, `code128.FNC2`, `code128.FNC3`, `code128.FNC4A`, `code128.FNC4B` are available as special characters for FNCn.
`FNC4A` is for type A and `FNC4B` is for type B.

```javascript
import {code128} from "gs1-128-encoder";

console.log(code128.encodeForBarcodeFont(`\x00${code128.FNC1}${code128.FNC2}${code128.FNC3}${code128.FNC4A}`));
console.log(code128.encodeForBarcodeFont(`a${code128.FNC1}${code128.FNC2}${code128.FNC3}${code128.FNC4B}`));
```
## License

Copyright 2017 TANAKA Koichi (https://github.com/MugeSo/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.