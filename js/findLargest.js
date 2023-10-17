// Function to find the largest number in an array
const findLargestNumber = (arr) => {
     // validate and return early
     if(!Array.isArray(arr)) {
          return; // or return false
     } else {
          // start a variable "largest" at 0
          let largest = 0; // for negative array, start largest at first index [0]
          // loop through arr and replace "largest" if value is greater
          largest = arr.reduce((a, b) => Math.max(a, b), -Infinity);
          // return largest
          return largest;
     }
};

(() => {
     // Sample array of numbers
     const numbers = [42, 17, 8, 94, 23, 61, 12, 51, 6];
     // Call the function and display the result
     const result = findLargestNumber(numbers);
     console.log(result);
})();