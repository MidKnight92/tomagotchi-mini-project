// console.log('this working???');

//	------------------------- Buttons (Event Listners) -------------------------
// This places an event listner on the "on" button and starts the game
$('#on').on('click', (e) => {
	game.start();
});

// This button will run the feed function
$('#feed').on('click', (e) => {
	//invoke feed function
});

// This button will run the turnOffLights function
$('#lightsOff').on('click', (e) => {
	//invoke function
});

// This button will run the playtime function
$('#playTime').on('click', (e) => {
	//invoke function
});

// ----------------  Tman and Game object below --------

class Tomagotchi {
	constructor(name, age){
		this.name = name;
		this.age = age;
		this.hunger = 1;
		this.sleepiness = 1;
		this.boredom = 1;
	};
	// feed: function(){ // increase T hunger level

	// };
	// turnOffLights: function(){

	// };
	// playTime: function(){

	// };
	// death: function(){

	// };
};
const Tpet =  new Tomagotchi('tpet', 0);
console.log(Tpet);

//I want the game to start after the user puts input
const game = {
	pet: Tpet,
	time: 0,
	// after on is clicked it will prompt user to pick a name for Tomagotchi 
		//  ~ ~ I would like for it to display that name in an h2 tag
		// call setTimer
	start: function(){
	const userInput = prompt(`Name your Tomagotchi`);
	console.log(`Welcome ${userInput}`);
	// I want to take users input and append it to the dom
	// $(userInput).text();
	this.setTimer()
  },
  // I want the timer to increment up 
  	// to call an age method that will increase the tomagotchis age ever interval
  	// I want to invoke three different methods that will increase the hunger, sleepiness, and boredom at diffent times
    setTimer: function(){
  	const $timer = $('#timer');
  	const interval = setInterval (() => {
  		this.time ++ 
  		 console.log(Tpet['age']++);
	  	$timer.text(`timer: ${this.time}s`)
	  }, 1000)
	}	
}	

// if (this.time === 0) {
  		  	
//   		//  
//   		// }





// clearInterval(interval);

// Math.floor(Math.random() * 10) + 1