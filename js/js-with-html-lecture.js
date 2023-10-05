// console.log("Testing");
// single line comment
// let easyMath = 2 + 2;
// console.log(easyMath);
// shorthand operators
// let x = 1;
// x = x + 1;
// x += 1;
// Unary operator
// let y = 5;
// y++;
// y--;
// console.log(y);
// turns number into string
// let pi = 3.14;
// console.log(pi);
// let piString = pi.toString();
// console.log(piString);
// from a string to a number method
// let nmrOfStudents = "19";
// let nmrOfStudents = parseInt(nmrOfStudents);
// console.log(nmrOfStudents);
// String Methods
let username = "Justino(Nova)";
let guildName;
let nameLength = username.length;
console.log("nameLength => ", nameLength);
let guildNameStart = username.indexOf("(");
console.log("guildNameStart =>", guildNameStart);
let guildNameEnd = nameLength - 1;
guildName = username.substring(guildNameStart + 1, guildNameEnd);
console.log(guildName);
username = username.replace("(" + guildName + ")", "");
username = username.trim();
console.log("username => ", username);

let channelMessage = "username from the guildName guild has logged in.";
channelMessage = (username + " from the " + guildName + " guild has logged in.");
channelMessage = `${username} from the ${guildName} guild has logged in.`;
console.log(channelMessage);

let i = 35;
console.log(i);

