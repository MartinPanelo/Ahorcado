let button1 = document.getElementById("BUno");
let button2 = document.getElementById("BDos");
let menu = document.getElementById("menu");
let dic = document.getElementById("d");
let list = document.getElementById("myList");

/* --------------------------------- */

let palabras = ["HOLA", "CHAU", "MARMOTA"];
// var mi_array = ["cero", "uno", "dos", "tres", "cuatro"];
init();

function init() {

  modulos(1);
 /*  menu.style.display = "visibility"; // 'none'
  d.style.display = "none"; // 'none' */
}

function agregarPalabra(){

  
  
  palabras.push(document.getElementById("input1").value);

 glosario();
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
    b.setAttribute("class","botonTres");
    b.innerHTML = "Borrar";

    b.addEventListener("click", function () {
      borrar(index);
    });

    ul.innerText = item;

    list.appendChild(ul);
    ul.appendChild(b);
    
  });
}

function modulos(modulo){

  if(modulo == 1){ // menu principal
    menu.style.display = "flex"; // 'none'
    d.style.display = "none"; // 'none'
  }
  if(modulo == 2){ // agregar palabras}
    menu.style.display = "none"; // 'none'
    d.style.display = "block"; // 'none'
  }
}


button2.onclick = glosario;
