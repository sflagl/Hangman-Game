// creat an array of words

dancersToGuess = ['janet', 'michael', 'timberlake', 'beyonce'];

// Choose word randomly

	// function randomDancer(){

	// }
	
	var arrNum = Math.floor(Math.random() * dancersToGuess.length);

	var dancerSelection = dancersToGuess[arrNum];
	// if right push to right array
	var rightArray = [];
	// if wrong push to wrong array
	var wrongArray = [];
	var dancerHolder = [];
	
	console.log(dancerSelection);

	var onScreenDanceHolder = document.getElementsByClassName("placeholder");



	var docRightGuess = document.getElementsByClassName('guessedRight');

	var docWrongGuess = document.getElementsByClassName('guessedWrong');

	var wins = 0;

	var loses = 0;

	var guesses = 4;

// Create placeholders based on word length
	
	var generatePlaceholder;



		for (var generatePlaceholder = 0; generatePlaceholder < dancerSelection.length; generatePlaceholder++) {

		var createPlaceholder = dancerHolder.push('_ ');
		onScreenDanceHolder[0].innerHTML = dancerHolder.join('');
		}


		function nextQuestion(){

				onScreenDanceHolder.innerHTML = '';

				dancerHolder.splice(0,dancerHolder.length);


				wrongArray.splice(0,wrongArray.length);
				rightArray.splice(0,rightArray.length);

				document.getElementById("right").innerHTML = '';
				document.getElementById("wrong").innerHTML = '';


				arrNum = Math.floor(Math.random() * dancersToGuess.length);

				dancerSelection = dancersToGuess[arrNum];

				for (var generatePlaceholder = 0; generatePlaceholder < dancerSelection.length; generatePlaceholder++) {

				var createPlaceholder = dancerHolder.push('_ ');
				onScreenDanceHolder[0].innerHTML = dancerHolder.join('');
				}

				console.log(dancerSelection);
		}

	

	

	// console.log(dancerHolder);



	document.getElementById("guesses").innerHTML = guesses;
	

// Get users guess
	
	document.addEventListener("keypress", function(event) {
		// var changeToCode = event.keyCode;
		var changeToLetter = String.fromCharCode(event.keyCode);
		

		// if users guess is right
		if(dancerSelection.indexOf(changeToLetter) > -1){
			// console.log(true);
			rightArray.push(changeToLetter);


			// console.log(rightArray);
			dancerHolder[dancerSelection.indexOf(changeToLetter)] = changeToLetter;
			// console.log(changeToLetter);

			onScreenDanceHolder[0].innerHTML = dancerHolder.join('');
			docRightGuess[0].innerHTML = rightArray;

			if(dancerHolder.join('') == dancerSelection) {
				alert('you win!');
				wins++;
				guesses++;
				document.getElementById("guesses").innerHTML = guesses;
				document.getElementById("winHolder").innerHTML = wins;
				nextQuestion();

			}
		} 

		else{
			wrongArray.push(changeToLetter);
			// console.log(wrongArray);
			docWrongGuess[0].innerHTML = wrongArray;

			
		}


		if(wrongArray.length === 10){
			loses++;
			guesses--;
			document.getElementById("loseHolder").innerHTML = loses;
			document.getElementById("guesses").innerHTML = guesses;
			console.log('you' + loses);
			
			alert('you guessed to many');
			nextQuestion();
			

		} else if (guesses === 0){
			alert('you lost!');



		} else{

		}

		

	});




	// wrongArray.push(changeToLetter);
	// 		// console.log(wrongArray);
	// 		docWrongGuess[0].innerHTML = wrongArray;

		
// check if guess is right


// onScreenDanceHolder[0].innerHTML = generatePlaceholder.join('');
	


	
	
