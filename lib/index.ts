/*
 * This file is a part of gs1-128-encoder
 * Copyright (C) 2017 TANAKA Koichi
 * License under MIT license https://opensource.org/licenses/MIT
 */

'use strict';

const codes = [
    {"code": 0, "ascii": " ", "C": "00", "bits": "11011001100", "weights": "212222"},
    {"code": 1, "ascii": "!", "C": "01", "bits": "11001101100", "weights": "222122"},
    {"code": 2, "ascii": "\"", "C": "02", "bits": "11001100110", "weights": "222221"},
    {"code": 3, "ascii": "#", "C": "03", "bits": "10010011000", "weights": "121223"},
    {"code": 4, "ascii": "$", "C": "04", "bits": "10010001100", "weights": "121322"},
    {"code": 5, "ascii": "%", "C": "05", "bits": "10001001100", "weights": "131222"},
    {"code": 6, "ascii": "&", "C": "06", "bits": "10011001000", "weights": "122213"},
    {"code": 7, "ascii": "'", "C": "07", "bits": "10011000100", "weights": "122312"},
    {"code": 8, "ascii": "(", "C": "08", "bits": "10001100100", "weights": "132212"},
    {"code": 9, "ascii": ")", "C": "09", "bits": "11001001000", "weights": "221213"},
    {"code": 10, "ascii": "*", "C": "10", "bits": "11001000100", "weights": "221312"},
    {"code": 11, "ascii": "+", "C": "11", "bits": "11000100100", "weights": "231212"},
    {"code": 12, "ascii": ",", "C": "12", "bits": "10110011100", "weights": "112232"},
    {"code": 13, "ascii": "-", "C": "13", "bits": "10011011100", "weights": "122132"},
    {"code": 14, "ascii": ".", "C": "14", "bits": "10011001110", "weights": "122231"},
    {"code": 15, "ascii": "/", "C": "15", "bits": "10111001100", "weights": "113222"},
    {"code": 16, "ascii": "0", "C": "16", "bits": "10011101100", "weights": "123122"},
    {"code": 17, "ascii": "1", "C": "17", "bits": "10011100110", "weights": "123221"},
    {"code": 18, "ascii": "2", "C": "18", "bits": "11001110010", "weights": "223211"},
    {"code": 19, "ascii": "3", "C": "19", "bits": "11001011100", "weights": "221132"},
    {"code": 20, "ascii": "4", "C": "20", "bits": "11001001110", "weights": "221231"},
    {"code": 21, "ascii": "5", "C": "21", "bits": "11011100100", "weights": "213212"},
    {"code": 22, "ascii": "6", "C": "22", "bits": "11001110100", "weights": "223112"},
    {"code": 23, "ascii": "7", "C": "23", "bits": "11101101110", "weights": "312131"},
    {"code": 24, "ascii": "8", "C": "24", "bits": "11101001100", "weights": "311222"},
    {"code": 25, "ascii": "9", "C": "25", "bits": "11100101100", "weights": "321122"},
    {"code": 26, "ascii": ":", "C": "26", "bits": "11100100110", "weights": "321221"},
    {"code": 27, "ascii": ";", "C": "27", "bits": "11101100100", "weights": "312212"},
    {"code": 28, "ascii": "<", "C": "28", "bits": "11100110100", "weights": "322112"},
    {"code": 29, "ascii": "=", "C": "29", "bits": "11100110010", "weights": "322211"},
    {"code": 30, "ascii": ">", "C": "30", "bits": "11011011000", "weights": "212123"},
    {"code": 31, "ascii": "?", "C": "31", "bits": "11011000110", "weights": "212321"},
    {"code": 32, "ascii": "@", "C": "32", "bits": "11000110110", "weights": "232121"},
    {"code": 33, "ascii": "A", "C": "33", "bits": "10100011000", "weights": "111323"},
    {"code": 34, "ascii": "B", "C": "34", "bits": "10001011000", "weights": "131123"},
    {"code": 35, "ascii": "C", "C": "35", "bits": "10001000110", "weights": "131321"},
    {"code": 36, "ascii": "D", "C": "36", "bits": "10110001000", "weights": "112313"},
    {"code": 37, "ascii": "E", "C": "37", "bits": "10001101000", "weights": "132113"},
    {"code": 38, "ascii": "F", "C": "38", "bits": "10001100010", "weights": "132311"},
    {"code": 39, "ascii": "G", "C": "39", "bits": "11010001000", "weights": "211313"},
    {"code": 40, "ascii": "H", "C": "40", "bits": "11000101000", "weights": "231113"},
    {"code": 41, "ascii": "I", "C": "41", "bits": "11000100010", "weights": "231311"},
    {"code": 42, "ascii": "J", "C": "42", "bits": "10110111000", "weights": "112133"},
    {"code": 43, "ascii": "K", "C": "43", "bits": "10110001110", "weights": "112331"},
    {"code": 44, "ascii": "L", "C": "44", "bits": "10001101110", "weights": "132131"},
    {"code": 45, "ascii": "M", "C": "45", "bits": "10111011000", "weights": "113123"},
    {"code": 46, "ascii": "N", "C": "46", "bits": "10111000110", "weights": "113321"},
    {"code": 47, "ascii": "O", "C": "47", "bits": "10001110110", "weights": "133121"},
    {"code": 48, "ascii": "P", "C": "48", "bits": "11101110110", "weights": "313121"},
    {"code": 49, "ascii": "Q", "C": "49", "bits": "11010001110", "weights": "211331"},
    {"code": 50, "ascii": "R", "C": "50", "bits": "11000101110", "weights": "231131"},
    {"code": 51, "ascii": "S", "C": "51", "bits": "11011101000", "weights": "213113"},
    {"code": 52, "ascii": "T", "C": "52", "bits": "11011100010", "weights": "213311"},
    {"code": 53, "ascii": "U", "C": "53", "bits": "11011101110", "weights": "213131"},
    {"code": 54, "ascii": "V", "C": "54", "bits": "11101011000", "weights": "311123"},
    {"code": 55, "ascii": "W", "C": "55", "bits": "11101000110", "weights": "311321"},
    {"code": 56, "ascii": "X", "C": "56", "bits": "11100010110", "weights": "331121"},
    {"code": 57, "ascii": "Y", "C": "57", "bits": "11101101000", "weights": "312113"},
    {"code": 58, "ascii": "Z", "C": "58", "bits": "11101100010", "weights": "312311"},
    {"code": 59, "ascii": "[", "C": "59", "bits": "11100011010", "weights": "332111"},
    {"code": 60, "ascii": "\\", "C": "60", "bits": "11101111010", "weights": "314111"},
    {"code": 61, "ascii": "]", "C": "61", "bits": "11001000010", "weights": "221411"},
    {"code": 62, "ascii": "^", "C": "62", "bits": "11110001010", "weights": "431111"},
    {"code": 63, "ascii": "_", "C": "63", "bits": "10100110000", "weights": "111224"},
    {"code": 64, "ascii": "`", "C": "64", "bits": "10100001100", "weights": "111422"},
    {"code": 65, "ascii": "a", "C": "65", "bits": "10010110000", "weights": "121124"},
    {"code": 66, "ascii": "b", "C": "66", "bits": "10010000110", "weights": "121421"},
    {"code": 67, "ascii": "c", "C": "67", "bits": "10000101100", "weights": "141122"},
    {"code": 68, "ascii": "d", "C": "68", "bits": "10000100110", "weights": "141221"},
    {"code": 69, "ascii": "e", "C": "69", "bits": "10110010000", "weights": "112214"},
    {"code": 70, "ascii": "f", "C": "70", "bits": "10110000100", "weights": "112412"},
    {"code": 71, "ascii": "g", "C": "71", "bits": "10011010000", "weights": "122114"},
    {"code": 72, "ascii": "h", "C": "72", "bits": "10011000010", "weights": "122411"},
    {"code": 73, "ascii": "i", "C": "73", "bits": "10000110100", "weights": "142112"},
    {"code": 74, "ascii": "j", "C": "74", "bits": "10000110010", "weights": "142211"},
    {"code": 75, "ascii": "k", "C": "75", "bits": "11000010010", "weights": "241211"},
    {"code": 76, "ascii": "l", "C": "76", "bits": "11001010000", "weights": "221114"},
    {"code": 77, "ascii": "m", "C": "77", "bits": "11110111010", "weights": "413111"},
    {"code": 78, "ascii": "n", "C": "78", "bits": "11000010100", "weights": "241112"},
    {"code": 79, "ascii": "o", "C": "79", "bits": "10001111010", "weights": "134111"},
    {"code": 80, "ascii": "p", "C": "80", "bits": "10100111100", "weights": "111242"},
    {"code": 81, "ascii": "q", "C": "81", "bits": "10010111100", "weights": "121142"},
    {"code": 82, "ascii": "r", "C": "82", "bits": "10010011110", "weights": "121241"},
    {"code": 83, "ascii": "s", "C": "83", "bits": "10111100100", "weights": "114212"},
    {"code": 84, "ascii": "t", "C": "84", "bits": "10011110100", "weights": "124112"},
    {"code": 85, "ascii": "u", "C": "85", "bits": "10011110010", "weights": "124211"},
    {"code": 86, "ascii": "v", "C": "86", "bits": "11110100100", "weights": "411212"},
    {"code": 87, "ascii": "w", "C": "87", "bits": "11110010100", "weights": "421112"},
    {"code": 88, "ascii": "x", "C": "88", "bits": "11110010010", "weights": "421211"},
    {"code": 89, "ascii": "y", "C": "89", "bits": "11011011110", "weights": "212141"},
    {"code": 90, "ascii": "z", "C": "90", "bits": "11011110110", "weights": "214121"},
    {"code": 91, "ascii": "{", "C": "91", "bits": "11110110110", "weights": "412121"},
    {"code": 92, "ascii": "|", "C": "92", "bits": "10101111000", "weights": "111143"},
    {"code": 93, "ascii": "}", "C": "93", "bits": "10100011110", "weights": "111341"},
    {"code": 94, "ascii": "~", "C": "94", "bits": "10001011110", "weights": "131141"},
    {"code": 95, "ascii": "È", "C": "95", "bits": "10111101000", "weights": "114113"},
    {"code": 96, "ascii": "É", "C": "96", "bits": "10111100010", "weights": "114311"},
    {"code": 97, "ascii": "Ê", "C": "97", "bits": "11110101000", "weights": "411113"},
    {"code": 98, "ascii": "Ë", "C": "98", "bits": "11110100010", "weights": "411311"},
    {"code": 99, "ascii": "Ì", "C": "99", "bits": "10111011110", "weights": "113141"},
    {"code": 100, "ascii": "Í", "C": "B!", "bits": "10111101110", "weights": "114131"},
    {"code": 101, "ascii": "Î", "C": "A!", "bits": "11101011110", "weights": "311141"},
    {"code": 102, "ascii": "Ï", "C": "F1", "bits": "11110101110", "weights": "411131"},
    {"code": 103, "ascii": "Ð", "C": "A:", "bits": "11010000100", "weights": "211412"},
    {"code": 104, "ascii": "Ñ", "C": "B:", "bits": "11010010000", "weights": "211214"},
    {"code": 105, "ascii": "Ò", "C": "C:", "bits": "11010011100", "weights": "211232"},
    {"code": 106, "ascii": "Ó", "C": "||", "bits": "1100011101011", "weights": "2331112"}
];

