'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')





function trocarCor () {
    forma1.classList.toggle('amarelo')
}

function trocarForma() {
    forma2.classList.toggle('circulo')
}

function trocarCor2 () {
    forma3.classList.toggle('rosa')
}

function imagem() {
    forma4.classList.toggle('imagem')
}

function mensagem(){
    alert('Ola')
}

function girar() {
    forma6.classList.toggle('giro')
}

function sumir() {
    forma7.classList.toggle('sumir')
}

forma1.addEventListener('click', trocarCor)
forma2.addEventListener('click', trocarForma)
forma3.addEventListener('click', trocarCor2)
forma4.addEventListener('click', imagem)
forma5.addEventListener('click', mensagem)
forma6.addEventListener('click', girar)
forma7.addEventListener('click', sumir)




