/**
 * Hello, Bob! Your age is 10.
 * format('Hello, ${user}! Your age is ${age}.', {user: 'Bob', age: 10});
 */
export function format(str, data) {
    const res = str.replace(/\$\{(\w+)\}/g, (str, key) => { // (.+?)
        return data[key] ? data[key] : str;
    })

    return res;
}
