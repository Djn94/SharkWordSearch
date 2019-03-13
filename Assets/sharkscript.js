let guessVar=10, winCount=0, lossCount=0, rightGuess=0,wrongGuess=[], underscores=''; //Establish variables
const wordChoiceList = ["dorsal", "gill", "tailfin", "snout", "spiracle", "mako"];//Word choice list
let currentWord=wordChoiceList[Math.floor(Math.random() * wordChoiceList.length)]; //random selection
cwLength=currentWord.length;
newUnderscores="";
console.log(currentWord); //show word for guess in console
for (i = 0; i < cwLength ; i++) {
          var x = currentWord.charAt(i);
          if(x === " ")
         {
            underscores += x;
          }
          else 
          {
            underscores += "_";
          }
        }                                                           //Replace letters with underscores
document.onkeyup = function(event) {  //when key pressed
  let userGuess = event.key.toLowerCase(); //assign the input to userGuess
  let resultVar = currentWord.search(userGuess); //sets resultVar to if the letter is in word or not
    if (resultVar > -1) //if it is,
    {
      rightGuess++; //add one to rightguess
          for (i=0; i<=cwLength; i++ ) //a for loop, should run for as long as the currentword, but it doesn't.
            {
              if (userGuess === currentWord.charAt(i)) //if the input is in current word,
                {
                  let newUnderscores=underscores.replace(underscores.charAt(i), userGuess);
                  console.log(i);
                  console.log(newUnderscores)
                let hiddenWord = document.getElementById("currentWord");
                 hiddenWord.innerHTML = 'your current word is'+newUnderscores;
                }
                //if (newUnderscores === currentWord) //if all the underscores have become letters,
                //{
                  //document.write('YOU WIIIIN! (: your word was "'+currentWord+'. Press any key to start over'); //victory message
                  //document.onkeyup= function(event) //reload page on keyup
                    //{
                    //location.reload();
                    //}
                //}
            }
          }
    
        else { //runs if input is incorrect
                guessVar--; //minus one guess
                wrongGuess.push(userGuess); //add to empty array of wrong input
                document.getElementById('incorrectGuesses').innerHTML = ('Wrong letters guessed: '+wrongGuess); //displays info
                document.getElementById('guessCount').innerHTML = ('Guesses left: ' + guessVar); 
                if (guessVar === 0){ //if you run out of guesses
                    document.write('YOU LOSE! Press any key to start over'); //loss screen
                    document.onkeyup= function(event){
                    location.reload();
                }
                }
              }
            }
