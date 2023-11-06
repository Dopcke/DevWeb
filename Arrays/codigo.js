const ingrid = atletas [0];

//window.onload = () => {   
//} (Não é necessário agora por causa do 'defer' no script no html)

const espaco_nome = document.getElementById('nome');
const imagem = document.querySelector('div#container > img');
const descricao = document.querySelector('div#container > p');

const preenche = (atleta) => {
    espaco_nome.innerText = atleta.nome;
    imagem.src = atleta.imagem;
    descricao.innerText = atleta.descricao;
}

preenche(atletas[3]);