const mapCodeToBits = createMap('code', 'bits');
const mapCodeToWeight = createMap('code', 'weights');
const mapCodeToAscii = createMap('code', 'ascii');
const mapCToCode = createMap('C', 'code');
const START_TYPE_C = 105;
const STOP = 106;

function createMap(fromProp, toProp) {
    if (fromProp === 'code') {
        return (from) => codes[from][toProp];
    }

    const map = new Map();

    for (const code of codes) {
        map.set(code[fromProp], code[toProp]);
    }

    return (from) => map.get(from);
}

export function encodeToBits(string: string) {
    return encodeToCodeArray(string).map(mapCodeToBits).join('');
}

export function encodeToWeights(string: string) {
    return encodeToCodeArray(string).map(mapCodeToWeight).join('');
}

export function encodeForBarcodeFont(string: string) {
    return encodeToCodeArray(string).map(mapCodeToAscii).join('');
}

export function encodeToCodeArray(string: string) {
    if (!/^((\(\d+\))?\d+)+$/.test(string)) {
        throw new TypeError(`"${string}" is a invalid GS1-128 string.`);
    }

    const codes = [START_TYPE_C].concat(string.replace(/\((\d+)\)/g, 'F1$1').replace(/^\d+$/, 'F1$&').match(/.{2}/g).map(mapCToCode));

    const checksum = modulus103(codes);

    return codes.concat(checksum, STOP);
}

export function modulus103(input: number[]) {
    const l = input.length;
    let sum = input[0];
    for (let i = 1; i < l; i++) {
        sum += input[i] * i;
    }

    return sum % 103;
}
