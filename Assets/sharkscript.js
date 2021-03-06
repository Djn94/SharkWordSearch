let guessVar = 10, rightGuess = 0, wrongGuess = [], underscores = ''; //Establish variables
let winCount = 0;
localStorage.setItem("winItem", winCount);
let lossCount = 0;
localStorage.setItem("lossItem", lossCount);
const wordChoiceList = ["tiger", "bull", "wobbegong", "carpet", "hammerhead", "mako", "nurse"];//Word choice list
let currentWord = wordChoiceList[Math.floor(Math.random() * wordChoiceList.length)]; //random selection
cwLength = currentWord.length;
newUnderscores = "";
console.log(currentWord);
for (i = 0; i < cwLength; i++) {
  var x = currentWord.charAt(i);
  if (x === " ") {
    underscores += x;
  }
  else {
    underscores += "_";
  }
}
let wordArray = underscores.split("");                      //Replace letters with underscor

function hangMan() {
  document.onkeyup = function (event) {  //when key pressed
    let userGuess = event.key.toLowerCase(); //assign the input to userGuess
    let resultVar = currentWord.search(userGuess);
    document.getElementById('directionsText').innerHTML = (''); //sets resultVar to if the letter is in word or not
    if (resultVar > -1) //if it is,
    {
      rightGuess++; //add one to rightguess
      for (i = 0; i <= cwLength; i++) //a for loop, should run for as long as the currentword, but it doesn't.
      {
        if (userGuess === currentWord.charAt(i)) //if the input is in current word,
        {
          wordArray[i] = currentWord.charAt(i);
          console.log(wordArray);
          let hiddenWord = document.getElementById("currentWord");
          hiddenWord.innerHTML = 'your current word is ' + wordArray;
        }
      } if (wordArray.join("") === currentWord) {
        document.getElementById('directionsText').innerHTML = ('<p>Congratulations! You have won. Press any key to begin again.</p>')
        winCount++
        //victory message
        document.onkeyup = function (event) //reload page on keyup
        {
          location.reload();
        }
      }
    }
    else { //runs if input is incorrect
      guessVar--; //minus one guess
      wrongGuess.push(userGuess); //add to empty array of wrong input
      document.getElementById('incorrectGuesses').innerHTML = ('Wrong letters guessed: ' + wrongGuess); //displays info
      document.getElementById('guessCount').innerHTML = ('Guesses left: ' + guessVar);
      if (guessVar === 0) { //if you run out of guesses
        document.getElementById('directionsText').innerHTML = ("<p> I'm sorry, you have lost. Press any key to begin again.</p>")
        lossCount++//loss screen
        document.onkeyup = function (event) {
          location.reload();
        }
      }
    }
  }
}
document.onload = hangMan();
document.getElementById("currentWord").innerText = ('Your word is ' + wordArray);
document.getElementById("wincount").innerText = ('Wins: ' + winCount);
document.getElementById("losstext").innerText = ('losses: ' + lossCount);