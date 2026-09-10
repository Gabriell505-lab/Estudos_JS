function App() {
    return <div className="card">
    <h1>Produto</h1>
    <h1>'Olá mundo'</h1>
</div>
    

};
export default App;

function Site() {
    const nome = "Gabriell";
    <div>
        <Usuario nome = "Gabs" />;
        </div>

    return (
        <h1>Óla, {nome}!</h1>
    );
}

function Usuario({ nome }) {
    return <h2>Olá, {nome}</h2>;
}

console.log(Usuario);

import { useState } from "react";


function teste() {
    const [contador, setContador] = useState(0);

    return (
        <div>
            <h1>{contador}</h1>

            <button onClick={() => setContador(contador + 1)}>
                Aumentar
            </button>
        </div>
    );
}

const buscarUsuario = async() => {
    const resposta = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    const Usuario = await resposta.json();
    console.log(Usuario);
}