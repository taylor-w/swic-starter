// 3/3 - 5pts
function getRanIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function diceRoll(diceNum = 2, diceSides = 6) {
  let roll = [];
  for (let i = 0; i < diceNum; i++) {
    roll.push(getRanIntInclusive(1, diceSides));
  }
  return roll;
}

let roll = diceRoll();
let die1 = roll[0];
console.log(die1);
let die2 = roll[1];
console.log(die2);
let diceTotal = die1 + die2;

function dieValue(die1, die2, diceTotal) {
  let roll = diceRoll();
  die1 = roll[0];
  die2 = roll[1];
  diceTotal = die1 + die2;
}
// Craps game

// Use bets for pass => roll will total 7 or 11

// UpperBound: 12
// IF 2, 3, 12 => bet is outright lost
// ELSE IF 7, 11 => bet is outright won
// ELSE => 1, 4, 5, 6, 8, 9, 10
// MARK one of ELSE numbers
// LowerBound: 1

// Start Loop
// IF roll hits MARK => WIN
// ELSE roll until MARK hit || 7 => LOSS
// End Loop

// Reward/Take 'bet' based on game outcome
console.log(dieValue());
