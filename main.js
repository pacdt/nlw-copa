function createGame(player1, hour, group, player2) {
  return `
  <li>
    <img src="./assets/flags/icon=${player1}.svg" alt="Bandeira do ${player1}" />
    <strong><span>grupo ${group}</span> ${hour}</strong>
    <img src="./assets/flags/icon=${player2}.svg" alt="Bandeira da ${player2}" />
  </li>
  <p>
  <span>
  ${player1}</span>
  <span>${player2}</span>
  </p>
  `
}
let delay = -1
function createCard(date, day, games) {
  delay = delay + 1
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>`
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "07:00", "g", "cameroon") +
      createGame("argentina", "10:00", "h", "south korea") +
      createGame("portugal", "13:00", "h", "ghana") +
      createGame("brazil", "16:00", "G", "serbia")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("brazil", "13:00", "G", "switzerland")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("cameroon", "16:00", "G", "brazil") +
      createGame("portugal", "13:00", "G", "uruguay")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("cameroon", "16:00", "G", "brazil") +
      createGame("argentina", "13:00", "G", "uruguay")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("cameroon", "16:00", "G", "brazil") +
      createGame("portugal", "13:00", "G", "brazil")
  )

const color = document.querySelector(".theme")
function changeColor(color) {
  if (color == ".theme") {
    document.body.classList.toggle(color)
  }
  if (color == ".blue" || ".green" || ".blue" || ".purple" || ".yellow") {
    document.body.classList.toggle(color)
  }
}
