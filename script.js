let button1 = document.getElementById("BUno");
let button2 = document.getElementById("BDos");
let menu = document.getElementById("menu");
let dic = document.getElementById("d");
let list = document.getElementById("myList");
/* --------------------------------- */

let palabras = ['HOLA', 'CHAU', 'MARMOTA'];
var mi_array = ['cero', 'uno', 'dos', 'tres', 'cuatro'];
init();


function init(){

   menu.style.display = 'visibility'; // 'none'
    d.style.display = 'none'; // 'none'
}

function borrar(b){

    palabras.splice(b,b+1);
   

   
   list.removeChild(list.childNodes[b]);
    
}

function glosario(){
    menu.style.display = 'none'; // 'none'
    d.style.display = 'flex'; // 'none'
 

    palabras.forEach((item,index) => {

        let b = document.createElement("button");
      
        b.innerHTML = "Borrar";
       
        b.addEventListener("click", function () {
            borrar(index);
          });

        let ul = document.createElement("ul");
        
        ul.innerText = item;
        list.appendChild(ul);
        ul.appendChild(b);
      });
    
}






button2.onclick = glosario;