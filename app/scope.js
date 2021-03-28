'use-strict';

import server from './server';

(function () {
    let x = "otra cosa";
    let entroEnFuncion = false;

    if (true) {
        x = "hola mundo";
    }

    if (x === "otra cosa")
        x = "sigue siendo otra cosa";
    else
        x = "pero ahora es otra";

    for (let i = 0; i < 5; i++) {
        if (x === "pero ahora es otra") {
            x = "si, total lo es " + i;
            cambiaX();
        }
    }

    function cambiaX() {
        if (x === "si, total lo es 0") {
            x = "entre en una funcion";
            entroEnFuncion = true;
        }

        return x;
    }

    if (entroEnFuncion) {
        x = cambiaX();
        console.log(x);
    }
    else
        console.log(x);
})();