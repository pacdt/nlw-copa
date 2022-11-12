const g = "grupo "

document.getElementById("semana1").style.display = "none"
document.getElementById("semana2").style.display = "none"
document.getElementById("oitavas").style.display = "none"
document.getElementById("quartas").style.display = "none"
document.getElementById("semifinal").style.display = "none"
document.getElementById("final").style.display = "none" 

function createGame(player1, hour, group, stadium, player2) {
  return `
  <li>
    <main>
      <div>
      <img src="./assets/flags/icon-${player1}.svg" alt="Bandeira do ${player1}">
      <span>${player1.substr(0, 3)}</span>
      </div>

      <strong>
      
      <span>${group}</span>

      ${hour}

        <div>
          <span class="stadium">
          <img src='./assets/stadium.svg' alt='stadium icon'>
          ${stadium}
          </span>
        </div>

       </strong>

      <div>

      <img src="./assets/flags/icon-${player2}.svg" alt="Bandeira da ${player2}" />
      <span>${player2.substr(0, 3)}</span>
      </div>
    </main>
  </li>
  
  `
}
//let delay = -0.2
function createCard(date, day, games) {
  //delay = delay + 0.1
  //style="animation-delay: ${delay}s" <- colocar na div abaixo
  return `
    <div class="card" >
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>`
}

//Seção dos cards

//semana1 -- cards
document.querySelector("#cards").innerHTML =
  createCard(
    "20/11",
    "domingo",
    createGame("catar", "13:00", g + "a", "al-bayt", "equador")
  ) +
  createCard(
    "21/11",
    "segunda",
    createGame("inglaterra", "10:00", g + "b", "khalifa", "ira") +
      createGame("senegal", "13:00", g + "a", "al-thumama", "holanda") +
      createGame("eua", "16:00", g + "b", "al-rayyan", "gales")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "07:00", g + "c", "lusail", "arabia") +
      createGame("dinamarca", "10:00", g + "d", "Education City", "tunisia") +
      createGame("mexico", "13:00", g + "c", "ras abu aboud", "polonia") +
      createGame("franca", "16:00", g + "d", "al-janoub", "australia")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("marrocos", "07:00", g + "f", "al-bayt", "croacia") +
      createGame("alemanha", "10:00", g + "e", "khalifa", "japao") +
      createGame("espanha", "13:00", g + "e", "al-thumama", "costa") +
      createGame("belgica", "16:00", g + "f", "al-rayyan", "canada")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("suica", "07:00", g + "g", "al-janoub", "camaroes") +
      createGame("uruguai", "10:00", g + "h", "khalifa", "coreia") +
      createGame("portugal", "13:00", g + "h", "al-thumama", "gana") +
      createGame("brasil", "16:00", g + "g", "al-rayyan", "servia")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("gales", "07:00", g + "b", "al-bayt", "ira") +
      createGame("catar", "10:00", g + "a", "khalifa", "senegal") +
      createGame("holanda", "13:00", g + "a", "al-thumama", "equador") +
      createGame("inglaterra", "16:00", g + "b", "al-rayyan", "eua")
  ) +
  createCard(
    "26/11",
    "sábado",
    createGame("tunisia", "07:00", g + "d", "al-bayt", "australia") +
      createGame("polonia", "10:00", g + "c", "khalifa", "arabia") +
      createGame("franca", "13:00", g + "d", "al-thumama", "dinamarca") +
      createGame("argentina", "16:00", g + "c", "al-rayyan", "mexico")
  )

// semana 2

