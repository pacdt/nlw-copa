function createGame(player1, hour, group, stadium, player2) {
  return `
  <li>
    <main>

      <div>
      <img src="./assets/flags/icon=${player1}.svg" alt="Bandeira do ${player1}">
      <span>${player1.substr(0, 3)}</span>
      </div>

      <strong><span>grupo ${group}</span> ${hour}<span class="stadium">${stadium}</span></strong>
      
      <div>
      <img src="./assets/flags/icon=${player2}.svg" alt="Bandeira da ${player2}" />
      <span>${player2.substr(0, 3)}</span>
      </div>

    </main>
  </li>
  
  `
}
let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
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
    "20/11",
    "domingo",
    createGame("qatar", "13:00", "a", "al-bayt", "ecuador")
  ) +
  createCard(
    "21/11",
    "segunda",
    createGame("england", "10:00", "b", "khalifa", "iran")+
    createGame('senegal','13:00','a','al-thumama','netherlands')+
    createGame('united states', '16:00','b','al-rayyan','wales')
  ) +
  createCard('22/11', 'terça',
  createGame('argentina', '07:00','c','lusail','saudi arabia')+
  createGame('denmark', '10:00','d','Education City','tunisia')+
  createGame('mexico', '13:00','c','ras abu aboud', 'poland')+
  createGame('france','16:00','d','al-janoub','australia')
  )+
  createCard(
    '23/11','quarta',
    createGame('morocco','07:00','f','al-bayt','croatia')+
    createGame('germany','10:00','e','khalifa','japan')+
    createGame('spain','13:00','e','al-thumama','costa rica')+
    createGame('belgium','16:00','f','al-rayyan','canada')
  )


const color = document.querySelector(".theme")

function changeColorGreen(color) {
  document.body.classList.remove("theme", "purple", "blue", "theme")
  document.body.classList.toggle("green")
}
function changeColorBlue(color) {
  document.body.classList.remove("green", "purple", "theme")
  document.body.classList.toggle("blue")
}
function changeColorPurple(color) {
  document.body.classList.toggle("purple")
  document.body.classList.remove("green", "blue", "theme")
}
function changeColorYellow(color) {
  document.body.classList.remove("green", "blue", "purple")
  document.body.classList.toggle("theme")
}
