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
        '\x00BCaABC',
        '\x00BCaABC\x00a',
    ].forEach(string => {
        it(`should insert shift for "${string}"`, () => {
            assert.equal(encodeToCodeArray(string)[4], 98);
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
});
