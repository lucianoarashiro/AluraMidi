function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else{
        console.log('Elemento não é do tipo audio.');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let index = 0; index < listaDeTeclas.length; index++) {

    const tecla = listaDeTeclas[index];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; // Template String
    
    listaDeTeclas[index].onclick = function () { // Função anônima
        tocaSom(idAudio);
    };

    tecla.onkeydown = function (evento) {
        console.log(evento.code);
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    };

    tecla.onkeyup = function () {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.remove('ativa');
        }
    };
    
}