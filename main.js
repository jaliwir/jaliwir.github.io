// Demo Haikyu!! player data
const players = [
  { name: "Shoyo Hinata", position: "Middle Blocker", team: "Karasuno" },
  { name: "Tobio Kageyama", position: "Setter", team: "Karasuno" },
  { name: "Kotaro Bokuto", position: "Wing Spiker", team: "Fukurodani" },
  { name: "Keiji Akaashi", position: "Setter", team: "Fukurodani" },
  { name: "Tetsuro Kuroo", position: "Middle Blocker", team: "Nekoma" },
  { name: "Kenma Kozume", position: "Setter", team: "Nekoma" },
  { name: "Asahi Azumane", position: "Wing Spiker", team: "Karasuno" },
  { name: "Osamu Miya", position: "Wing Spiker", team: "Inarizaki" },
  { name: "Atsumu Miya", position: "Setter", team: "Inarizaki" },
  // Add more as you like!
];

const positions = [
  "Setter",
  "Middle Blocker",
  "Wing Spiker",
  "Libero",
  "Opposite Spiker"
];

function renderPositions(selectedPlayers = {}) {
  const container = document.getElementById('positions');
  container.innerHTML = '';
  positions.forEach(pos => {
    const card = document.createElement('div');
    card.className = 'position-card';
    card.innerHTML = `<strong>${pos}</strong><br>${selectedPlayers[pos] ? selectedPlayers[pos].name + ' (' + selectedPlayers[pos].team + ')' : '<em>Empty</em>'}`;
    container.appendChild(card);
  });
}

function renderPlayers() {
  const playerList = document.getElementById('player-list');
  playerList.innerHTML = '';
  players.forEach(player => {
    const card = document.createElement('div');
    card.className = 'player-card';
    card.innerHTML = `<strong>${player.name}</strong><br>${player.position}<br><span>${player.team}</span>`;
    card.onclick = () => assignPlayer(player);
    playerList.appendChild(card);
  });
}

let selectedPlayers = {};

function assignPlayer(player) {
  selectedPlayers[player.position] = player;
  renderPositions(selectedPlayers);
}

function randomizeTeam() {
  selectedPlayers = {};
  positions.forEach(pos => {
    const filtered = players.filter(p => p.position === pos);
    if (filtered.length) {
      const rand = Math.floor(Math.random() * filtered.length);
      selectedPlayers[pos] = filtered[rand];
    }
  });
  renderPositions(selectedPlayers);
}

document.getElementById('randomize').onclick = randomizeTeam;

renderPositions();
renderPlayers();
