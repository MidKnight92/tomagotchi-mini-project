// console.log('this working???');
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
	// feed: function(){ // increase t hunger level

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
	time: 10,
	start: function(){
	const userInput = prompt(`Name your Tomagotchi`);
	console.log(`Welcome ${userInput}`);
	// I want to take users input and append it to the dom
	// $(userInput).text();
	this.setTimer()
  },
  setTimer: function(){
  	const $timer = $('#timer');
  	const interval = setInterval (() => {
  		if (this.time === 0) {
  		  clearInterval(interval);	
  		} else {
  		  Tpet(age)++
  		}

  	$timer.text(`timer: ${this.time}s`)
  }, 1000)
}	
}	
//button starts game






// game.setTimer();


// Math.floor(Math.random() * 10) + 1