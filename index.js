const myArray = ["String", 23, "Another String", true, false];
const gameInfo = [
  { gameName: ["Halo Reach"] },
  { gameMode: ["Team Slayer", "Capture the Flag", "King of the Hill"] },
  { gameMap: ["Countdown", "Forge Work", "Zealot"] }
];
console.log(myArray[3]);
console.log(gameInfo.length);

// Like other ARRAY knowledge, INDEX number is always 1 great than highest index -- Due to starting with 0
// ARRAY index values are mutable. I.E, you CAN change the value of an item under an INDEX.
// You can access ARRAY INDEX that wasn't EXPLICITLY entered, and the ARRAY will EXPAND.

//TODO: Log Array Index of Key within Array.
console.log(gameInfo[1].gameMode[1]);
//TODO: Iterate over data and log every name.
for (let x = 0; x <= gameInfo.length - 1; x++) {
  console.log(gameInfo[x]);
}
