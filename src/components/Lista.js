import Item from "./Item";

function List(){
    return(
        <>
            <h1>Lista basica aqui</h1>
            <ul>
                <Item marca="Azul" lancamento={1234}/>
            </ul>
        </>
    )
}

export default List;