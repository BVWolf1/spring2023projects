//Part I: Strings Methods Performed on Inputs
document.write("<h2>Volunteers (names in the people array):</h2>")

let people = [];

while (true) {
    
    let firstName = prompt("Enter the first name: ");
    let lastName = prompt("Enter the last name: ");
    
    let firstLastName = (firstName + " " + lastName).toLowerCase();
  
    if ( firstName == null || lastName == null) { 
      break;} // <--This enacts the cancel button to end the input
    
    if (firstLastName.length < 5) {
        alert("First and last combined must have at least 5 characters. Please try again.");
        continue;
    }
    
    let capFullName = " ";
    
    let wrds = firstLastName.split(" ");
    
    for (let i=0; i < wrds.length; i++) {
        let firstLet = wrds[i].charAt(0).toUpperCase();
        let restWrds = wrds[i].slice(1);
        capFullName += firstLet + restWrds + " ";
    }
    people.push(capFullName);
    
    if (people.length >=5 && !confirm("Would you like to add more names?")) {
       break;
    }  
    
    }

document.write("People Array: " + people);

//Part II: Array Methods

//Output total numer of items in an array
document.write("<h2>Output the total number of items in the array:</h2>");
let numPass = people.length;

document.write("Total number of volunteers is " + numPass + ".");

//Remove first name in the volunteer list (remove first item in array)
document.write("<h2>Remove the first item in the array. Output the new array:</h2>");

people.shift();

document.write("<p>" + people.join(", ") + "</p>");
  
//Add Tony Stark to the End of the Array

document.write("<h2>Add the name Tony Stark to the end of the array. Output the new array values:</h2>");

people.push("Tony Stark");

document.write("<p>" + people.join(", ") + "</p>");

// Reverse the Array
document.write("<h2>Reverse the people array:</h2>");

people.reverse();

document.write("<p>" + people.join(", ") + "</p>");
  
// Replace Peter Parker to the second index

document.write("<h2>Add the name Peter Parker to the second index of the people array:</h2>");

people[2] = "Peter Parker";

document.write("<p>" + people.join(", ") + "</p>");


//Sort the Array
document.write("<h2>Sort the array (volunteer list) in alphabetical order:</h2>");

people.sort();
document.write("<p>" + people.join(", ") + "</p>");
  

//Ask the user how many humans they would like to select for the Mission to Mars roster.
//Randomly select that number of items from the array and output the list of people who have been selected for the Mission to Mars Colony. 

document.write("<h2>Random Selection From Volunteer List (people array):</h2>");

let numChoice = parseInt(prompt("How many volunteers would you like to select?"));

let selection = [];
while (numChoice > people.length) {
  alert("Not enough people. Please select a number within the passenger range.")
  let numChoice = parseInt(prompt("How many people would you like to select?"));
}

for (let i = 0; i < numChoice; i++) {
  let randomIndex = Math.floor(Math.random() * people.length);
  selection.push(people[randomIndex]);

  if ( numChoice == 0) { 
      break;}
  
}
document.write("<p>Passenger manifest created: " + selection.join(", ") + "</p>");