class Player {
  constructor(name, weapons){
  this.name = name;
  this.health = 10;
  this.strength = 2;
  this.weapons = weapons;
  }
  }
  Player.prototype.applyDamage = function(damage){
    this.health = this.health - damage;
    console.log(this.name +"has sustained " + damage + "amount of damage");
  }

  Player.prototype.isAlive = function(){
    if (this.health > 0){
      return true;
    }
    else {
        return false;
      }
    }

  Player.prototype.attackWith = function(){
    return this.weapons[Math.floor(Math.random() * 7) + 0];
    }

class Weapon {
  constructor (name){
  this.name = name;
  this.damage = Math.floor(Math.random() * 5) + 1  ;
  }
  }

class Minion {
  constructor(){
    this.name = "Minion";
    this.health = 5;
    this.strength = 2;
}
}

class Game {
  constructor(){
  this.players = [];
  this.minions = [];
  }
}

Minion.prototype.applyDamage = function(damage){
  this.health = this.health - damage;
  console.log(this.name +"has sustained " + damage + "amount of damage");
}

Minion.prototype.isAlive = function(){
  if (this.health > 0){
    return true;
  }
  else {
      return false;
    }
  }

Minion.prototype.attack = function(){
  return this.weapons[Math.floor(Math.random() * 7) + 0];
  }
