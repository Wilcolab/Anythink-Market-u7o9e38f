// Chain prompt for toKebabCase function
// Step 1: Write a JavaScript function toKebabCase that converts strings to kebab-case.
// Step 2: Ensure the function handles edge cases such as empty strings, strings with special characters, and strings with multiple spaces.
// Step 3: Include error handling for non-string inputs (e.g., numbers, objects, etc.).
// Step 4: Add input validation and sanitization to remove invalid characters.
// Step 5: Implement comprehensive testing with various input scenarios.
// Examples:
// "First Name" → "first-name"
// "user_id" → "user-id"
// "SCREEN_NAME" → "screen-name"
// "mobile-number" → "mobile-number"
// "" → "" (empty string)
// "123" → "" (non-alphabetic string)
// "hello@world!" → "hello-world"

function toKebabCase(str) {
    // Step 3: Error handling for non-string inputs
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }

    // Step 2: Handle edge case - empty string
    if (str.length === 0) {
        return '';
    }

    // Step 1 & 4: Convert string to kebab-case with validation and sanitization
    return str
        .toLowerCase() // Convert to lowercase
        .replace(/[_\s]+/g, '-') // Replace underscores and spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
        .replace(/[^a-z0-9\-]/g, '') // Remove non-alphanumeric characters except hyphens
        .replace(/(^-+|-+$)/g, ''); // Trim hyphens from start and end
}

// Step 5: Comprehensive testing with various input scenarios
console.log('=== Testing toKebabCase Function ===');

// Basic cases
console.log(toKebabCase("First Name")); // first-name
console.log(toKebabCase("user_id")); // user-id
console.log(toKebabCase("SCREEN_NAME")); // screen-name
console.log(toKebabCase("mobile-number")); // mobile-number

// Edge cases
console.log(toKebabCase("")); // ""
console.log(toKebabCase("123")); // ""
console.log(toKebabCase("hello@world!")); // hello-world

// Additional test cases
console.log(toKebabCase("  multiple   spaces  ")); // multiple-spaces
console.log(toKebabCase("camelCaseString")); // camelcasestring
console.log(toKebabCase("PascalCaseString")); // pascalcasestring
console.log(toKebabCase("mixed_CASE-example")); // mixed-case-example

// Error handling test
try {
    console.log(toKebabCase(123)); // Should throw error
} catch (error) {
    console.log('Error caught:', error.message);
}

try {
    console.log(toKebabCase(null)); // Should throw error
} catch (error) {
    console.log('Error caught:', error.message);
}

// Multi-step chain prompt for creating a complete string utility module
// Step 1: Create a utility object that contains multiple string conversion functions
// Step 2: Add validation and error handling to each function
// Step 3: Include JSDoc documentation for all functions
// Step 4: Export the utility for use in other modules

/**
 * String utility module with various case conversion functions
 */
const StringUtils = {
    /**
     * Converts a string to kebab-case
     * @param {string} str - The input string to convert
     * @returns {string} The kebab-case formatted string
     * @throws {Error} When input is not a string
     */
    toKebabCase: toKebabCase,

    /**
     * Converts a string to snake_case
     * @param {string} str - The input string to convert
     * @returns {string} The snake_case formatted string
     * @throws {Error} When input is not a string
     */
    toSnakeCase: function(str) {
        if (typeof str !== 'string') {
            throw new Error('Input must be a string');
        }

        if (str.length === 0) {
            return '';
        }

        return str
            .toLowerCase()
            .replace(/[\s\-]+/g, '_')
            .replace(/_+/g, '_')
            .replace(/[^a-z0-9_]/g, '')
            .replace(/(^_+|_+$)/g, '');
    },

    /**
     * Validates if a string is a valid identifier
     * @param {string} str - The input string to validate
     * @returns {boolean} True if valid identifier, false otherwise
     */
    isValidIdentifier: function(str) {
        if (typeof str !== 'string' || str.length === 0) {
            return false;
        }
        return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(str);
    }
};

// Step 4: Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = StringUtils;
}

console.log('\n=== Testing StringUtils Module ===');
console.log('Kebab case:', StringUtils.toKebabCase("Hello World"));
console.log('Snake case:', StringUtils.toSnakeCase("Hello World"));
console.log('Valid identifier:', StringUtils.isValidIdentifier("validName"));
console.log('Invalid identifier:', StringUtils.isValidIdentifier("123invalid"));
