//PEGAR ELEMENTOS DO HTML
const botaoBuscar = document.getElementById("botaoBuscar");
const cidadeInput = document.getElementById("cidade");

const latSpan = document.getElementById("lat");
const lonSpan = document.getElementById("lon");
const tempSpan = document.getElementById("temp");
const ventoSpan = document.getElementById("vento");
const direcaoSpan = document.getElementById("direcao");

//Diário
const formDiario = document.getElementById("formDiario");
const dataNota = document.getElementById("dataNota");
const textoNota = document.getElementById("textoNota");
const listaNotas = document.getElementById("listaNotas");



// BUSCAR CLIMA
botaoBuscar.addEventListener("click", async () => {
  const cidade = cidadeInput.value;

  if (cidade === "") {
    alert("Digite uma cidade!");
    return;
  }

  //Buscar coordenadas
  const url1 = `https://nominatim.openstreetmap.org/search?format=json&q=${cidade}&limit=1`;
  const resposta1 = await fetch(url1);
  const dados1 = await resposta1.json();

  if (dados1.length === 0) {
    alert("Cidade não encontrada");
    return;
  }

  const lat = dados1[0].lat;
  const lon = dados1[0].lon;
  latSpan.textContent = Number(lat).toFixed(2);
  lonSpan.textContent = Number(lon).toFixed(2);


  //Buscar clima
  const url2 = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`;
  const resposta2 = await fetch(url2);
  const dados2 = await resposta2.json();

  //Mostrar na tela
  tempSpan.textContent = Number(dados2.current_weather.temperature).toFixed(2);
  ventoSpan.textContent = Number(dados2.current_weather.windspeed).toFixed(2);
  direcaoSpan.textContent = Number(dados2.current_weather.winddirection).toFixed(2);
});



//DIÁRIO — SALVAR NOTA
formDiario.addEventListener("submit", (e) => {
  e.preventDefault();

  const notas = JSON.parse(localStorage.getItem("notas")) || [];

  notas.push({
    id: Date.now(),
    data: dataNota.value,
    texto: textoNota.value
  });

  localStorage.setItem("notas", JSON.stringify(notas));

  formDiario.reset();
  carregarNotas();
});



//MOSTRAR NOTAS
function carregarNotas() {
  listaNotas.innerHTML = "";

  const notas = JSON.parse(localStorage.getItem("notas")) || [];

  notas.forEach(nota => {
    const div = document.createElement("div");

  div.innerHTML = `
    <p><strong>${nota.data}</strong></p>
    <p>${nota.texto}</p>
    <button onclick="editarNota(${nota.id})">Editar</button>
    <button onclick="excluirNota(${nota.id})">Excluir</button>
    <hr>
    `;


    listaNotas.appendChild(div);
  });
}

//Notas
function editarNota(id) {
  let notas = JSON.parse(localStorage.getItem("notas")) || [];

  const nota = notas.find(n => n.id === id);
  if (!nota) return;

  dataNota.value = nota.data;
  textoNota.value = nota.texto;

  //Remove nota antiga
  notas = notas.filter(n => n.id !== id);
  localStorage.setItem("notas", JSON.stringify(notas));

  carregarNotas();
}


// EXCLUIR NOTA
function excluirNota(id) {
  let notas = JSON.parse(localStorage.getItem("notas")) || [];
  notas = notas.filter(n => n.id !== id);
  localStorage.setItem("notas", JSON.stringify(notas));
  carregarNotas();
}

carregarNotas();
