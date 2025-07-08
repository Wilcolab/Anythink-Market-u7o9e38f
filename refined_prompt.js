// Refined prompting example with error handling and edge cases
// Write a robust JavaScript function toCamelCase that converts strings to camelCase format.
// Include comprehensive error handling and edge case management:
// - Validate input is a string, throw descriptive error if not
// - Handle empty strings and whitespace-only strings
// - Handle multiple consecutive separators (spaces, hyphens, underscores)
// - Handle mixed case inputs properly
// - Handle special characters by removing them
// - Handle numbers appropriately
// Examples:
// toCamelCase("hello world") → "helloWorld"
// toCamelCase("user_id") → "userId"
// toCamelCase("SCREEN-NAME") → "screenName"
// toCamelCase("mobile__number") → "mobileNumber"
// toCamelCase("") → ""
// toCamelCase(123) → throw Error

function toCamelCase(input) {
    // Input validation
    if (typeof input !== 'string') {
        throw new Error(`Expected string input, received ${typeof input}`);
    }
    
    // Handle empty or whitespace-only strings
    if (input.trim() === '') {
        return '';
    }
    
    // Convert to camelCase with robust handling
    return input
        // Remove special characters except alphanumeric, spaces, hyphens, underscores
        .replace(/[^a-zA-Z0-9\s\-_]/g, '')
        // Handle multiple consecutive separators
        .replace(/[\s\-_]+/g, ' ')
        // Trim whitespace
        .trim()
        // Convert to lowercase and split by spaces
        .toLowerCase()
        .split(' ')
        // Map each word, capitalizing first letter except for first word
        .map((word, index) => {
            if (word === '') return '';
            if (index === 0) {
                return word;
            }
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        // Join and remove empty strings
        .filter(word => word !== '')
        .join('');
}

// Test cases demonstrating robust handling
try {
    console.log(toCamelCase("hello world")); // "helloWorld"
    console.log(toCamelCase("user_id")); // "userId"
    console.log(toCamelCase("SCREEN-NAME")); // "screenName"
    console.log(toCamelCase("mobile__number")); // "mobileNumber"
    console.log(toCamelCase("   whitespace   ")); // "whitespace"
    console.log(toCamelCase("")); // ""
    console.log(toCamelCase("special@#$chars")); // "specialChars"
    console.log(toCamelCase("number123test")); // "number123test"
    
    // This should throw an error
    console.log(toCamelCase(123));
} catch (error) {
    console.error("Error:", error.message);
}
