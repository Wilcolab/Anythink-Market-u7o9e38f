// One-shot prompting example
// Write a function called toCamelCase that converts strings to camelCase format.
// For example, toCamelCase("hello world") should return "helloWorld".

function toCamelCase(str) {
    return str
        .split(' ')
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Test with the example
console.log(toCamelCase("hello world")); // helloWorld
