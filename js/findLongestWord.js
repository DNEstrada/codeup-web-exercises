const findLongestWord = (sentence) => {
     if (typeof sentence !== "string") {
          return false;
     }
     // Your code here
     const stringToArr = sentence.split(" ");
     let longestWord = "";
     stringToArr.forEach((string) => {
          if (string.length > longestWord.length) {
               longestWord = string;
          }
     });
     return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // Output: jumped
console.log(findLongestWord(1));