const g = "grupo "

document.getElementById("semana1").style.display = "none"
document.getElementById("semana2").style.display = "none"
document.getElementById("oitavas").style.display = "none"
document.getElementById("quartas").style.display = "none"
document.getElementById("semifinal").style.display = "none"
document.getElementById("final").style.display = "none" 

function createGame(player1, hour, group, assistir, player2) {
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

        <div style="display: flex; align-items: center; flex-direction: row; justify-content: center;">

        <!-- <img src='./assets/tv.svg' alt='tv icon'> -->
        <a href="#">
         <span class="stadium">
          ${assistir}
          </span> 
        </a>
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
    createGame("catar", "13:00", g + "a", "Assistir", "equador")
  ) +
  createCard(
    "21/11",
    "segunda",
    createGame("inglaterra", "10:00", g + "b", "assistir", "ira") +
      createGame("senegal", "13:00", g + "a", "assitir", "holanda") +
      createGame("eua", "16:00", g + "b", "assistir", "gales")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "07:00", g + "c", "assistir", "arabia") +
      createGame("dinamarca", "10:00", g + "d", "assistir", "tunisia") +
      createGame("mexico", "13:00", g + "c", "assistir", "polonia") +
      createGame("franca", "16:00", g + "d", "assistir", "australia")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("marrocos", "07:00", g + "f", "Assistir", "croacia") +
      createGame("alemanha", "10:00", g + "e", "assistir", "japao") +
      createGame("espanha", "13:00", g + "e", "assitir", "costa") +
      createGame("belgica", "16:00", g + "f", "assistir", "canada")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("suica", "07:00", g + "g", "assistir", "camaroes") +
      createGame("uruguai", "10:00", g + "h", "assistir", "coreia") +
      createGame("portugal", "13:00", g + "h", "assitir", "gana") +
      createGame("brasil", "16:00", g + "g", "assistir", "servia")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("gales", "07:00", g + "b", "Assistir", "ira") +
      createGame("catar", "10:00", g + "a", "assistir", "senegal") +
      createGame("holanda", "13:00", g + "a", "assitir", "equador") +
      createGame("inglaterra", "16:00", g + "b", "assistir", "eua")
  ) +
  createCard(
    "26/11",
    "sábado",
    createGame("tunisia", "07:00", g + "d", "Assistir", "australia") +
      createGame("polonia", "10:00", g + "c", "assistir", "arabia") +
      createGame("franca", "13:00", g + "d", "assitir", "dinamarca") +
      createGame("argentina", "16:00", g + "c", "assistir", "mexico")
  )

// semana 2

document.querySelector("#semana2").innerHTML =
  createCard(
    "27/11",
    "domingo",
    createGame("japao", "07:00", g + "e", "assistir", "costa") +
      createGame("belgica", "10:00", g + "f", "assistir", "marrocos") +
      createGame("croacia", "13:00", g + "f", "assistir", "canada") +
      createGame("espanha", "16:00", g + "e", "assistir", "alemanha")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("camaroes", "07:00", g + "g", "assistir", "servia") +
      createGame("coreia", "10:00", g + "h", "assitir", "gana") +
      createGame("brasil", "13:00", g + "g", "assistir", "suica") +
      createGame("portugal", "16:00", g + "h", "assistir", "uruguai")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("equador", "12:00", g + "a", "assistir", "senegal") +
      createGame("holanda", "12:00", g + "a", "assistir", "catar") +
      createGame("ira", "16:00", g + "b", "assistir", "eua") +
      createGame("gales", "16:00", g + "b", "assistir", "inglaterra")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("tunisia", "12:00", g + "d", "Assistir", "franca") +
      createGame("australia", "12:00", g + "d", "assistir", "dinamarca") +
      createGame("polonia", "16:00", g + "c", "assitir", "argentina") +
      createGame("arabia", "16:00", g + "c", "assistir", "mexico")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("croacia", "12:00", g + "f", "Assistir", "belgica") +
      createGame("canada", "12:00", g + "f", "assistir", "marrocos") +
      createGame("japao", "16:00", g + "e", "assitir", "espanha") +
      createGame("costa", "16:00", g + "e", "assistir", "alemanha")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("coreia", "12:00", g + "h", "Assistir", "portugal") +
      createGame("gana", "12:00", g + "h", "assistir", "uruguai") +
      createGame("servia", "16:00", g + "g", "assitir", "suica") +
      createGame("camaroes", "16:00", g + "g", "assistir", "brasil")
  )
// oitavas
document.querySelector("#oitavas").innerHTML =
  createCard(
    "03/12",
    "sábado",
    createGame("nda", "12:00", "oitavas", "assistir", "nda") +
      createGame("nda", "16:00", "oitavas", "assistir", "nda")
  ) +
  createCard(
    "04/12",
    "domingo",
    createGame("nda", "12:00", "oitavas", "assistir", "nda") +
      createGame("nda", "16:00", "oitavas", "assistir", "nda")
  ) +
  createCard(
    "05/12",
    "segunda",
    createGame("nda", "12:00", "oitavas", "assistir", "nda") +
      createGame("nda", "16:00", "oitavas", "assistir", "nda")
  ) +
  createCard(
    "06/12",
    "terça",
    createGame("nda", "12:00", "oitavas", "assistir", "nda") +
      createGame("nda", "16:00", "oitavas", "assistir", "nda")
  )

// quartas
document.querySelector("#quartas").innerHTML =
  createCard(
    "09/12",
    "sexta",
    createGame("nda", "12:00", "quartas", "assistir", "nda") +
      createGame("nda", "16:00", "quartas", "assistir", "nda")
  ) +
  createCard(
    "10/12",
    "sábado",
    createGame("nda", "12:00", "quartas", "assistir", "nda") +
      createGame("nda", "16:00", "quartas", "assistir", "nda")
  )
//semifinal
document.querySelector("#semifinal").innerHTML =
  createCard(
    "13/12",
    "terça",
    createGame("nda", "16:00", "semifinal", "assistir", "nda")
  ) +
  createCard(
    "14/12",
    "quarta",
    createGame("nda", "16:00", "semifinal", "assistir", "nda")
  )
// final
document.querySelector("#final").innerHTML =
  createCard(
    "17/12",
    "sábado",
    createGame("nda", "12:00", "terceiro", "assistir", "nda")
  ) +
  createCard(
    "18/12",
    "domingo",
    createGame("nda", "12:00", "final", "assistir", "nda")
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
