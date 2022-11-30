const g = "grupo "

document.getElementById("semana1").style.display = "none"
document.getElementById("semana2").style.display = "none"
document.getElementById("oitavas").style.display = "none"
document.getElementById("quartas").style.display = "none"
document.getElementById("semifinal").style.display = "none"
document.getElementById("final").style.display = "none" 

function createGame(player1, hour, group, assistir, player2, socre1, score2) {
  return `
  <li>
    <main>
      <div>
      <img src="./assets/flags/icon-${player1}.svg" alt="Bandeira do ${player1}">
      <span>${player1.substr(0, 3)}</span>
      <span style="color:#f7dd43; margin-top: 5px">${socre1}</span>
      </div>

      <strong>
      
      <span>${group}</span>

      ${hour}

        <div style="display: flex; align-items: center; flex-direction: row; justify-content: center;">

        <!-- <img src='./assets/tv.svg' alt='tv icon'> -->
        
         <span class="stadium">
          <a href="${assistir}" target="_blank">Assistir</a>
          </span> 
        
        </div>

       </strong>

      <div>

      <img src="./assets/flags/icon-${player2}.svg" alt="Bandeira da ${player2}" />
      <span>${player2.substr(0, 3)}</span>
      <span style="color:#f7dd43; margin-top: 5px">${score2}</span>
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
    createGame(
      "catar",
      "13:00",
      g + "a",
      "https://futemax.app/",
      "equador",
      "0",
      "2"
    )
  ) +
  createCard(
    "21/11",
    "segunda",
    createGame("inglaterra", "10:00", g + "b", "https://futemax.app/", "ira",6,2) +
      createGame(
        "senegal",
        "13:00",
        g + "a",
        "https://futemax.app/",
        "holanda",0,2
      ) +
      createGame("eua", "16:00", g + "b", "https://futemax.app/", "gales",1,1)
  ) +
  createCard(
    "22/11",
    "terça",
    createGame(
      "argentina",
      "07:00",
      g + "c",
      "https://futemax.app/",
      "arabia",1,2
    ) +
      createGame(
        "dinamarca",
        "10:00",
        g + "d",
        "https://futemax.app/",
        "tunisia",0,0
      ) +
      createGame(
        "mexico",
        "13:00",
        g + "c",
        "https://futemax.app/",
        "polonia",0,0
      ) +
      createGame(
        "franca",
        "16:00",
        g + "d",
        "https://futemax.app/",
        "australia",4,1
      )
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame(
      "marrocos",
      "07:00",
      g + "f",
      "https://futemax.app/",
      "croacia",0,0
    ) +
      createGame(
        "alemanha",
        "10:00",
        g + "e",
        "https://futemax.app/",
        "japao",1,2
      ) +
      createGame("espanha", "13:00", g + "e", "https://futemax.app/", "costa",7,0) +
      createGame("belgica", "16:00", g + "f", "https://futemax.app/", "canada",1,0)
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("suica", "07:00", g + "g", "https://futemax.app/", "camaroes",1,0) +
      createGame(
        "uruguai",
        "10:00",
        g + "h",
        "https://futemax.app/",
        "coreia",0,0
      ) +
      createGame("portugal", "13:00", g + "h", "https://futemax.app/", "gana",3,2) +
      createGame("brasil", "16:00", g + "g", "https://futemax.app/", "servia",2,0)
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("gales", "07:00", g + "b", "https://futemax.app/", "ira",0,2) +
      createGame("catar", "10:00", g + "a", "https://futemax.app/", "senegal",1,3) +
      createGame(
        "holanda",
        "13:00",
        g + "a",
        "https://futemax.app/",
        "equador",1,1
      ) +
      createGame("inglaterra", "16:00", g + "b", "https://futemax.app/", "eua",0,0)
  ) +
  createCard(
    "26/11",
    "sábado",
    createGame(
      "tunisia",
      "07:00",
      g + "d",
      "https://futemax.app/",
      "australia",0,1
    ) +
      createGame(
        "polonia",
        "10:00",
        g + "c",
        "https://futemax.app/",
        "arabia",2,0
      ) +
      createGame(
        "franca",
        "13:00",
        g + "d",
        "https://futemax.app/",
        "dinamarca",2,1
      ) +
      createGame(
        "argentina",
        "16:00",
        g + "c",
        "https://futemax.app/",
        "mexico",2,0
      )
  )

// semana 2

document.querySelector("#semana2").innerHTML =
  createCard(
    "27/11",
    "domingo",
    createGame(
      "japao",
      "07:00",
      g + "e",
      "https://futemax.app/",
      "costa",
      0,
      1
    ) +
      createGame(
        "belgica",
        "10:00",
        g + "f",
        "https://futemax.app/",
        "marrocos",
        0,
        2
      ) +
      createGame(
        "croacia",
        "13:00",
        g + "f",
        "https://futemax.app/",
        "canada",
        4,
        1
      ) +
      createGame(
        "espanha",
        "16:00",
        g + "e",
        "https://futemax.app/",
        "alemanha",
        1,
        1
      )
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame(
      "camaroes",
      "07:00",
      g + "g",
      "https://futemax.app/",
      "servia",
      3,
      3
    ) +
      createGame(
        "coreia",
        "10:00",
        g + "h",
        "https://futemax.app/",
        "gana",
        2,
        3
      ) +
      createGame(
        "brasil",
        "13:00",
        g + "g",
        "https://futemax.app/",
        "suica",
        1,
        0
      ) +
      createGame(
        "portugal",
        "16:00",
        g + "h",
        "https://futemax.app/",
        "uruguai",
        2,
        0
      )
  ) +
  createCard(
    "29/11",
    "terça",
    createGame(
      "equador",
      "12:00",
      g + "a",
      "https://futemax.app/",
      "senegal",
      1,
      2
    ) +
      createGame(
        "holanda",
        "12:00",
        g + "a",
        "https://futemax.app/",
        "catar",
        2,
        0
      ) +
      createGame("ira", "16:00", g + "b", "https://futemax.app/", "eua", 0, 1) +
      createGame(
        "gales",
        "16:00",
        g + "b",
        "https://futemax.app/",
        "inglaterra",
        0,
        3
      )
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame(
      "tunisia",
      "12:00",
      g + "d",
      "https://futemax.app/",
      "franca",
      "?",
      "?"
    ) +
      createGame(
        "australia",
        "12:00",
        g + "d",
        "https://futemax.app/",
        "dinamarca",
        "?",
        "?"
      ) +
      createGame(
        "polonia",
        "16:00",
        g + "c",
        "https://futemax.app/",
        "argentina",
        "?",
        "?"
      ) +
      createGame(
        "arabia",
        "16:00",
        g + "c",
        "https://futemax.app/",
        "mexico",
        "?",
        "?"
      )
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame(
      "croacia",
      "12:00",
      g + "f",
      "https://futemax.app/",
      "belgica",
      "?",
      "?"
    ) +
      createGame(
        "canada",
        "12:00",
        g + "f",
        "https://futemax.app/",
        "marrocos",
        "?",
        "?"
      ) +
      createGame(
        "japao",
        "16:00",
        g + "e",
        "https://futemax.app/",
        "espanha",
        "?",
        "?"
      ) +
      createGame(
        "costa",
        "16:00",
        g + "e",
        "https://futemax.app/",
        "alemanha",
        "?",
        "?"
      )
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame(
      "coreia",
      "12:00",
      g + "h",
      "https://futemax.app/",
      "portugal",
      "?",
      "?"
    ) +
      createGame(
        "gana",
        "12:00",
        g + "h",
        "https://futemax.app/",
        "uruguai",
        "?",
        "?"
      ) +
      createGame(
        "servia",
        "16:00",
        g + "g",
        "https://futemax.app/",
        "suica",
        "?",
        "?"
      ) +
      createGame(
        "camaroes",
        "16:00",
        g + "g",
        "https://futemax.app/",
        "brasil",
        "?",
        "?"
      )
  )
// oitavas
document.querySelector("#oitavas").innerHTML =
  createCard(
    "03/12",
    "sábado",
    createGame(
      "holanda",
      "12:00",
      "oitavas",
      "https://futemax.app/",
      "eua",
      "?",
      "?"
    ) +
      createGame(
        "nda",
        "16:00",
        "oitavas",
        "https://futemax.app/",
        "nda",
        "?",
        "?"
      )
  ) +
  createCard(
    "04/12",
    "domingo",
    createGame(
      "nda",
      "12:00",
      "oitavas",
      "https://futemax.app/",
      "nda",
      "?",
      "?"
    ) +
      createGame(
        "inglaterra",
        "16:00",
        "oitavas",
        "https://futemax.app/",
        "senegal",
        "?",
        "?"
      )
  ) +
  createCard(
    "05/12",
    "segunda",
    createGame(
      "nda",
      "12:00",
      "oitavas",
      "https://futemax.app/",
      "nda",
      "?",
      "?"
    ) +
      createGame(
        "nda",
        "16:00",
        "oitavas",
        "https://futemax.app/",
        "nda",
        "?",
        "?"
      )
  ) +
  createCard(
    "06/12",
    "terça",
    createGame(
      "nda",
      "12:00",
      "oitavas",
      "https://futemax.app/",
      "nda",
      "?",
      "?"
    ) +
      createGame(
        "nda",
        "16:00",
        "oitavas",
        "https://futemax.app/",
        "nda",
        "?",
        "?"
      )
  )

// quartas
document.querySelector("#quartas").innerHTML =
  createCard(
    "09/12",
    "sexta",
    createGame(
      "nda",
      "12:00",
      "quartas",
      "https://futemax.app/",
      "nda",
      "?",
      "?"
    ) +
      createGame(
        "nda",
        "16:00",
        "quartas",
        "https://futemax.app/",
        "nda",
        "?",
        "?"
      )
  ) +
  createCard(
    "10/12",
    "sábado",
    createGame(
      "nda",
      "12:00",
      "quartas",
      "https://futemax.app/",
      "nda",
      "?",
      "?"
    ) +
      createGame(
        "nda",
        "16:00",
        "quartas",
        "https://futemax.app/",
        "nda",
        "?",
        "?"
      )
  )
//semifinal
document.querySelector("#semifinal").innerHTML =
  createCard(
    "13/12",
    "terça",
    createGame(
      "nda",
      "16:00",
      "semifinal",
      "https://futemax.app/",
      "nda",
      "?",
      "?"
    )
  ) +
  createCard(
    "14/12",
    "quarta",
    createGame(
      "nda",
      "16:00",
      "semifinal",
      "https://futemax.app/",
      "nda",
      "?",
      "?"
    )
  )
// final
document.querySelector("#final").innerHTML =
  createCard(
    "17/12",
    "sábado",
    createGame(
      "nda",
      "12:00",
      "terceiro",
      "https://futemax.app/",
      "nda",
      "?",
      "?"
    )
  ) +
  createCard(
    "18/12",
    "domingo",
    createGame("nda", "12:00", "final", "https://futemax.app/", "nda", "?", "?")
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
