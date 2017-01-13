# GS1-128 Encoder

This module encodes GS1-128 string (e.g. `(90)1234567890`) to bits (e.g. `110100111...`), weights (e.g. `211232411...`),
 code array (e.g. `[105, 102, 90, ...]`) or string for [barcode font](http://www.jtbarton.com/Barcodes/Code128.aspx#FreeCode128).

This module does not provide barcode rendering feature.

This is inspired by [code-128-encoder](https://www.npmjs.com/package/code-128-encoder).

## Usage

This module is ES6 style module and provides following functions.

GS1-128 string can be following style:
```
(90)123456789 // with '()' for AI
90123456789   // without '()' for AI
(91)12(92)01  // multiple application
```

### encodeToBits

This function encodes GS1-128 string to bits string for rendering barcode.

Code:
```typescript
import {encodeToBits} from "gs1-128-encoder";

console.log(encodeToBits('(90)1234567890'));
```
Output:
```
1101001110011110101110110111101101011001110010001011000111000101101100001010011011110110101111001001100011101011
```

### encodeToWeights

This function encodes GS1-128 string to weights string for rendering barcode.

The first digit of output string is width of leftmost bar of barcode.
The second digit is width of blank and the third digit is width of next bar.

Code:
```typescript
import {encodeToWeights} from "gs1-128-encoder";

console.log(encodeToWeights('(90)1234567890'));
```
Output:
```
2112324111312141211122321311233311212411122141211142122331112
```
### encodeToCodeArray

This function encodes GS1-128 string to array of CODE128 code number.

Code:
```typescript
import {encodeToCodeArray} from "gs1-128-encoder";

console.log(encodeToCodeArray('(90)1234567890'));
```
Output:
```
[ 105, 102, 90, 12, 34, 56, 78, 90, 83, 106 ]
```

### encodeForBarcodeFont

This function encodes GS1-128 string to string for [barcode font](http://www.jtbarton.com/Barcodes/Code128.aspx#FreeCode128).

Code:
```typescript
import {encodeForBarcodeFont} from "gs1-128-encoder";

console.log(encodeForBarcodeFont('(90)1234567890'));
```
Output:
```
ÍÊz,BXnzsÎ
```
## License

Copyright 2017 TANAKA Koichi (https://github.com/MugeSo/);

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.