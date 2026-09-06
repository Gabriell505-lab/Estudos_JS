console.log('Hello Word, do arquivo externo!');
alert('bem vindo, ao meu site!')

let resultado = 10%3;
console.log(resultado);

function salve(a,b){
    return a+b;
}

let conta =salve(10,20);
console.log(conta);
    
const frutas = ["Maça", "Pera", "Banana"]

console.log(frutas[0]);
console.log(frutas.length);

const numeros = [1, 2, 3, 4, 5];

const dobrados = numeros.map(numero => numero * 2);
console.log (numeros.filter(numero => numero> 3));

console.log(dobrados); 

const pessoa = {
    nome: "Gabriell",
    idade: 19,
    curso: "engenharia de software"
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa['curso']);