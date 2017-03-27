class Character {
  constructor(attackPower, health) {
    this.attackPower = attackPower;
    this.health = health;
  }

  attack(opposingPlayer) {
    //code to attack opposingPlayer if Math.random() is greater than 0.5
  }
}

const red = new Character(x, y)
const blue = new Character(a, b)

var winnerArr = ['red', 'red', 'blue', 'blue', 'red'];
winnerArr.map((item, index) => ({winner: item}));
