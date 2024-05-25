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

// initiallized buttons

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = figthDragon;

function goStore() {
    console.log("going to the store")
};

function goCave() {
    console.log("going to the cave")
};

function figthDragon() {
    console.log("going to figth the dragon ")
};

