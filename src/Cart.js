//Will Render the Entire cart
//Parent- App.js
//Child- item.js
//Child- total.js
import React from 'react';
import Item from './Item'
import Total from './Total';

export default function Cart(props){
  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      {props.keys.map((feature,idx)=>
        <Item 
          featureHash={feature + '-' + idx}
          selectedOption={props.selectedOptions[feature]}
          feature={feature}
          idx={idx}
          dollarFormat={props.dollarFormat}
          key={feature}
        />
      )}
      {<Total 
          calculate={props.calculate}
          dollarFormat={props.dollarFormat}
      />}
    </section>
  )
}