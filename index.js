// Write your JS here
const hero = {
    name: "",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "Hammer",
        damage: 2
    },
    changeName: function(newName) {
        this.name = newName;
    }
}

const dagger = {
    type: "dagger",
    damage: 2
}

rest = (person) => {
    if (person.health === 10) {
        alert("Health already full!");
    } else {
        person.health = 10;
        displayStats();
    }
    return person
}

pickUpItem = (person, weapon) => {
    person.inventory.push(weapon);
    displayStats();
}

equipWeapon = (person) => {
    if (person.inventory.length === 0) {
        return
    } else {
        person.weapon = person.inventory[0];
        displayStats();
    }
}

// // change name hero
// changeNameHero = () => {
//     //create elements needed to change name
//     const nameDiv = document.getElementById("heroName");
//     const newName = document.getElementById("newHeroNameInput").value;
//     const changeNameHero = document.getElementById("changeNameHeroButton");
//     //add new name to hero
//     changeNameHero.addEventListener("click", hero.changeName(newName));
//     //remove text from input field
//     document.getElementById("newHeroNameInput").value = "";
//     //present new name
//     nameDiv.innerText = hero.name;
//     displayStats();
// }

displayStats = () => {
    //clear html content before new is appended
    const heroStatsElement = document.getElementById("heroStats");
    heroStatsElement.innerHTML = "";

    //create the elements you need
    const table = document.createElement("table");
    let inventoryString = "";
    for (i = 0; hero.inventory.length > i; i++) {
        inventoryString += i + 1 + ": " + hero.inventory[i].type + "  ";
    }
    const tableBody = `
    <tr>
      <th colspan="2">Stats</th>
    </tr>
    <tr>
      <td>Name: </td><td>${hero.name}</td>
    </tr>
    <tr>
      <td>Inventory: </td><td>${inventoryString}</td>
    </tr>
    <tr>
      <td>Health: </td><td>${hero.health}</td>
    </tr>
    <tr>
      <td>Weapon: </td><td>${hero.weapon.type}</td>
    </tr>
    <tr>
      <td>Weapon damage: </td><td>${hero.weapon.damage}</td>
    </tr>`;

    //adjust the elements you need
    table.innerHTML = tableBody;

    //insert elements into DOM
    heroStatsElement.appendChild(table);
}

deleteElement = (query) => {
    let element = document.querySelector(query);
    element.remove();
}

//ask for hero name on initialization
window.addEventListener('DOMContentLoaded', (event) => {
    const name = prompt("Please enter your hero name", "");
    const nameDiv = document.getElementById("heroName");
    hero.name = name;
    nameDiv.innerText = hero.name;
    displayStats();
});

displayStats();

// delete dagger once clicked TODO: Find out why dagger gets removed on DOM load even though no click event occurs
// const daggerElement = document.getElementById("dagger");
// daggerElement.addEventListener("click", deleteElement('#dagger'));

// delete enemy skeletons once clicked
//