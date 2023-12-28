const $ = id => document.getElementById(id)
window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    

const elementsForm = $('formAdd').elements

const showInfo = (id, msg) => {
    $(id).innerHTML = msg;
    $(id).classList.toggle('alert-info')
}

$('title').addEventListener('focus', function() {
    showInfo('msg-title','Escriba el titulo de la peli')
})
$('title').addEventListener('blur', function() {
    showInfo('msg-title',null)
})

$('rating').addEventListener('focus', function() {
    showInfo('msg-rating','Indicar un valor entre 0 y 10')
})
$('rating').addEventListener('blur', function() {
    showInfo('msg-rating',null)
})


$('formAdd').addEventListener('submit', function (event) {
    event.preventDefault();
    const errors = []

    for(let i= 0; i< elementsForm.length; i++) {
        if(!elementsForm[i].value) {
            errors.push(`El campo ${elementsForm[i].name} no puede estar vacio`)
        }
    }
    if (errors.length) {

        errors.forEach(error => {
            $('box-errors').innerHTML += `<li>${error}</li>`
        })

        
    }else {
        this.onsubmit()
    }
})


}