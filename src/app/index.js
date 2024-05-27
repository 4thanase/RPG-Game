let xp = 0;
let healph = 100;
let gold =50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let  inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healphText = document.querySelector("#healphText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterNameText");
const monsterHealthText = document.querySelector("#monsterHealthText");

const locations = [
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "fight dragon"],
        "button functions": [goStore, goCave, figthDragon],
        text: " you are in the town. You see a sign that says \"store\""
    },

    {
        name: "store",
        "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "welcome to the store, buy items to enhance the game experience "
    }
]

// initiallized buttons

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = figthDragon;

function update(location){

    button1.innerText = "Go to store";
    button2.innerText = "Go to cave ";
    button3.innerText = "fight dragon ";
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = figthDragon;
    text.innerText = " you are in the town. You see a sign that says \"store\"";
}

function goTown() {
    

}

function goStore() {

};

function goCave() {
    console.log("going to the cave")
};

function figthDragon() {
    console.log("going to figth the dragon ")
};

function buyHealth() {

}

function buyWeapon() {
    
}


