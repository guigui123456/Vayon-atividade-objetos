
const jogador = {
  nome: "Pedro",
  idade: 19,
  posicao: "Zagueiro",
  clube: "Atletico Mineiro",
  numero: 4,
  nacionalidade: "Brasileiro"
};

// ATIVIDADE 1
// Verificar se a propriedade nome existe dentro do objeto

console.log(Object.hasOwn(jogador, "nome"));


// ATIVIDADE 2
// Listar todas as chaves do objeto usando um método próprio

console.log(Object.keys(jogador));


// ATIVIDADE 3
// Iterar sobre as propriedades do objeto e imprimir chave e valor

for (let prop in jogador) {
  console.log(prop, jogador[prop]);
}


// ATIVIDADE 4
// Criar um array de objetos usuarios e acessar o nome do segundo usuário

const usuarios = [
  { nome: "Lucas", idade: 20 },
  { nome: "Gabriel", idade: 23 },
  { nome: "João", idade: 25 }
];

console.log(usuarios[1].nome);


// ATIVIDADE 5
// Clonar um objeto usando Object.assign ou spread (...)

const copiaJogador = { ...jogador };
console.log(copiaJogador);


// ATIVIDADE 6
// Filtrar usuários com idade acima de 18

const maioresDeIdade = usuarios.filter(usuario => usuario.idade >= 18);
console.log(maioresDeIdade);


// ATIVIDADE 7
// Contar quantas vezes cada cor aparece

const dados = [
  "azul",
  "vermelho",
  "azul",
  "verde",
  "vermelho",
  "azul"
];

const contagemCores = dados.reduce((acumulador, cor) => {
  acumulador[cor] = (acumulador[cor] || 0) + 1;
  return acumulador;
}, {});

console.log(contagemCores);


// ATIVIDADE 8
// Converter um array de objetos em um objeto indexado por ID

const produtos = [
  { id: 1, nome: "Mouse" },
  { id: 2, nome: "Teclado" },
  { id: 3, nome: "Monitor" }
];

const produtosPorId = produtos.reduce((acumulador, produto) => {
  acumulador[produto.id] = produto;
  return acumulador;
}, {});

console.log(produtosPorId);


// ATIVIDADE 9
// Mesclar dois objetos com sobreposição de propriedades

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 20, d: 4 };

const resultado = { ...obj1, ...obj2 };

console.log(resultado);


// ATIVIDADE 10
// Remover chaves com valores null ou undefined

const dadosAtividade10 = {
  nome: "Carlos",
  idade: null,
  email: "carlos@email.com",
  telefone: undefined
};

const dadosLimpos = Object.fromEntries(
  Object.entries(dadosAtividade10).filter(
    ([chave, valor]) => valor !== null && valor !== undefined
  )
);

console.log(dadosLimpos);
