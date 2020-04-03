// HW41
// Constructor Function
function MultiplayerGame(playlist, gamemode, map, callouts) {
  this.playlist = playlist;
  this.gamemode = gamemode;
  this.map = map;
  this.callouts = callouts;
}

// New Instance of Constructor
const haloReach = new MultiplayerGame(
  "Team Hardcore",
  "Team Slayer",
  "Countdown",
  "PLACEHOLDER"
);
