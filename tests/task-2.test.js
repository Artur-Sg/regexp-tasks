import { hasOnlyAllowedChars } from '../src/task-2.js';

describe('hasOnlyAllowedChars', () => {
    test('only latin letters', () => {
        expect(hasOnlyAllowedChars('Hello')).toBe(true);
    });

    test('letters, numbers and allowed symbols', () => {
        expect(hasOnlyAllowedChars('abc_$123')).toBe(true);
    });

    test('only numbers', () => {
        expect(hasOnlyAllowedChars('123')).toBe(true);
    });

    test('contains space', () => {
        expect(hasOnlyAllowedChars('abc 123')).toBe(false);
    });

    test('contains dash', () => {
        expect(hasOnlyAllowedChars('abc-123')).toBe(false);
    });

    test('contains dot', () => {
        expect(hasOnlyAllowedChars('abc.123')).toBe(false);
    });

    test('contains cyrillic', () => {
        expect(hasOnlyAllowedChars('тест123')).toBe(false);
    });

    test('empty string', () => {
        expect(hasOnlyAllowedChars('')).toBe(false);
    });
});
