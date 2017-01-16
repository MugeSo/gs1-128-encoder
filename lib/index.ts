/*
 * This file is a part of gs1-128-encoder
 * Copyright (C) 2017 TANAKA Koichi
 * License under MIT license https://opensource.org/licenses/MIT
 */

'use strict';

import {code128} from './code128';
export {code128} from './code128';

// This table according to GS1 General Specifications Figure 5.10.1-2.
const FIRST_TWO_DIGIT_OF_AI_WITH_PREDEFINED_LENGTH = new Set([
    '00', '01', '02', '03', '04', '11', '12', '13', '14', '15',
    '16', '17', '18', '19', '20', '31', '32', '33', '34', '35', '36', '41'
]);

function addFUNC1(string: string):string {
    return string.replace(/\(((\d{2})\d*)\)([^(]+)/g, (match, ai, firstTwoDigitOfAi, data) => {
        return ai + data + (FIRST_TWO_DIGIT_OF_AI_WITH_PREDEFINED_LENGTH.has(firstTwoDigitOfAi) ? '' : 'Ï');
    }).replace(/^[^Ï]/, 'Ï$&').replace(/Ï$/, '');
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
