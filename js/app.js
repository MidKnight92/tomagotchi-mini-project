// console.log('this working???');

class Tomagotchi {
	constructor(age){
		this.name = 'Mukimukitchi';
		this.age = age;
		this.hunger = Math.floor(Math.random()* 10) + 1;
		this.sleepiness = Math.floor(Math.random()* 10) + 1;
		this.boredom = Math.floor(Math.random()* 10) + 1;

	}
};

const game = {
	time: 0

};
	
//button starts game