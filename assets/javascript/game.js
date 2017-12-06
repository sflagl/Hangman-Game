// creat an array of words

dancersToGuess = ['Micheal Jackson', 'Usher', 'Justin Timberlake', 'Ciara'];

// Choose word randomly

	var arrNum = Math.floor(Math.random() * dancersToGuess.length);
	var dancerSelection = dancersToGuess[arrNum]
	console.log(dancerSelection);

// Create placeholders based on word length

	var dancerHolder = [];
	for (var i = 0; i < dancerSelection.length; i++) {
		var createPlaceholder = dancerHolder.push('_');

	}
	console.log(dancerHolder);

// Get users guess
	
	document.addEventListener("keypress", function(event) {
		// var changeToCode = event.keyCode;
		var changeToLetter = String.fromCharCode(event.keyCode);
		console.log(changeToLetter);
		

});

	
		
// check if guess is right

// if right push to right array

	wrongArray = [];

// if wrong push to wrong array
	
	rightArray = [];
