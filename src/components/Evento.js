function Evento () {
    function meuEvento(){
        console.log("Fui ativado")
    }
    
    return (
        <div>
            <p> Click para disparar o evento</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento