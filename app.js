'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Character = function () {
  function Character(attackPower, health) {
    _classCallCheck(this, Character);

    this.attackPower = attackPower;
    this.health = health;
  }

  _createClass(Character, [{
    key: 'attack',
    value: function attack(opposingPlayer) {
      //code to attack opposingPlayer if Math.random() is greater than 0.5
    }
  }]);

  return Character;
}();

var red = new Character(x, y);
var blue = new Character(a, b);

var winnerArr = ['red', 'red', 'blue', 'blue', 'red'];
winnerArr.map(function (item, index) {
  return { winner: item };
});
