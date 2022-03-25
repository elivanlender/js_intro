const solution = document.getElementById('solution')
const squareButton = document.getElementById('square-button')
const halfButton = document.getElementById('half-button')
const percentButton = document.getElementById('percent-button')
const areaButton = document.getElementById('area-button')

function cuadrado(){
    const cuadNum = parseInt(document.getElementById('square').value)     
    const rCuadNum = cuadNum * cuadNum   
    solution.innerHTML = `<strong>El cuadrado de</strong> ${cuadNum} <strong>es:</strong> ${rCuadNum}`
}

function mitad(){
    const mitadNum = parseInt(document.getElementById('half').value)
    const rMitadNum = mitadNum/2
    solution.innerHTML = `<strong>La mitad de</strong> ${mitadNum} <strong>es:</strong> ${rMitadNum}`
}

function porcentaje(){
    const porcent = parseInt(document.getElementById('percentage').value)
    const porNum = parseInt(document.getElementById('entireValue').value)
    const rPorcent = (porcent/100)(porNum)
    solution.innerHTML = `<strong>El</strong>${porcent}<strong>% de</strong> ${porNum} <strong>es:</strong> ${rPorcent}`
}

squareButton.addEventListener('click', cuadrado)
halfButton.addEventListener('click', mitad)
percentButton.addEventListener('click', porcentaje)