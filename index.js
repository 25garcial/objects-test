function human(name, age, hairColor, race){
	const describe = () => {alert(`My name is ${name} and i have ${hairColor} hair and i am ${age} years old. I am ${race}.`)};
  
  const fight= (enemy) => {let randomNumber = Math.floor(Math.random(1)*21); enemy.health-=randomNumber; console.log(`${this.name} has done ${randomNumber} damage to ${enemy.name}. ${enemy.name} has ${enemy.health} health left.`); if (enemy.health<1){console.log(`${enemy.name} is dead`); enemy.fight=''}}
  
	return {name, age, hairColor, race, describe, fight}
}
var bob=human("bob", 45, "gray", "latino")
var john=human("john", 16, "blonde", "irish")
john.fight(bob)
