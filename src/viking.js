// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }

}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  // attack();
  receiveDamage(damage) {
    this.health -= damage;
    return (this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`);

  }

  battleCry() {
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength)
  }

  receiveDamage(damage) {
    this.health -= damage;
    return (this.health <= 0 ? `A Saxon has died in combat` : `A Saxon has received ${damage} points of damage`);
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let i = [Math.floor(Math.random() * this.saxonArmy.length)]
    let text = this.saxonArmy[i].receiveDamage(this.vikingArmy[0].strength)
    if (this.saxonArmy[i].health <= 0) {
      this.saxonArmy.splice(i);
      return text
    } else return text
    // this.saxonArmy[i].health <= 0 ? this.saxonArmy.splice(i)
    // this.saxonArmy.receiveDamage() = this.vikingArmy[0].strength
    // return receiveDamage(Saxon)
  }

  saxonAttack() {
    let i = [Math.floor(Math.random() * this.saxonArmy.length)]
    let text = this.vikingArmy[i].receiveDamage(this.saxonArmy[0].strength)
    if (this.vikingArmy[i].health <= 0) {
      this.vikingArmy.splice(i);
      return text
    } else return text
  }

  showStatus() {
    if (this.saxonArmy.length <= 0) {
      return 'Vikings have won the war of the century!'
    } else if (this.vikingArmy.length <= 0) {
      return 'Saxons have fought for their lives and survived another day...'
    } else return 'Vikings and Saxons are still in the thick of battle.'
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
