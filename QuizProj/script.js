let point = 0; //This holds the score
  
//Each question has its own codeblock to efficiently gather the responses from user. If statements are used to collect points.

let ans1 = prompt("What is the title of Stephen King's first published novel? A. The Shining B. Carrie C. The Stand D. Pet Sematary ");
ans1 = ans1.toUpperCase();
  if (ans1 == "B") {
    point++;
  }

let ans2 = prompt("Which of the following is based on a Stephen King book? A. Alien B. Predator C. Terminator D. Misery ");
ans2 = ans2.toUpperCase();
  if (ans2 == "D") {
    point++;
}

let ans3 = prompt("What fictional town is a common setting in many of Stephen King's novels? A. Castle Rock   B. Twin Peaks C. Mystic Falls  D. Sunnydale");
ans3 = ans3.toUpperCase();
  if (ans3 == "A") {
    point++;
}

let ans4 = prompt("What kind of car is Christine? A. Ford Mustang B. Chevrolet Camaro C. Plymouth Fury D. Dodge Charger ");
ans4 = ans4.toUpperCase();
  if (ans4 == "C") {
    point++;
}

let ans5 = prompt("What is the main character in Stephen King's The Dark Tower series? A. Roland Deschain B. Pennywise C. Jack Torrance D. Carrie White ");
ans5 = ans5.toUpperCase();
  if (ans5 == "A") {
    point++;
}
// The code block below uses if/else statement to tally points and put feedback onto the HTML page. 
document.write("<p>Your final score is " + point + " points out of 5.</p>");

if (point <= 2) {
    document.write("<p>Looks like you're not a Stephen King expert just yet! Keep reading his amazing stories.</p>");
  } else if (point >= 3 && point <= 4) {
    document.write("<p>Great job! You definitely know your Stephen King trivia. You're becoming a true fan.</p>");
  } else if (point == 5) {
    document.write("<p>Wow, you're a Stephen King master!</p>");
  }




