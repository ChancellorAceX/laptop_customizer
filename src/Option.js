//Will be used to render the individual options for each feature
//Parent- FeatureOptions.js

import React from 'react';
import slugify from 'slugify';

export default function Option(props){
  return (
    <div key={props.itemHash} className="feature__item">
      <input
        type="radio"
        id={props.itemHash}
        className="feature__option"
        name={slugify(props.feature)}
        checked={props.item.name === props.selected[props.feature].name}
        onChange={e => props.updateFeature(props.feature, props.item)}
      />
      <label htmlFor={props.itemHash} className="feature__label">
        {props.item.name} ({props.dollarFormat.format(props.item.cost)})
      </label>
    </div>
  )
}