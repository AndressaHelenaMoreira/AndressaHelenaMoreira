
const titulo = document.querySelector('.title__bio');

function escrever(elemento){
    const textoArray = elemento.innerHTML.split('')
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(()=>{
            elemento.innerHTML += letra;
        }, 75 * i)
    });
}

escrever(titulo);