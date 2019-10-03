
class Tomagotchi {
	constructor(name){
		this.name = name;
		this.age = 0;
		this.hunger = 1;
		this.sleepiness = 1;
		this.boredom = 1;
	}
};

//I want the game to start after the user puts input
const game = {
	time: 0,
		//  ~ ~ I would like for it to display that name in an h2 tag
		// call setTimer
	start: function(name){
		const newTom = new Tomagotchi(name);
		this.pet = newTom;
		console.log(newTom);
		this.setTimer(newTom)
		// const $img = $('<img/>')
		// $img.attr({src:"../images/babyDino.jpg", title:'Baby Dino', alt: 'Image of Baby Dino'});
		// $img.appendTo('#image');
	},
  	// I want the timer to increment up 
  	// to call an age method that will increase the tomagotchis age ever interval
  	// I want to invoke three different methods that will increase the hunger, sleepiness, and boredom at diffent times
    setTimer: function(pet){
	  	const $timer = $('#timer');
	  	const interval = setInterval (() => {
	  		this.time ++ ;
	  		this.pet['age']++
	  		$timer.text(`Timer: ${this.time}s`)
	  		if(this.time % 10 === 0) {
	  			this.becomeHungery();
	  			console.log(this.pet);
	  		} else if (this.time % 15 === 0) {
	  			this.becomeSleepy();
	  			console.log(this.pet);
	  		} else {
	  			this.becomeBored();
	  			console.log(this.pet);
	  		}
	  		this.showStats();
	  		this.dies(interval);
	  	}, 1000)	
	},
	showStats: function(){
		$('#namePet').text(`Pet Name: ${this.pet['name']}`)
		$('#age').text(`Age: ${this.pet['age']} years old`)
		$('#hunger').text(`Hunger: ${this.pet['hunger']} out of 10`);
		$('#sleepiness').text(`Sleepiness ${this.pet['sleepiness']} out of 10`);
		$('#boredom').text(`Boredom: ${this.pet['boredom']} out of 10`);
	},
	feed: function(){ 
		this.pet['hunger'] --;
	},
	turnOffLights: function(){
		this.pet['sleepiness'] --;
		$('body').css('backgroundColor', 'black')
	},
	letsPlay: function(){
		this.pet['boredom'] -= 0.5;
	},
	becomeHungery: function(){
		this.pet['hunger'] += 2;
	},
	becomeSleepy: function(){
		this.pet['sleepiness'] ++;
	},
	becomeBored: function(){
		this.pet['boredom'] += 0.5;
	},
	dies: function(interval){
		if ((this.pet['hunger'] >= 10) || (this.pet['sleepiness'] >= 10) || (this.pet['boredom'] >= 10)) {
			clearInterval(interval);
			const $gameOver = $('<h1/>').text('GAME OVER');
			$gameOver.appendTo('#sleepiness');
			console.log('GAME OVER');
		}
	}
}	




//	------------------------- Buttons (Event Listners) ------------
// This places an event listner on the "on" button and starts the game
$('form').on('submit', (e) => {
	// get name user typed in from the DOM
	console.log($('#input-box').val());
	const userInput = $('#input-box').val();
	e.preventDefault();
	game.start(userInput);
});

// This button will run the feed function
$('#feed').on('click', (e) => {
	game.feed();
});

// This button will run the turnOffLights function
$('#lightsOff').on('click', (e) => {
	game.turnOffLights();
});

// This button will run the playtime function
$('#letsPlay').on('click', (e) => {
	game.letsPlay();
});

