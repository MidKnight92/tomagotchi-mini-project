
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
	},
  	// I want the timer to increment up 
  	// to call an age method that will increase the tomagotchis age ever interval
  	// I want to invoke three different methods that will increase the hunger, sleepiness, and boredom at diffent times
    setTimer: function(pet){
	  	const $timer = $('#timer');
	  	const interval = setInterval (() => {
	  		this.time ++ ;
	  		console.log(this.pet['age']++);
	  		$timer.text(`timer: ${this.time}s`)
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
	  	}, 1000)
	  	// this.showStats();
	},
	showStats: function(){
		// $('#hunger').text(`Hunger: ${this.pet['hunger']}`);
		// console.log(`${pet['name']} age is ${petsAge} years old`);
	},
	feed: function(){ 
		this.pet['hunger'] --;
	},
	turnOffLights: function(){
		this.pet['sleepiness'] --;
	},
	letsPlay: function(){
		this.pet['boredom'] -= 0.5;
	},
	// death: function(){

	// },
	becomeHungery: function(){
		this.pet['hunger'] += 2;
	},
	becomeSleepy: function(){
		this.pet['sleepiness'] ++;
	},
	becomeBored: function(){
		this.pet['boredom'] += 0.5;
	}
}	

// clearInterval(interval);


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

