const dice = document.querySelector("#dice");
const active_player = document.querySelector("#active_player");

const rollDice = () => {
  let player_id = active_player.getAttribute("data-active-player");
  let points = parseFloat(
    document.getElementById("current_points_player_" + player_id).innerHTML
  );
  value = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  dice.setAttribute("data-points", value);
  dice.setAttribute("src", `./assets/dice/${value}.svg`);
  if (value > 1) {
    document.getElementById("current_points_player_" + player_id).innerHTML =
      value + points;
  } else {
    document.getElementById("current_points_player_" + player_id).innerHTML = 0;
    let newActivePlayer =
      active_player.getAttribute("data-active-player") == 1 ? 2 : 1;
    let oldPlayer = document.getElementById("player" + player_id + "_name");
    let newPlayer = document.getElementById(
      "player" + newActivePlayer + "_name"
    );
    oldPlayer.classList.remove("active");
    newPlayer.classList.add("active");
    active_player.setAttribute("data-active-player", newActivePlayer);
  }
  console.log(value, points);
};

const newGame = () => {
  dice.setAttribute("data-points", 1);
  dice.setAttribute("src", `./assets/dice/1.svg`);
  active_player.setAttribute("data-active-player", 1);
  document.getElementById("player1_name").classList.add("active");
  document.getElementById("player2_name").classList.remove("active");
  document.getElementById("all_points_player_1").innerHTML = 0;
  document.getElementById("all_points_player_2").innerHTML = 0;
  document.getElementById("current_points_player_1").innerHTML = 0;
  document.getElementById("current_points_player_2").innerHTML = 0;
};

const holdPoints = () => {
  let currentPlayer = active_player.getAttribute("data-active-player");
  let newPlayer = currentPlayer == 1 ? 2 : 1;
  let pointsToAdd = parseFloat(
    document.getElementById("current_points_player_" + currentPlayer).innerHTML
  );
  let globalPoints =
    pointsToAdd +
    parseFloat(
      document.getElementById("all_points_player_" + currentPlayer).innerHTML
    );
  document.getElementById("all_points_player_" + currentPlayer).innerHTML =
    globalPoints;
  document.getElementById("current_points_player_1").innerHTML = 0;
  document.getElementById("current_points_player_2").innerHTML = 0;
  active_player.setAttribute("data-active-player", newPlayer);
  if (globalPoints > 99) {
    alert("Partie terminée, le joueur " + currentPlayer + " a gagné");
    newGame();
  } else {
    document
      .getElementById("player" + newPlayer + "_name")
      .classList.add("active");
    document
      .getElementById("player" + currentPlayer + "_name")
      .classList.remove("active");
  }
};
