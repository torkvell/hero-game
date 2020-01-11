let level = 1;

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

const skeleton = {
    health: 10,
    weapon: {
        type: "Bone",
        damage: 1
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

displayStats = () => {
    //clear html content in stats section before new content is appended
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
    moveSkeleton();
});

//attack function to reduce life of object
attack = (identifier) => {
    if (identifier.indexOf("skeleton") !== -1) {
        skeleton.health = skeleton.health - hero.weapon.damage;
    }
    if (skeleton.health <= 0) {
        // remove enemy skeleton from DOM once killed
        deleteElement(`#skeleton${level}`);
        //increase level difficulty
        level++;
        if (level <= 10) {
            //create new skeleton
            createSkeleton();
            //start to move skeleton
            moveSkeleton();
        } else {
            alert("Congratulations. You made it!")
        }
    }
}

createSkeleton = () => {
    //update level text on page
    const levelHeading = document.querySelector("#level");
    levelHeading.innerHTML = "Level " + level;

    //reset health
    skeleton.health = 10;

    //create element
    const skeletonImg = document.createElement("img");
    const skeletonArea = document.querySelector("#skeletonArea");

    //adjust element styling, src attr
    skeletonImg.setAttribute("src", "./img/skeleton.png");
    skeletonImg.setAttribute("id", `skeleton${level}`);
    skeletonImg.setAttribute("onclick", `attack('#skeleton${level}');`);

    //insert into DOM
    skeletonArea.appendChild(skeletonImg);
}

moveSkeleton = (argument) => {
    const currentLevel = level;
    let pos = 600;
    const skeleton = document.getElementById(`skeleton${level}`);
    let difficulty = 10 - level;
    let interval = setInterval(move, difficulty);

    function move() {
        if (pos == 20) {
            clearInterval(interval);
            //if skeleton for specific level (thread) still exist then game over!
            if (document.getElementById(`skeleton${currentLevel}`)) {
                alert("GAME OVER!");
            }
        } else {
            pos--;
            skeleton.style.top = pos + 'px';
        }
    }
}

//TODO: Find out why dagger gets removed on DOM load even though no click event occurs
// const daggerElement = document.getElementById("dagger");
// daggerElement.addEventListener("click", deleteElement('#dagger'));