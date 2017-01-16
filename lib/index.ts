/*
 * This file is a part of gs1-128-encoder
 * Copyright (C) 2017 TANAKA Koichi
 * License under MIT license https://opensource.org/licenses/MIT
 */

'use strict';

import {code128} from './code128';
export {code128} from './code128';

function addFUNC1(string: string) {
    return string.replace(/\((\d+)\)/g, 'Ï$1').replace(/^[^Ï]/, 'Ï$&');
}

export function encodeToBits(string: string) {
    return code128.encodeToBits(addFUNC1(string));
}

export function encodeToWeights(string: string) {
    return code128.encodeToWeights(addFUNC1(string));
}

export function encodeForBarcodeFont(string: string) {
    return code128.encodeForBarcodeFont(addFUNC1(string));
}

export function encodeToCodeArray(string: string) {
    return code128.encodeToCodeArray(addFUNC1(string));
}
