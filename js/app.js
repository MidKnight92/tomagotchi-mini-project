// console.log('this working???');

// This places an event listner on the "on" button and starts the game
$('#on').on('click', (e) => {
	game.start();
});




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

	// }
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
  	// as time increments up I want T's age to increment up
  	
    setTimer: function(){
  	const $timer = $('#timer');
  	const interval = setInterval (() => {
  		if (this.time === 0) {
  		  this.time ++ ;	
  		  // Tpet(age)++
  		} 
	  	$timer.text(`timer: ${this.time}s`)
	  }, 1000)
	}	
}	







// clearInterval(interval);

// Math.floor(Math.random() * 10) + 1