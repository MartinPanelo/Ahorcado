let button1 = document.getElementById("BUno");
let button2 = document.getElementById("BDos");
let menu = document.getElementById("menu");
let dic = document.getElementById("d");
let list = document.getElementById("myList");
/* --------------------------------- */

let palabras = ["HOLA", "CHAU", "MARMOTA"];

init();


function init(){

   menu.style.display = 'visibility'; // 'none'
    d.style.display = 'none'; // 'none'
}



function glosario(){
    menu.style.display = 'none'; // 'none'
    d.style.display = 'flex'; // 'none'
 

    palabras.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
      });
}








button2.onclick = glosario;