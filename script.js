let button1 = document.getElementById("BUno");
let button2 = document.getElementById("BDos");
let menu = document.getElementById("menu");
let juego = document.getElementById("j");
let dic = document.getElementById("d");
let list = document.getElementById("myList");

let letrasTocadas = [20];
let letrasAcertadas = 0;
let vidas = 10;


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
    palabraAux = palabraAux.toUpperCase();
    if (palabraAux.indexOf(" ") != -1) {
        alert("Solo esta permitido ingresar de a una palabra");
    } else if (palabras.indexOf(document.getElementById("input1").value) != -1) {
        alert("Error, palabra duplicada");
    } else {
        palabras.push(palabraAux);

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
  console.log(e.key.toUpperCase());
 // if(e.key !== "Shift" && e.key !== "Control" && e.key !== "Alt" && e.key !== "CapsLock"&& e.key !== "Meta"){
  if(e.keyCode > 64 && e.keyCode < 90 || e.keyCode > 97 && e.keyCode < 122){
 letratocada(e.key.toUpperCase());
  }
 

});


function letratocada(key) {

  var ctx = c.getContext("2d");

  cxt.font = "25px bold Roboto, sans-serif";
  console.log(letrasTocadas);

  let unavida = true;
  


  if(!letrasTocadas.includes(key)){

    letrasTocadas[letrasTocadas.length] = key;
    cxt.fillText(key,letrasTocadas.length *20 +((500/3) - (palabraParaJugar.length * 20)) ,280); // Texto contornos

    console.log(palabraParaJugar.search(key) == -1);
     for(var i = 0; i < palabraParaJugar.length ; i++){ 

     
      if(palabraParaJugar[i] === key){
        cxt.fillText(key,(500/2) - (palabraParaJugar.length * 20)+(i*40) ,245); // Texto contornos
        letrasAcertadas += 1;
        unavida = false;
        console.log("letrasAcertadas"+letrasAcertadas);
        console.log(" palabraParaJugar.length"+ palabraParaJugar.length);
        
      }else{
        cxt.fillText(" ",(500/2) - (palabraParaJugar.length * 20)+(i*40) ,245); // Texto contornos
        
        
        
        
      
      }

    }
    if(unavida){
      vidas -= 1;
  // dibujo al bicho
     if(vidas == 9){
      ctx.beginPath();
      ctx.moveTo(50, 200);
      ctx.lineTo(150, 200);
      ctx.stroke();
     }
     if(vidas == 8){
      ctx.beginPath();
      ctx.moveTo(100, 200);
      ctx.lineTo(100, 50);
      ctx.stroke();
     }
     if(vidas == 7){
      ctx.beginPath();
      ctx.moveTo(100, 50);
      ctx.lineTo(200, 50);
      ctx.stroke();
     }
     if(vidas == 6){
      ctx.beginPath();

     /*  ctx.arc(200, 70, 20, 0, 90); */
      ctx.moveTo(200, 50);
      ctx.lineTo(200, 70);
      ctx.stroke();
     }
     if(vidas == 5){
      ctx.beginPath();
      ctx.arc(200, 90, 20, 0, 90);
      ctx.stroke();
     }
     if(vidas == 4){
      ctx.beginPath();
      ctx.moveTo(200, 110);
      ctx.lineTo(200, 170);
      ctx.stroke();
     }
     if(vidas == 3){
      ctx.beginPath();
      ctx.moveTo(200, 110);
      ctx.lineTo(220, 130);
      ctx.stroke();
     }
     if(vidas == 2){
      ctx.beginPath();
      ctx.moveTo(200, 110);
      ctx.lineTo(180, 130);
      ctx.stroke();
     }
     if(vidas == 1){
      ctx.beginPath();
      ctx.moveTo(200, 170);
      ctx.lineTo(220, 190);
      ctx.stroke();
     }
     if(vidas == 0){
      ctx.beginPath();
      ctx.moveTo(200, 170);
      ctx.lineTo(180, 190);
      ctx.stroke();
      alert("PERDISTE");
      /* empiezaJuego(); */
     }
    
     
      console.log(unavida);
      console.log("vidas"+vidas);
    }
    if(letrasAcertadas == palabraParaJugar.length){
      alert("GANASTE");
      console.log("GANASTE");
    }
    
  }else{
    console.log("ya usaste esa letra");
  }

 
   

}


function empiezaJuego(){

  letrasAcertadas = 0;
  vidas = 10;
  letrasTocadas = [];
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