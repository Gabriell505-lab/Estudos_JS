function App() {
    return <div className="card">
    <h1>Produto</h1>
    <h1>'Olá mundo'</h1>
</div>
    

};
export default App;

function Site() {
    const nome = "Gabriell";
    <div><Usuario nome = "Gabs" />;</div>

    return (
        <h1>Óla, {nome}!</h1>
    );
}

function Usuario({ nome }) {
    return <h2>Olá, {nome}</h2>;
}

console.log(Usuario);