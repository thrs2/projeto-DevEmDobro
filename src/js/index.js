// 1- função dos botões
const botoesCarrosel = document.querySelectorAll(".botao");
const imagens =document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll (".informacoes"); 

//2- idententificaçao de clique do botão pelo usuário
botoesCarrosel.forEach((botao, indice) => { 
    botao.addEventListener("click", () => {
        //3-desmarca o botão
        desativar_botao_selecionado();

        //4-marca o botão clicado como se fosse selecionado
        marca_botao_selecionado(botao);

        //5-esconder a imagem anterior selecionada
        esconder_imagem_ativa();

        //6-fazer aparecer a imagem da imagem do botão correspontende
        mostrar_imagem_de_fundo(indice);

        //7-esconder  a informação do dragão anterior
        esconder_informacoes_ativas();

        //8-mostra o dragão referente ao texto do botão clicado
        mostrar_informacpes(indice);

    });
});

function marca_botao_selecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrar_informacpes(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconder_informacoes_ativas() {
    const informacoesAtivas = document.querySelector(".informacoes.ativa");
    informacoesAtivas.classList.remove("ativa");
}

function mostrar_imagem_de_fundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconder_imagem_ativa() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativar_botao_selecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
