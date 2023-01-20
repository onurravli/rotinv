import { validateId, validateName } from '../src';

describe('testing index file', () => {
	test('empty string should result in false', () => {
		expect(validateName('')).toBe(false);
	});
});

describe('testing index file', () => {
	test('name must contain only letters and spaces.', () => {
		expect(validateName('On2ur Ravli@')).toBe(false);
	});
});

describe('testing index file', () => {
	test('name must contain only letters and spaces.', () => {
		expect(validateName('Onur Ravli')).toBe(true);
	});
});

describe('testing index file', () => {
	test('id length must be 11.', () => {
		expect(validateId(55831231772)).toBe(true);
	});
});

describe('testing index file', () => {
	test('id length must be 11.', () => {
		expect(validateId(250355814922)).toBe(false);
	});
});
