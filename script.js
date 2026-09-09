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

const teste = {
    primeiro: 10,
    segundo: 'Gabs'
};
const{primeiro, segundo} = teste;
console.log(primeiro, segundo);

// function somar(a, b) {
//     return a + b;
// }
// const somar = (a, b) => {
//     return a + b;
// };

// const somar = (a, b) => a + b;

const lista = [1, 2, 3, 4];
const nova_lista = [...lista, 5, 6, 7];
console.log(nova_lista);

lista.forEach(listinha=> {
    console.log(listinha*2)
})

const person = {
    nome: "João",
    idade:19
}
const person_atualizada = {
    ...person, 
    idade:20
};
console.log(person);

import { calculo } from "./aap.js";
console.log(calculo(5,3));

import somando from "./aap.js";
console.log(somando(5,4));

const buscarUsuario = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Usuário encontrado!");
        }, 2000);
    });
}; //entrega o resultado depois Promise

const mostrarUsuario = async () => {
    const usuario = await buscarUsuario();

    console.log(usuario);
};

mostrarUsuario();

async function buscarDados() {
}

const buscarDados = async () => {
};  