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
            'ÒÏz,BXnzsÓ'
        ],
        [
            '901234567890',
            '1101001110011110101110110111101101011001110010001011000111000101101100001010011011110110101111001001100011101011',
            '2112324111312141211122321311233311212411122141211142122331112',
            [105, 102, 90, 12, 34, 56, 78, 90, 83, 106],
            'ÒÏz,BXnzsÓ'
        ],
        [
            '(91)12(92)01',
            '11010011100111101011101111011011010110011100111101011101010111100011001101100101001100001100011101011',
            '2112324111314121211122324111311111432221221112242331112',
            [ 105, 102, 91, 12, 102, 92, 1, 63, 106 ],
            'ÒÏ{,Ï|!_Ó'
        ],
        [
            '(400)JP1100A(90)500FA',
            '1101001000011110101110110010011101001110110010011101100101101110001110111011010111011110110001001001101100110010111101110101000110001111010111011100101100101110111101000100110011011001100101111011101000110001010100011000111011110101100011101011',
            '2112144111312212311231221231221121333131211131412312122122221141311113234111313211221131411312222122221141311323111113233141112331112',
            [ 104, 102, 20, 16, 16, 42, 48, 99, 11, 0, 100, 33, 102, 25, 99, 5, 0, 100, 38, 33, 60, 106],
            'ÑÏ400JPÌ+ ÍAÏ9Ì% ÍFA\\Ó'
        ]
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

            it('should encode to rest for barcode font', () => {
                assert.equal(
                    encodeForBarcodeFont(input),
                    stringForBarcodeFont
                );
            });
        });
    });
});
