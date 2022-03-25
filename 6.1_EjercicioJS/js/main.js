const story = document.getElementById('story')
const actionButton = document.getElementById('lib-button')

function juntarCadena(){
    let name = document.getElementById ('person').value
    let verbo = document.getElementById ('verb').value
    let comple = document.getElementById ('complement').value

    const Cadena = `${name} ${verbo} ${comple}`
    //story.textContent = Cadena
    story.innerHTML = `<strong>La frase es:</strong> ${Cadena}`
}

actionButton.addEventListener('click', juntarCadena)
 
