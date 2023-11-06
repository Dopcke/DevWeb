var primeira = 12;
let segunda = "casa";
const terceira = ["casa", "banana", 2];
let quarta;

console.log(++primeira + ": primeira");
console.log(segunda + ": Segunda");
segunda += " amarela";
console.log(segunda + ": Segunda");
console.log(quarta + ": A variavel começa com esse valor");
console.log(terceira);
//rceira = 65;
//sole.log(terceira);

terceira[15] = "15";
console.log("terceira[10]" + terceira[10]);
console.log("tamanho: " + terceira.lenght);

quarta = {
  primeira: 1,
  segunda: "tudo"
};

console.log("quarta: " + quarta);
console.log("quarta.primeira: " + quarta.primeira);

quarta.terceira = "nada";

console.log("quarta.terceira: " + quarta.terceira);

function minha_funcao(entrada){
  return entrada + 2;
}

console.log(minha_funcao(5));
console.log(minha_funcao("1"));

const minha_outra_funcao = function (entrada){
  return entrada + 3;
}

console.log(minha_outra_funcao(5));
console.log(minha_outra_funcao("1"));

const setinha = (entrada) => {
  return entrada + 4;
}

console.log(setinha(5));
console.log(setinha(1));

const contra_setinha = (entrada) => entrada + 5;

console.log(contra_setinha(1));
console.log(contra_setinha("1"));