document.querySelector("#semana2").innerHTML =
  createCard(
    "27/11",
    "domingo",
    createGame("japao", "07:00", g + "e", "lusail", "costa") +
      createGame("belgica", "10:00", g + "f", "Education City", "marrocos") +
      createGame("croacia", "13:00", g + "f", "ras abu aboud", "canada") +
      createGame("espanha", "16:00", g + "e", "al-janoub", "alemanha")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("camaroes", "07:00", g + "g", "khalifa", "servia") +
      createGame("coreia", "10:00", g + "h", "al-thumama", "gana") +
      createGame("brasil", "13:00", g + "g", "al-rayyan", "suica") +
      createGame("portugal", "16:00", g + "h", "al-rayyan", "uruguai")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("equador", "12:00", g + "a", "lusail", "senegal") +
      createGame("holanda", "12:00", g + "a", "Education City", "catar") +
      createGame("ira", "16:00", g + "b", "ras abu aboud", "eua") +
      createGame("gales", "16:00", g + "b", "al-janoub", "inglaterra")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("tunisia", "12:00", g + "d", "al-bayt", "franca") +
      createGame("australia", "12:00", g + "d", "khalifa", "dinamarca") +
      createGame("polonia", "16:00", g + "c", "al-thumama", "argentina") +
      createGame("arabia", "16:00", g + "c", "al-rayyan", "mexico")
  ) +
  createCard(
    "01/12",
    "quarta",
    createGame("croacia", "12:00", g + "f", "al-bayt", "belgica") +
      createGame("canada", "12:00", g + "f", "khalifa", "marrocos") +
      createGame("japao", "16:00", g + "e", "al-thumama", "espanha") +
      createGame("costa", "16:00", g + "e", "al-rayyan", "alemanha")
  ) +
  createCard(
    "02/12",
    "quarta",
    createGame("coreia", "12:00", g + "h", "al-bayt", "portugal") +
      createGame("gana", "12:00", g + "h", "khalifa", "uruguai") +
      createGame("servia", "16:00", g + "g", "al-thumama", "suica") +
      createGame("camaroes", "16:00", g + "g", "al-rayyan", "brasil")
  )
// oitavas
document.querySelector("#oitavas").innerHTML =
  createCard(
    "03/12",
    "sábado",
    createGame("nda", "12:00", "oitavas", "stadium", "nda") +
      createGame("nda", "16:00", "oitavas", "stadium", "nda")
  ) +
  createCard(
    "04/12",
    "domingo",
    createGame("nda", "12:00", "oitavas", "stadium", "nda") +
      createGame("nda", "16:00", "oitavas", "stadium", "nda")
  ) +
  createCard(
    "05/12",
    "segunda",
    createGame("nda", "12:00", "oitavas", "stadium", "nda") +
      createGame("nda", "16:00", "oitavas", "stadium", "nda")
  ) +
  createCard(
    "06/12",
    "terça",
    createGame("nda", "12:00", "oitavas", "stadium", "nda") +
      createGame("nda", "16:00", "oitavas", "stadium", "nda")
  )

// quartas
document.querySelector("#quartas").innerHTML =
  createCard(
    "09/12",
    "sexta",
    createGame("nda", "12:00", "quartas", "stadium", "nda") +
      createGame("nda", "16:00", "quartas", "stadium", "nda")
  ) +
  createCard(
    "10/12",
    "sábado",
    createGame("nda", "12:00", "quartas", "stadium", "nda") +
      createGame("nda", "16:00", "quartas", "stadium", "nda")
  )
//semifinal
document.querySelector("#semifinal").innerHTML =
  createCard(
    "13/12",
    "terça",
    createGame("nda", "16:00", "semifinal", "stadium", "nda")
  ) +
  createCard(
    "14/12",
    "quarta",
    createGame("nda", "16:00", "semifinal", "stadium", "nda")
  )
// final
document.querySelector("#final").innerHTML =
  createCard(
    "17/12",
    "sábado",
    createGame("nda", "12:00", "terceiro", "stadium", "nda")
  ) +
  createCard(
    "18/12",
    "domingo",
    createGame("nda", "12:00", "final", "stadium", "nda")
  )
//Daqui pra baixo é a seção de cores e temas

const color = document.querySelector(".theme")

function changeColorGreen(color) {
  document.body.classList.remove("theme", "yellow", "blue", "red")
  document.body.classList.toggle("green")
}
function changeColorBlue(color) {
  document.body.classList.remove("green", "yellow", "theme", "red")
  document.body.classList.toggle("blue")
}
function changeColorPurple(color) {
  document.body.classList.toggle("purple")
  document.body.classList.remove("green", "blue", "yellow", "red")
}
function changeColorYellow(color) {
  document.body.classList.remove("green", "blue", "theme", "red")
  document.body.classList.toggle("yellow")
}
function changeColorRed(color) {
  document.body.classList.remove("green", "blue", "theme", "yellow")
  document.body.classList.toggle("red")
}

// seção aparecer e desaparecer divs


function jogos(semana) {
document.getElementById("cards").style.display = "none"
document.getElementById("semana2").style.display = "none"
document.getElementById("oitavas").style.display = "none"
document.getElementById("quartas").style.display = "none"
document.getElementById("semifinal").style.display = "none"
document.getElementById("final").style.display = "none"

document.getElementById(semana).style.display = "flex"
  
}
