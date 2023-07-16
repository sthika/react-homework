import React from 'react'

const Card = ({product}) => {
    
  return (
    <div className='main__card'>
        <p className="card__title">{product.title}</p>
        <div className="card__img">
             <img src={product.image} alt="" />
        </div>
    </div>
  )
}

export default Card