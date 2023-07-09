const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        };

        RemoverSelecaoDoPersonagem();
        personagem.classList.add('selecionado');

        alterarImagemDoPersonagemSelecionado(personagem);  

        alterarNomeDoPersonagemSelecionado(personagem);

        alterarDescricaoDoPersonagemSelecionado(personagem);
    });
});
function alterarDescricaoDoPersonagemSelecionado(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
};

function alterarNomeDoPersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
};

function alterarImagemDoPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
};

function RemoverSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
};

