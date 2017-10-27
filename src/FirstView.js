import React, { Component } from 'react';
import {addCart} from './actions'

const Product = ({item,index}) => {
    return(

            <div  className='col-lg-10 col-md-10 col-xs-10 ha-products'>
                <div className="ha-img">
                    <img src={item.img}/>
                    <div className="ha-arrow"><img src="arrow-right.png"/></div>
                </div>
                <strong>{item.name}</strong>
                <span className='ha-price'><span>$</span><span >{item.price}</span></span>
                <button className='ha-btn'onClick={ () => addCart(index)}>+ Add to cart</button>
                
            </div>

    )

}

 const FirstView = ({food}) => {
    return(
        <div className="container">
                    <div className="ha-ubication">
      {
        food.map((item,index)=>{
          return <Product key ={index} item={item} index={index}/>
        })
      }
              </div>
  </div>
    )
}
export default FirstView;