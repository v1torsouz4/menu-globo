import "./App.css"
function Centro({posicao, descricao}) {

    return(
      <p className='Centro'>
        <strong>{posicao}</strong>
        <p>{descricao}</p>
        </p>
    );
}


export default Centro