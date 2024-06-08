function transformString(input) {
    const length = input.length;

    if (length % 15 === 0) {
        // Perform both operations: reverse and then replace with ASCII codes
        return input.split('').reverse().map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        // Reverse the entire string
        return input.split('').reverse().join('');
    } else if (length % 5 === 0) {
        // Replace each character with its ASCII code
        return input.split('').map(char => char.charCodeAt(0)).join(' ');
    } else {
        // If none of the conditions are met, return the original string
        return input;
    }
}

// Example usage:
console.log(transformString("Hamburger")); 
console.log(transformString("Pizza")); 
console.log(transformString("Chocolate Chip Cookie")); 
