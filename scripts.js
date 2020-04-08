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
  // 2 Values Rolled with 2 Six-Sided Die
  return roll;
}

function diceTotal(roll) {
  roll = diceRoll();
  let die1 = roll[0];
  let die2 = roll[1];
  // What was rolled
  return die1 + die2;
}

function pass(value) {
  // Possible Outcomes
  value = diceTotal();
  let win = [7, 11];
  let loss = [2, 3, 12];
  let on = [1, 4, 5, 6, 8, 9, 10];
  //test
  console.log(value);
  if (win.includes(value)) {
    return "WINNER";
  } else if (loss.includes(value)) {
    return "LOSER";
  } else {
    return on;
  }
}
//test
console.log(pass());

function assignOn(passValue) {
  passValue = pass();
  let ranIndex = getRanIntInclusive(0, 6);
  console.log(ranIndex);
  let on = passValue[ranIndex];
  return on;
}

//test
console.log(assignOn());

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
