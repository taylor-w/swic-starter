// HW41
// Constructor Function
function MultiplayerGame(playlist, gamemode, map, callouts) {
  this.playlist = playlist;
  this.gamemode = gamemode;
  this.map = map;
  this.callouts = callouts;
  // Fill Callouts as Array IF Condition is Met
  if (this.map === "Countdown") {
    this.callouts = [
      "Blue Hall / Blue 1",
      "Blue Window / Blue 2",
      "Blue Needles / Blue 3",
      "Blue Attic",
      "Blue Vent",
      "Bridge / Catwalk",
      "Rockets",
      "Blue Flag",
      "Blue Healthpack",
      "Blue Stairs",
      "Blue Jetpack",
      "Blue Drop",
      "Sniper / S2",
      "Lifts / S1",
      "Bottom Mid / Mid",
      "Blue Lift",
      "Mid Lift",
      "Camo / Balcony",
      "Plasmas / Top Healthpack",
      "Red Hall / Red 1",
      "Red Window / Red 2",
      "Red Needles / Red 3",
      "Red Attic",
      "Red Vent",
      "Red Flag",
      "Red Healthpack",
      "Red Stairs",
      "Red Jetpack",
      "Red Drop",
      "Red Lift"
    ];
  }
}

// New Instance of Constructor
const haloReach = new MultiplayerGame(
  "Team Hardcore",
  "Team Slayer",
  "Countdown",
  "PLACEHOLDER"
);

// Use Prototype to Create Method
MultiplayerGame.prototype.getMapDetails = function() {
  let i = 0;
  for (i = 0; i < this.callouts.length; i++) {}
  return `${this.map} has the ${this.gamemode} gamemode and contains ${i} callouts: ${this.callouts}.`;
};

// Log Results
console.log(haloReach.getMapDetails());
