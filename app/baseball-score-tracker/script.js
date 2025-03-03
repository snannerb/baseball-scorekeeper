// Game state object
const gameState = {
  team1: { name: "Team 1", score: 0 },
  team2: { name: "Team 2", score: 0 },
  currentInning: 1,
  stats: { hits: 0, strikeouts: 0, walks: 0 },
};

// DOM elements
const team1ScoreElement = document.getElementById('team1-score');
const team2ScoreElement = document.getElementById('team2-score');
const currentInningElement = document.getElementById('current-inning');
const hitsElement = document.getElementById('hits');
const strikeoutsElement = document.getElementById('strikeouts');
const walksElement = document.getElementById('walks');
const team1NameInput = document.getElementById('team1-name');
const team2NameInput = document.getElementById('team2-name');

// Event listeners
document.getElementById('team1-run').addEventListener('click', () => {
  gameState.team1.score++;
  gameState.stats.hits++;
  updateScoreboard();
});

document.getElementById('team2-run').addEventListener('click', () => {
  gameState.team2.score++;
  gameState.stats.hits++;
  updateScoreboard();
});

document.getElementById('next-inning').addEventListener('click', () => {
  gameState.currentInning++;
  updateScoreboard();
});

document.getElementById('reset-game').addEventListener('click', () => {
  gameState.team1.score = 0;
  gameState.team2.score = 0;
  gameState.currentInning = 1;
  gameState.stats.hits = 0;
  gameState.stats.strikeouts = 0;
  gameState.stats.walks = 0;
  team1NameInput.value = "Team 1";
  team2NameInput.value = "Team 2";
  updateScoreboard();
});

// Update the DOM
function updateScoreboard() {
  team1ScoreElement.textContent = gameState.team1.score;
  team2ScoreElement.textContent = gameState.team2.score;
  currentInningElement.textContent = gameState.currentInning;
  hitsElement.textContent = gameState.stats.hits;
  strikeoutsElement.textContent = gameState.stats.strikeouts;
  walksElement.textContent = gameState.stats.walks;
}