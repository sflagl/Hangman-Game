// creat an array of words

dancersToGuess = ['jackson', 'usher', 'timberlake', 'ciara'];

// Choose word randomly

	var arrNum = Math.floor(Math.random() * dancersToGuess.length);
	var dancerSelection = dancersToGuess[arrNum];
	// if right push to right array
	var rightArray = [];
	// if wrong push to wrong array
	var wrongArray = [];
	var dancerHolder = [];
	
	console.log(dancerSelection);

// Create placeholders based on word length

	
	for (var i = 0; i < dancerSelection.length; i++) {
		var createPlaceholder = dancerHolder.push('_');

	}
	console.log(dancerHolder);

// Get users guess
	
	document.addEventListener("keypress", function(event) {
		// var changeToCode = event.keyCode;
		var changeToLetter = String.fromCharCode(event.keyCode);
		// console.log(dancerSelection.indexOf(changeToLetter));
		// if users guess is right
		if(dancerSelection.indexOf(changeToLetter) > -1){
			// console.log(true);
			rightArray.push(changeToLetter);
			// console.log(rightArray);
			dancerHolder[dancerSelection.indexOf(changeToLetter)] = changeToLetter;
			// console.log(changeToLetter);

			if(dancerHolder.join('') == dancerSelection) {
				alert('you win!');
			}
		} 

		else{
			wrongArray.push(changeToLetter);
			// console.log(wrongArray);
		}

	});

	
		
// check if guess is right



	


	
	
