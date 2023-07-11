function Form () {

    function cadastrarAlgo(e){
        e.preventDefault() //para a execução do html
        console.log("cadastrou algo")
    }
    return (
        <div>
            <h1>Um form qualquer</h1>
            <form onSubmit={cadastrarAlgo}>
                <div>
                    <input type="text" placeholder="Namae"/>    
                </div>
                <div>
                    <input type="submit" value="GO!"/>
                </div>
            </form>
        </div>
    )
}

export default Form;