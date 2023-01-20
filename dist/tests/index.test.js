"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
describe('testing index file', () => {
    test('empty string should result in false', () => {
        expect((0, src_1.validateName)('')).toBe(false);
    });
});
describe('testing index file', () => {
    test('name must contain only letters and spaces.', () => {
        expect((0, src_1.validateName)('On2ur Ravli@')).toBe(false);
    });
});
describe('testing index file', () => {
    test('name must contain only letters and spaces.', () => {
        expect((0, src_1.validateName)('Onur Ravli')).toBe(true);
    });
});
describe('testing index file', () => {
    test('id length must be 11.', () => {
        expect((0, src_1.validateId)(55831231772)).toBe(true);
    });
});
describe('testing index file', () => {
    test('id length must be 11.', () => {
        expect((0, src_1.validateId)(250355814922)).toBe(false);
    });
});
