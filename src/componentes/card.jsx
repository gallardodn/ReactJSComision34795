const Card = ({nombre, descripcion, precio,stock}) => {
    return (<div className='tarjeta'>
            <span className='tarjeta__nombre'>{nombre}</span>
            <p className='tarjeta__descripcion'>{descripcion}</p>
            <span className='tarjeta__precio'>{precio}</span>
            <span className='tarjeta__stock'>Quedan {stock}</span>
         </div>)
  }

  export default Card;