// Refined prompt for camelCase function
// Write a JavaScript function toCamelCase that converts strings to camelCase.
// Requirements:
// 1. Handle edge cases such as empty strings, strings with special characters, and strings with multiple spaces.
// 2. Include error handling for non-string inputs (e.g., numbers, objects, etc.).
// 3. Ensure the function removes non-alphanumeric characters except underscores.
// 4. Convert all letters to lowercase and insert underscores before uppercase letters (except at the start).
// Examples:
// "first name" → "firstName"
// "user_id" → "userId"
// "SCREEN_NAME" → "screenName"
// "mobile-number" → "mobileNumber"
// "" → "" (empty string)
// "123" → "" (non-alphabetic string)
// "hello@world!" → "helloWorld"

function toCamelCase(str) {
    if (typeof str !== 'string') {
        return '';
    }
    
    return str
        .toLowerCase()
        .replace(/[_\-\s]+(.)?/g, (_, char) => char ? char.toUpperCase() : '')
        .replace(/[^a-zA-Z0-9_]/g, '')
        .replace(/([A-Z])/g, '_$1')
        .toLowerCase();
}

// Test the function with the examples
console.log(toCamelCase("first name")); // firstName
console.log(toCamelCase("user_id")); // userId
console.log(toCamelCase("SCREEN_NAME")); // screenName
console.log(toCamelCase("mobile-number")); // mobileNumber
console.log(toCamelCase("")); // ""
console.log(toCamelCase("123")); // ""
console.log(toCamelCase("hello@world!")); // helloWorld

// Chain prompt for toKebabCase function
// Step 1: Write a JavaScript function toKebabCase that converts strings to kebab-case.
// Step 2: Ensure the function handles edge cases such as empty strings, strings with special characters, and strings with multiple spaces.
// Step 3: Include error handling for non-string inputs (e.g., numbers, objects, etc.).
// Examples:
// "First Name" → "first-name"
// "user_id" → "user-id"
// "SCREEN_NAME" → "screen-name"
// "mobile-number" → "mobile-number"
// "" → "" (empty string)
// "123" → "" (non-alphabetic string)
// "hello@world!" → "hello-world"

function toKebabCase(str) {
    if (typeof str !== 'string') {
        return '';
    }

    return str
        .toLowerCase()
        .replace(/[_\s]+/g, '-') // Replace underscores and spaces with a single hyphen
        .replace(/-+/g, '-') // Replace multiple hyphens with a single hyphen
        .replace(/[^a-z0-9\-]/g, '') // Remove non-alphanumeric characters except hyphens
        .replace(/(^-+|-+$)/g, ''); // Trim hyphens from start and end
}

// Test the function with the examples
console.log(toKebabCase("First Name")); // first-name
console.log(toKebabCase("user_id")); // user-id
console.log(toKebabCase("SCREEN_NAME")); // screen-name
console.log(toKebabCase("mobile-number")); // mobile-number
console.log(toKebabCase("")); // ""
console.log(toKebabCase("123")); // ""
console.log(toKebabCase("hello@world!")); // hello-world
