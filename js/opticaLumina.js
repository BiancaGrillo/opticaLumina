let tema = document.querySelector('link[href="css/claro.css"]')

let checkbox = document.querySelector('#caja')

function cambiarModo(){
    if (checkbox.checked){ //si la caja está checked, hace esto
        tema.href = 'css/oscuro.css'

    }else{ //sino, (la caja no esta checked), hacé esto otro
        tema.href = 'css/claro.css'
    }
}

//agregar transicion de 0.5s y pasar imagen a png para hacerme la vida mas facil
