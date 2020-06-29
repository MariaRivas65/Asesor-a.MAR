document.addEventListener ('DOMContentLoaded',inicializacion);
function inicializacion(){
    var cambiarClaseButton = document.getElementById('menuButton');
    cambiarClaseButton.addEventListener('click', cambiaEstilosClase);

    var cambiarLiButton = document.getElementById('menuButton');
    cambiarLiButton.addEventListener('click',cambiaEstilosLi);
}

function cambiaEstilosClase(){
    var elementos = document.getElementsByClassName ('item');
    console.log(elementos);
    console.log(elementos.length);
    console.log(elementos.item (0));
    for(var i = 0; i < elementos.length; i++){
        console.log('item:', elementos.item(i));
        elementos[i].getElementsByClassName.color = '#399';
    }
}
function cambiaEstilosLi() {
    var liElements = document.getElementsByClassName('li');
    console.log (liElements);
    for(var i=0; i < liElements.length; i++){
        console.log('items: ', liElements.item(i));
        liElements.item(i).classList.add('itemgrande');
    }
}

