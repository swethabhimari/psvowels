// 1. Given an array of words, write a function to count the number of times each word appears.
function wordscount(arr) {
    let count = {};
    for (let i = 0; i < arr.length; i++) {
        if (count[arr[i]]) {
            count[arr[i]]++;
        } else {
            count[arr[i]] = 1;
        }
    }
    return count;
}

var input = ["apple", "banana", "mango", "orange", "apple", "mango", "mango", "banana", "banana"];
let result = wordscount(input);
console.log("word count:", result);


// 2. Given an array of words, write a function that counts the number of vowels (a, e, i, o, u) in each word.
function countVowels(arr) {
    var vowels = "aeiou";
    let vows = {};

    for (let i = 0; i < arr.length; i++) {
        let convertedWord = arr[i].toLowerCase();
        let vowCount = 0;

        for (let j = 0; j < convertedWord.length; j++) {
            for (let k = 0; k < vowels.length; k++) {
                if (convertedWord[j] === vowels[k]) {
                    vowCount++;
                }
            }
        }
        vows[arr[i]] = vowCount;
    }
    return vows;
}

var input1 = ["swetha", "ravi", "aeiou", "ramu"];
let result1 = countVowels(input1);
console.log("vowels count:", result1);


// 3. Given an array of words, write a function that counts the number of consonants (non-vowel letters) in each word.
function countConsonants(arr) {
    var vowels = "aeiou";
    let cons = {};

    for (let i = 0; i < arr.length; i++) {
        let convertedWord = arr[i].toLowerCase();
        let consCount = 0;

        for (let j = 0; j < convertedWord.length; j++) {
            let isVowel = false;
            for (let k = 0; k < vowels.length; k++) {
                if (convertedWord[j] === vowels[k]) {
                    isVowel = true;
                    break;
                }
            }
            if (!isVowel) {
                consCount++;
            }
        }
        cons[arr[i]] = consCount;
    }
    return cons;
}

var input2 = ["swetha", "ravi", "aeiou", "ramu"];
let result2 = countConsonants(input2);
console.log("consonants count:", result2);