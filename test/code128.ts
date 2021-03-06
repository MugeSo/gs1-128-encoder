/*
 * This file is a part of gs1-128-encoder
 * Copyright (C) 2017 TANAKA Koichi
 * License under MIT license https://opensource.org/licenses/MIT
 */

'use strict';

import * as assert from 'assert';
import {code128} from '../lib/index';
import encodeForBarcodeFont = code128.encodeForBarcodeFont;
import encodeToWeights = code128.encodeToWeights;
import encodeToBits = code128.encodeToBits;
import encodeToCodeArray = code128.encodeToCodeArray;

describe('code128 submodule', () => {
    [
        '12',
        'Ï12',
        '12Ï',
        'Ï12325',
        '1234abc',
        'Ï1232Abc',
    ].forEach(string => {
        it(`should use start C for "${string}"`, () => {
            assert.equal(encodeToCodeArray(string)[0], 105);
        });
    });

    [
        '\x00abcd',
        'ABC\x1fabc'
    ].forEach(string => {
        it(`should use start A for "${string}"`, () => {
            assert.equal(encodeToCodeArray(string)[0], 103);
        });
    });

    [
        'abc',
        'ABC\x7f',
        'Ï12abc',
        'Ï123abc',
        // Following conditions are this library spec, not common requirement.
        'ABC',
    ].forEach(string => {
        it(`should use start B for "${string}"`, () => {
            assert.equal(encodeToCodeArray(string)[0], 104);
        });
    });

    [
        'abc\x00',
        'abc\x00abc\x00',
        '\x00BC`ABC',
        '\x00BC`ABC\x00a',
    ].forEach(string => {
        it(`should insert shift for "${string}"`, () => {
            assert.equal(encodeToCodeArray(string)[4], 98);
            assert.equal(encodeToCodeArray(string)[5], 64);
        });
    });

    [
        'abc0000',
        'abc0000abc',
        'ab00000',
        'ab00000abc',
        '\x00AB0000ABC',
        '\x00A00000ABC',
    ].forEach(string => {
        it(`should insert change to C for "${string}"`, () => {
            assert.equal(encodeToCodeArray(string)[4], 99);
        });
    });

    [
        '121212a',
        '121212a12',
        '\x00ABaa',
        '\x00ABaBa',
        '\x00ABaBa\x00',
    ].forEach(string => {
        it(`should insert change to B for "${string}"`, () => {
            assert.equal(encodeToCodeArray(string)[4], 100);
        });
    });

    [
        '121212\x00',
        'zAB\x00\x00',
        'zAB\x00B\x00',
        'zAB\x00B\x00z',
    ].forEach(string => {
        it(`should insert change to A for "${string}"`, () => {
            assert.equal(encodeToCodeArray(string)[4], 101);
        });
    });

    [
        ['<null><FNC1><FNC2><FNC3><FNC4>', `\x00${code128.FNC1}${code128.FNC2}${code128.FNC3}${code128.FNC4A}`, [103, 64, 102, 97, 96, 101, 6, 106]],
        ['a<FNC1><FNC2><FNC3><FNC4>', `a${code128.FNC1}${code128.FNC2}${code128.FNC3}${code128.FNC4B}`, [104, 65, 102, 97, 96, 100, 3, 106]]
    ].forEach((condition: [string, string, number[]]) => {
        const [title, input, expected] = condition;
        it(`should encode "${title}" to code array`, () => {
            assert.deepEqual(encodeToCodeArray(input), expected)
        })
    });
});
