import { format } from '../src/task-1.js';

describe('format', () => {
    test('basic replacement', () => {
        expect(format(
            'Hello, ${user}! Your age is ${age}.',
            { user: 'Bob', age: 10 }
        )).toBe('Hello, Bob! Your age is 10.');
    });

    test('unknown key', () => {
        expect(format('Hello ${name}', {}))
            .toBe('Hello ${name}');
    });

    test('multiple same keys', () => {
        expect(format('${a}-${b}-${a}', { a: 1, b: 2 }))
            .toBe('1-2-1');
    });
});
