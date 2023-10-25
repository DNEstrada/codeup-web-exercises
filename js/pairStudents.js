// Create a function that randomly pairs students into groups of 2.

const createPairs = (arr) => {
     // There can be groups of 3 if necessary (having trouble adding if statement to push last student to last array)
     // your code here
     pairedGroups = [];
     while (arr.length > 0) {
          let randomNo1 = Math.floor(Math.random() * arr.length) + 1;
          let firstStudent = arr.splice((randomNo1-1), 1);
          let randomNo2 = Math.floor(Math.random() * arr.length) + 1;
          let secondStudent = arr.splice((randomNo2 - 1), 1);
          pair = [firstStudent, secondStudent];
          pairedGroups.push(pair);
     }
     return pairedGroups;
}

const students = [ // Array length is 18
     "Amanda",
     "Bianca",
     "Cameron",
     "Chris",
     "Dany",
     "David",
     "Diana",
     "Drew",
     "Evan",
     "Hassan",
     "Jack",
     "Jason",
     "John",
     "Jonathan",
     "Jordan",
     "Joshua",
     "Katie",
     "Luis"
];

console.log(createPairs(students));
// Expected output (pairs will be different each time):
/*
[
    [ 'Amanda', 'Bianca' ],
    [ 'Cameron', 'Chris' ],
    [ 'Dany', 'David' ],
    [ 'Diana', 'Drew' ],
    [ 'Evan', 'Hassan' ],
    [ 'Jack', 'Jason' ],
    [ 'John', 'Jonathan' ],
    [ 'Jordan', 'Joshua' ],
    [ 'Katie', 'Luis' ]
]
*/