let button1 = document.getElementById("BUno");
let button2 = document.getElementById("BDos");
let menu = document.getElementById("menu");
let juego = document.getElementById("j");
let dic = document.getElementById("d");
let list = document.getElementById("myList");

let letrasTocadas = [20];


var c = document.getElementById("micanvas");
var cxt = c.getContext("2d");


/* --------------------------------- */

let palabras = ["HOLA", "CHAU", "MARMOTA"];
let palabraAux;
let palabraParaJugar;
// var mi_array = ["cero", "uno", "dos", "tres", "cuatro"];
init();

function init() {
  modulos(1);
  /*  menu.style.display = "visibility"; // 'none'
   d.style.display = "none"; // 'none' */
}

function agregarPalabra() {
    palabraAux = document.getElementById("input1").value;

    if (palabraAux.indexOf(" ") != -1) {
        alert("Solo esta permitido ingresar de a una palabra");
    } else if (palabras.indexOf(document.getElementById("input1").value) != -1) {
        alert("Error, palabra duplicada");
    } else {
        palabras.push(document.getElementById("input1").value);

        glosario();
    }
    }

function borrar(b) {
  palabras.splice(b, 1);
  //  list.removeChild(list.childNodes[b]);

  glosario();
}

function glosario() {
  modulos(2);
  list.innerHTML = "";

  palabras.forEach((item, index) => {
    let b = document.createElement("button");
    let ul = document.createElement("ul");
    b.setAttribute("class", "botonTres");
    b.innerHTML = "Borrar";

    b.addEventListener("click", function () {
      borrar(index);
    });

    ul.innerText = item;

    list.appendChild(ul);
    ul.appendChild(b);
  });
}

function modulos(modulo) {
  if (modulo == 1) {
    // menu principal
    menu.style.display = "flex"; // 'none'
    d.style.display = "none"; // 'none'
    juego.style.display = "none";
  }
  if (modulo == 2) {
    // agregar palabras}
    menu.style.display = "none"; // 'none'
    d.style.display = "block"; // 'none'
    juego.style.display = "none";
  }
  if (modulo == 3) {
    // entra al juego}
    menu.style.display = "none"; // 'none'
    d.style.display = "none"; // 'none'
    juego.style.display = "block";
    empiezaJuego();
  }
}

button2.onclick = glosario;

// esto es para capturar las teclas precionadas
document.addEventListener("keydown", e =>{
	
  console.log(e);
  /* salida.innerHTML += e.key; + '<br />'; */
  
  letratocada(e.key);

});


function letratocada(key) {

  var ctx = c.getContext("2d");

  cxt.font = "25px bold Roboto, sans-serif";
  console.log(letrasTocadas);

  


  if(!letrasTocadas.includes(key)){

    letrasTocadas[letrasTocadas.length] = key;
    cxt.fillText(key,letrasTocadas.length *20 +((500/3) - (palabraParaJugar.length * 20)) ,280); // Texto contornos

   
  }else{
    console.log("ya usaste esa letra");
  }

 /*  if(palabraParaJugar.includes(key)){
      // agregar arriba
  }else{
    // dibujo al bicho
  } */
   

}


function empiezaJuego(){

  salida.innerHTML ="";
  palabraRandom();
  var ctx = c.getContext("2d");
  ctx.clearRect(0, 0, c.width, c.height);
  let punto_partida = (500/2) - (palabraParaJugar.length * 20);
  ctx.lineWidth = 1;
  let x = punto_partida;
  let y = 250;

   for (var i = 0; i < palabraParaJugar.length; i++){

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x+20, 250);
    ctx.stroke();
    x += 40;
  } 





}

function palabraRandom(){

 

    
    
    console.log(palabras);
    console.log("asd"+ Math.floor(Math.random() * (palabras.length)));
    palabraParaJugar = palabras[ Math.floor(Math.random() * (palabras.length))];
    console.log(palabraParaJugar);
  


}