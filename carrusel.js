function siguiente(){
    var carrusel = document.getElementById('carrusel');

    var img1 = document.querySelector('.img1');
    var img2 = document.querySelector('.img2');
    var img3 = document.querySelector('.img3');

    if(img1 != null){
        carrusel.classList.add('img2');
        carrusel.classList.remove('img1');
        document.getElementById('unidad').innerHTML = 'Unidad de Negocios Industrial';
    }else if(img2 != null){
        carrusel.classList.add('img3');
        carrusel.classList.remove('img2');
        document.getElementById('unidad').innerHTML = 'Unidad de Negocios Arrendamiento';
    }else if(img3 != null){
        carrusel.classList.add('img1');
        carrusel.classList.remove('img3');
        document.getElementById('unidad').innerHTML = 'Unidad de Negocios HVAC';
    }    
}

function anterior(){
    var carrusel = document.getElementById('carrusel');

    var img1 = document.querySelector('.img1');
    var img2 = document.querySelector('.img2');
    var img3 = document.querySelector('.img3');

    if(img1 != null){
        carrusel.classList.add('img3');
        carrusel.classList.remove('img1');
        document.getElementById('unidad').innerHTML = 'Unidad de Negocios Arrendamiento';
    }else if(img2 != null){
        carrusel.classList.add('img1');
        carrusel.classList.remove('img2');
        document.getElementById('unidad').innerHTML = 'Unidad de Negocios HVAC';
    }else if(img3 != null){
        carrusel.classList.add('img2');
        carrusel.classList.remove('img3');
        document.getElementById('unidad').innerHTML = 'Unidad de Negocios Industrial';
    }
}

function img1(){
    var carrusel = document.getElementById('carrusel');
    var circ = document.getElementById('img1');

    carrusel.classList.add('img1');
    carrusel.classList.remove('img2');
    carrusel.classList.remove('img3');
    circ.classList.add('act');
    document.getElementById('img2').classList.remove('act');
    document.getElementById('img3').classList.remove('act');
}

function img2(){
    var carrusel = document.getElementById('carrusel');
    var circ = document.getElementById('img2');

    carrusel.classList.add('img2');
    carrusel.classList.remove('img1');
    carrusel.classList.remove('img3');
    circ.classList.add('act');
    document.getElementById('img1').classList.remove('act');
    document.getElementById('img3').classList.remove('act');
}

function img3(){
    var carrusel = document.getElementById('carrusel');
    var circ = document.getElementById('img3');

    carrusel.classList.add('img3');
    carrusel.classList.remove('img2');
    carrusel.classList.remove('img1');
    circ.classList.add('act');
    document.getElementById('img2').classList.remove('act');
    document.getElementById('img1').classList.remove('act');
}