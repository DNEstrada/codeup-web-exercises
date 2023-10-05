// Add a console.log message in external.js that says "Hello from external JavaScript".
console.log("Hello from external Javascript");

// Use the alert function to show a message that says 'Welcome to my Website!'.
alert("Welcome to my Website!");

// Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that says that the color entered is your favorite color too.
let favColor = prompt("What is your favorite color?");
alert(`${favColor} is my favorite color too.`);

// Complete exercise 3 from the previous lesson
// When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
// Use an alert to show the results of each problem.
    // Gets the input of days for each movie and stores as integers
let theLittleMermaidDays = prompt("How many days are you renting The Little Mermaid?");
    theLittleMermaidDays = parseInt(theLittleMermaidDays);
let brotherBearDays = prompt("How many days are you renting Brother Bear?");
    brotherBearDays = parseInt(brotherBearDays);
let herculesDays = prompt("How many days are you renting Hercules?");
    herculesDays = parseInt(herculesDays);
let movieCostPerDay = prompt("What is the cost of renting a movie per day?");
    movieCostPerDay = parseInt(movieCostPerDay);
// Adds days and multiplies cost/d and converts to dollars
totalCost = ((theLittleMermaidDays + brotherBearDays + herculesDays) * movieCostPerDay)
    totalCost = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"});
alert(`The total cost of renting the movies is ${totalCost}`);

// Gets number rate /h and hours worked for each company
let googleRate = parseFloat(prompt("What is the pay rate per hour for Google?"));
let googleHours = parseFloat(prompt("How many hours did you work for Google?"));
let amazonRate = parseFloat(prompt("What is the pay rate per hour for Amazon?"));
let amazonHours = parseFloat(prompt("How many hours did you work for Amazon?"));
let facebookRate = parseFloat(prompt("What is the pay rate per hour for Facebook?"));
let facebookHours = parseFloat(prompt("How many hours did you work for Facebook?"));
// Product of company rate and hours worked, for all companies
let googlePayStub = googleRate * googleHours;
let amazonPayStub = amazonRate * amazonHours;
let facebookPayStub = facebookRate * facebookHours;
// Gets total pay from all companies, converts to dollars, and alerts the result
let totalPayStub = googlePayStub + amazonPayStub + facebookPayStub;
    totalPayStub = totalPayStub.toLocaleString("en-US", {style: "currency", currency: "USD"});
alert(`The total amount paid from all companies is ${totalPayStub}`);

