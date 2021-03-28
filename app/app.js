'use-strict';

let textApp = document.getElementById('app-id');
let setTextApp = document.getElementById('show-text-result');
let btnTextApp = document.getElementById('btn-get-text');

btnTextApp.addEventListener('click', function () {
    setTextApp.innerText = textApp.innerText;
});

let btnChangeText = document.getElementById('btn-change-text');
let appClass = document.querySelector('.app-class');

btnChangeText.addEventListener('click', function () {
    appClass.innerText = "Hola, me cambiaron el texto por otro, desde un evento click";
})

let inputValue = document.querySelector('.box-input');
let btnGetValue = document.getElementById('btn-get-value');
let showValue = document.getElementById('show-value');

btnGetValue.addEventListener('click', function () {
    showValue.innerText = inputValue.value;
});

let estoEsUnString = "este es su contenido";
let estoEsUnStringSimple = 'Simple';
let estoEsUnStringGrave = `Tener texto y tener ${estoEsUnString}`;
let esteEsUnNumero = 10;
let estoEsUnArray = [];
let estoEsUnBooleano = true;
let estoEsUnObjetoKeyValue = {
    key: "value"
}

var miVar = "otra cosa";
const MI_VAR = "valor_fijo";

console.log(this);

function primeraClase() {
    console.log(this);
    this.metodoClase = function(){
        console.log(this);
    }
}

let obj = new primeraClase();
obj.metodoClase();

let funcionVariable = function () {

}

let objetosLiterales = {
    propiedades: 10,
    cadena: "hola",
    listade: ["hola", "mundo"],

    metodos: function () {
        console.log(this);
    },

    metodoDos: function () {
        console.log(this.metodos());
    }

}

objetosLiterales.metodos();
objetosLiterales.metodoDos();

class MiClase {
    miMetodo(){
        console.log(this);
    }
}

let objMiClase = new MiClase();
objMiClase.miMetodo();

