//renders the item within the cart
//Parent- Cart.js
import React from 'react';


export default function Item(props){
  return (
    <div className="summary__option" key={props.featureHash}>
          <div className="summary__option__label">{props.feature} </div>
          <div className="summary__option__value">{props.selectedOption.name}</div>
          <div className="summary__option__cost">
            {props.dollarFormat.format(props.selectedOption.cost)}
          </div>
        </div>
  )
}