//Will be used to render the feature side of the page ('customize your laptop')
//Parent - App.js
//Child - FeatureOptions.js

import React from 'react';
import FeatureOptions from './FeatureOptions';

export default function Features(props){
  return (
    props.featureKeys.map((feature,idx)=>{
      const featureHash = feature + '-' + idx;
      return(
        <FeatureOptions 
          featureHash={featureHash}
          feature={feature}
          idx={idx}
          featuresRoot={props.featuresRoot}
          dollarFormat={props.dollarFormat}
          updatedFeature={props.updateFeature}
          selected={props.selected}
          key={feature}
          updateFeature={props.updateFeature}
        />
      )
    })
  )
}
