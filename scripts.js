const wordInput = document.getElementById('inputText');

let checkPalindrome = function () {
    const words = wordInput.value; // Access the input value directly
    let array = words.split("");    // Split the string into an array of characters
    let result = true;              // Set initial result to true

    if (words.length % 2 !== 0) {
        const newArray = array.filter((letter, index) => {
            return index !== Math.floor(array.length / 2); // Exclude the middle character
        });
        for (let i = 0; i < Math.floor(newArray.length / 2); i++) {
            if (newArray[i] !== newArray[newArray.length - 1 - i]) {
                result = false; // If a mismatch is found, set result to false
                break;          // Exit the loop early
            }
        }
    } else {
        for (let i = 0; i < (array.length / 2); i++) {
            if (array[i] !== array[array.length - 1 - i]) {
                result = false; // If a mismatch is found, set result to false
                break;          // Exit the loop early
            }
        }
    }
    return result; // Return the result of the palindrome check
};

// Call the function and store the result
const funcs = checkPalindrome();

if (funcs) {
    document.getElementById('result').innerText = `The word "${wordInput.value}" is a palindrome!`;
} else {
    document.getElementById('result').innerText = `The word "${wordInput.value}" is not a palindrome!`;
}
