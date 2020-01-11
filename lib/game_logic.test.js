// This script tests your code, it will run everytime you press the button 'run the tests'
// It will call your functions and will change you hero object a bit

const { expect } = chai

describe('Hero Object', function() {
  it('Declare a variable `hero` and assign it an object', function() {
    expect(sinon.match.defined.test(hero)).to.equal(true)
    expect(hero, 'hero is not an object').to.be.an('object')
  })

  it('Hero object should have a name property. The value of name should be a string.', function() {
    expect(hero.name).to.be.a('string')
  })

  it('Hero object should have a heroic property. The value of heroic should be a boolean.', function() {
    expect(hero.heroic).to.be.a('boolean')
  })

  it('Hero object should have an inventory property. The value of inventory should be an empty array', function() {
    expect(hero.inventory).to.be.an('array')
    expect(hero.inventory.length).to.equal(0)
  })

  it('Hero object should have an health property. The value health should be the number 10', function() {
    expect(hero.health).to.eq(10)
  })

  it('Hero object should have a weapon property. The value of weapon is an object with a type property which is a string and damage property which is 2', function() {
    expect(hero.weapon).to.be.an('object')
    expect(hero.weapon.type).to.be.a('string')
    expect(hero.weapon.damage).to.eq(2)
  })
})

describe('Game logic functions', function() {
  it('Functions `rest, pickUpItem and equipWeapon` are all defined', function() {
    expect(sinon.match.defined.test(rest)).to.equal(true)
    expect(sinon.match.defined.test(pickUpItem)).to.equal(true)
    expect(sinon.match.defined.test(equipWeapon)).to.equal(true)
  })
})

describe('Resting', function(){
  describe('rest function should have a parameter: person, person is a placeholder for the hero object', function() {
    it('And (re)assigns the health property of person to the value 10', function(){
      const testCreature2 = { health: 2 }
      const testCreature4 = { health: 4 }
      rest(testCreature2)
      rest(testCreature4)
      expect(testCreature2.health, 'health not restored to 10').to.equal(10)
      expect(testCreature4.health, 'health not restored to 10').to.equal(10)
    })

    it('Returns person at the end of the function', function(){
      const testCreature = {}
      const outPut = rest(testCreature)
      expect(outPut, 'creature not return from function').to.equal(testCreature)
    })

    it('Creates an alert popup with a message, If the health property of person already has the value 10', function(){
      const testCreature = { health: 10 }
      const MockAlert = {
        install: function() {
          MockAlert.message = undefined;
          MockAlert.originalAlert = window.alert;
      
          window.alert = function(message) {
            MockAlert.message = message;
          }
        },
      
        uninstall: function() {
          window.alert = MockAlert.originalAlert;
        }
      }

      MockAlert.install()
      rest(testCreature)
      expect(MockAlert.message).to.be.a('string')
      expect(MockAlert.message.length).to.be.greaterThan(0)
      MockAlert.uninstall()
    })
  })

  describe('UI for rest', function(){
    it('There is a IMG element with the id `inn`', function(){
      const innUI = document.getElementById('inn')
      expect(innUI, 'no element with id `inn`').to.exist
      expect(innUI.tagName, 'inn element is not an image').to.equal('IMG')
    })

    it('When clicked will reset the `health` property on the hero global variable to 10', function(){
      hero.health = 8
      document.getElementById('inn').click()
      expect(hero.health).to.equal(10)
    })
  })
})


describe('Picking up items', function(){
  describe('pickUpItem function has a parameter: person (placeholder for hero), and a second parameter: weapon (placeholder for a weapon object)', function() {
    it('Adds the weapon object as the last element of the inventory array of person', function(){
      const testObject = {}
      const testHero = { inventory: [ 'pocket-lint', ] }
      pickUpItem(testHero, testObject)
      expect(testHero.inventory[1], 'object not added to the inventory array').equal(testObject)
    })
  })

  describe('UI for pickUpItem', function(){
    it('There is a IMG element with the id `dagger`', function(){
      const innUI = document.getElementById('dagger')
      expect(innUI, 'no element with id `dagger`').to.exist
      expect(innUI.tagName, 'dagger element is not an image').to.equal('IMG')
    })

    it('When the dagger is clicked it will add a weapon object to the inventory array with `type`: `dagger` and `damage`: 2', function(){
      const inventoryCount = hero.inventory.length
      document.getElementById('dagger').click()
      expect(hero.inventory.length, 'nothing has been added to the inventory').to.equal(inventoryCount + 1)
      expect(hero.inventory[hero.inventory.length-1], 'weapon to be picked up is not an object').to.be.an('object')
      expect(hero.inventory[hero.inventory.length-1], 'object does not have type and damage properties').to.have.all.keys('type', 'damage')
      expect(hero.inventory[hero.inventory.length-1].type).to.equal('dagger')
      expect(hero.inventory[hero.inventory.length-1].damage).to.equal(2)
    })
  })
})

describe('Equip weapon', function(){
  describe('equipWeapon function has a parameter person (placeholder for hero)', function(){
    it('And reassigns the `weapon` property of person to the first element of the person.inventory array', function(){
      const testHero = { weapon: { type: 'sword', damage: 5 }, inventory: [ { type: 'dagger', damage: 2 } ] }
      const testWeapon = testHero.weapon
      const inventoryWeapon = testHero.inventory[0]
      equipWeapon(testHero)
      expect(testHero.weapon, 'weapon is has not changed').to.not.equal(testWeapon)
      expect(testHero.weapon).to.equal(inventoryWeapon)
    })

    it('If the inventory array of person is empty, the function should do nothing', function(){
      const testHero = { weapon: { type: 'sword', damage: 5 }, inventory: [] }
      const testWeapon = testHero.weapon
      equipWeapon(testHero)
      expect(testHero.weapon, 'Empty inventory, but the hero`s weapon has been removed').to.equal(testWeapon)
    })
  })

  describe('UI for equipWeapon', function(){
    it('There is a IMG element with the id `bag`', function(){
      const bagUI = document.getElementById('bag')
      expect(bagUI, 'no element with id `bag`').to.exist
      expect(bagUI.tagName, 'bag element is not an image').to.equal('IMG')
    })

    it('When the bag is clicked it will equip the hero with the first item in the inventory array', function(){
      const testWeapon = { type: 'test', damage: 0 }
      hero.inventory[0] = testWeapon
      document.getElementById('bag').click()
      expect(hero.weapon).to.equal(testWeapon)
      if(hero){
        hero.inventory = []
      }
    })
  })
})
