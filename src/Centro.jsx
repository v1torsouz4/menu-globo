import "./Centro.css"
function Centro({posicao, descricao}) {

    return(
      <div className='centro'>
        <p className="posicao">{posicao}</p>
        <h5 className="subtitulo">{descricao}</h5>
        </div>
    );
}


export default Centro