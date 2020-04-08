// 3/3 - 5pts
// Craps Object
const crapsRolls = {
  // Winner Values
  win: [7, 11],
  // Loser Values
  loss: [2, 3, 12],
  // On Values
  on: [1, 4, 5, 6, 8, 9, 10],
  numOfRolls: 0
};

function getRanIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function firstRoll(diceNum = 2, diceSides = 6) {
  let roll = [];
  for (let i = 0; i < diceNum; i++) {
    roll.push(getRanIntInclusive(1, diceSides));
  }
  // Two Dice Rolled
  let die1 = roll[0];
  let die2 = roll[1];
  // Total of Two Dice Rolled
  let value = die1 + die2;
  // Player Rolls Winning Value
  if (crapsRolls.win.includes(value)) {
    let winValue = value;
    return winValue;
    // Player Rolls Losing Value
  } else if (crapsRolls.loss.includes(value)) {
    let loseValue = value;
    return loseValue;
    // Player Rolls Again
  } else {
    let ranIndex = getRanIntInclusive(0, 6);
    // 'on' Value Gets Randomly Selected from Possible 'on' Values
    let onValue = crapsRolls.on[ranIndex];
    return onValue;
  }
}

// Game Results
console.log(firstRoll());

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
