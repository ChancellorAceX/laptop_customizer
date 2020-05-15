//Will be used to render a feature section.
//Parent - Features.js
//Child - Option.js
import React from 'react';
import Option from './Option';
import slugify from 'slugify';

export default function FeatureOptions(props){
  return(
    <fieldset className="feature" key={props.featureHash}>
      <legend className="feature__name">
        <h3>{props.feature}</h3>
      </legend>
      {props.featuresRoot[props.feature].map(item => {
        const itemHash=slugify(JSON.stringify(item));
        return (
          <Option 
            key={`${props.feature}-${itemHash}`}
            item={item}
            updateFeature={props.updateFeature}
            featureKeys={props.featureKeys}
            featuresRoot={props.featuresRoot}
            selected={props.selected}
            featureHash={props.featureHash}
            feature={props.feature}
            idx={props.idx}
            itemHash={itemHash}
            dollarFormat={props.dollarFormat}
          />
        )
      })}
    </fieldset>
  )
}

/*
  updateFeature={this.updateFeature}
  featureKeys={Object.keys(this.props.features)}
  featuresRoot={this.props.features}
  selected={this.state.selected}
*/
/*
  featureHash={featureHash}
  feature={feature}
  idx={idx}
*/


/*
features=>    const features = featureKeys.map((feature, idx) => {
      const featureHash = feature + '-' + idx;
options=>      const options = featuresRoot[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === props.selected[feature].name}
              onChange={e => props.updateFeature(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
          </div>
        );
      });

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });
    */