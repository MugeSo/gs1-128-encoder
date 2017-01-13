'use strict';

import * as assert from 'assert';
import {encodeToBits, encodeToCodeArray, encodeToWeights, encodeForBarcodeFont} from "../lib/index";

describe('basic-usage', () => {
    [
        [
            '(90)1234567890',
            '1101001110011110101110110111101101011001110010001011000111000101101100001010011011110110101111001001100011101011',
            '2112324111312141211122321311233311212411122141211142122331112',
            [105, 102, 90, 12, 34, 56, 78, 90, 83, 106],
            'ÍÊz,BXnzsÎ'
        ],
        [
            '901234567890',
            '1101001110011110101110110111101101011001110010001011000111000101101100001010011011110110101111001001100011101011',
            '2112324111312141211122321311233311212411122141211142122331112',
            [105, 102, 90, 12, 34, 56, 78, 90, 83, 106],
            'ÍÊz,BXnzsÎ'
        ],
        [
            '(91)12(92)01',
            '110100111001111010111011110110110101100111001010111100011001101100111101110101100011101011',
            '2112324111314121211122321111432221224131112331112',
            [ 105, 102, 91, 12, 92, 1, 77, 106 ],
            'ÍÊ{,|!mÎ'
        ],
    ].forEach((condition:[string, string, string, number[], string]) => {
        const [input, bits, weights, codeArray, stringForBarcodeFont] = condition;
        describe(`with input "${input}"`, () => {
            it(`should encode to code array`, () => {
                assert.deepEqual(
                    encodeToCodeArray(input),
                    codeArray
                );
            });

            it('should encode to bits', () => {
                assert.equal(
                    encodeToBits(input),
                    bits
                );
            });

            it('should encode to weights', () => {
                assert.equal(
                    encodeToWeights(input),
                    weights
                );
            });

            it('should encode to string for barcode font', () => {
                assert.equal(
                    encodeForBarcodeFont(input),
                    stringForBarcodeFont
                );
            });
        });
    });
});
