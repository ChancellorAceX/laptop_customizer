//calculates and renders the total within the cart
//Parent Cart.js
import React from 'react';
import './Total.css'

export default function Total(props) {
  return (
    <div className="summary__total">
      <div className="summary__total__label">Total</div>
      <div className="summary__total__value">
        {props.dollarFormat.format(props.calculate())}
      </div>
    </div>
  )
}



