// creat an array of words

dancersToGuess = ['janet', 'usher', 'chris', 'michael'];

// Choose word randomly

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


// Create placeholders based on word length
	
	var generatePlaceholder;
	
	for (var generatePlaceholder = 0; generatePlaceholder < dancerSelection.length; generatePlaceholder++) {

		var createPlaceholder = dancerHolder.push('_ ');
		onScreenDanceHolder[0].innerHTML = dancerHolder.join('');
	}

	console.log(dancerHolder);


	
	

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
			}
		} 

		else{
			wrongArray.push(changeToLetter);
			// console.log(wrongArray);
			docWrongGuess[0].innerHTML = wrongArray;
		}

	});

	// wrongArray.push(changeToLetter);
	// 		// console.log(wrongArray);
	// 		docWrongGuess[0].innerHTML = wrongArray;

		
// check if guess is right


onScreenDanceHolder[0].innerHTML = generatePlaceholder.join('');
	


	
	
