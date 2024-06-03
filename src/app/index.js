let xp = 0;
let health = 100;
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

const weapons = [
    { 
        name: "stick",
        power: 5,
    },
    { 
        name: "dagger",
        power: 30,
    },
    { 
        name: "claw hammer",
        power: 50,
    },
    { 
        name: "sword",
        power: 100,
    }
];

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
    },

    {
        name: "cave",
        "button text": ["fight slime", "fight fanged beast", "Go to town square"],
        "button functions": [fightSlime, fightBeast, goTown],
        text: "you enter the cave. You see some monsters"
    }
]

// initiallized buttons

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = figthDragon;

function update(location){

    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerText = location.text;
}

function goTown() {
    update(locations[0]);

}

function goStore() {
    update(locations[1]);

};

function goCave() {
    update(locations[2]);
};

function figthDragon() {
    console.log("going to figth the dragon ")
};

function buyHealth() {
   if (gold >= 10){
        gold -= 10;
        health += 10;
        goldText.innerText = gold;
        healthText.innerText = health;
    }else{
        text.innerText = "you do not have enough gold to buy health"
   }
    
};

function buyWeapon() {
    if(currentWeapon < weapons.length - 1){
        if(gold >= 30){
            gold -= 30;
            currentWeapon ++;
            goldText.innerText = gold;
            let newWeapon = weapons[currentWeapon].name;
            text.innerText = "you now have a "+ newWeapon +".";
            inventory.push(newWeapon);
            text.innerText += "In your inventory you have "+ inventory;
        }else{
            text.innerText = "You do not have enough gold to buy a weapon";
        }
    }else{
        text.innerText = "you already have the most powerful weapon";
        button2.innerText = "sell weapon for 15 gold";
        button2.onclick = sellWeaponButton;
    };
};

function sellWeapon(){
    if(inventory.length >= 1){
        gold += 15;
        goldText.innerText = gold;
        let currentWeapon = inventory.shift();
        text.innerText = `you sold a ${currentWeapon}`
    }
}

function fightSlime(){

};

function fightBeast() {

};

