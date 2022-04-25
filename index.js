let result=document.querySelector(".result")

function human(name, age, hairColor, race, alive){
let health=100;
name=name.slice(0,1).toUpperCase()+name.slice(1,name.length).toLowerCase()

if (alive=="alive" || alive==true){
alive=true;
}
else if(alive=="dead" || alive == false){
alive=false;
}

const resuscitate =(target) => {if (target.alive==false){
health-=Math.floor(Math.random(1)*5);
target.health=1;
target.alive=true;
result.textContent=`${name} resuscitated ${target.name} to 1 health and is now at ${health} health.`}else if(target.alive){result.textContent=(`${target.name} is already alive`)}

}

	const describe = () => {alert(`My name is ${name} and i have ${hairColor} hair and i am ${age} years old. I am ${race}.`)};
  
  const fight= (enemy) => {if (alive){if (enemy.health>0) {let randomNumber = Math.floor(Math.random(1)*21); enemy.health-=randomNumber; if (enemy.health<0){enemy.health=0;} result.textContent=(`${name} has done ${randomNumber} damage to ${enemy.name}. ${enemy.name} has ${enemy.health} health left.`);} else {result.textConent=(`${enemy.name} is dead`); enemy.alive=false}} else {result.textContent=(`${name} is not alive.`)}}
  
	return {health, name, age, hairColor, race, describe, fight, alive, resuscitate}
}
var bob=human("bob", 45, "gray", "latino")
var john=human("john", 16, "blonde", "japanese")
