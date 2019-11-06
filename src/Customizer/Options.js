import React from 'react'
import slugify from 'slugify'
import Input from './Input'

function Options (props) {
    const options = props.features[props.feature].map((item, index) => {
        const itemHash = slugify(JSON.stringify(item));
        return <Input 
            key={index}
            itemHash={itemHash}
            feature={props.feature}
            item={item}
            dollar={props.dollar}
            state={props.state}
            updateFeature={props.updateFeature}        
        />
      });
    return (
        <fieldset className="feature" key={props.featureHash}>
          <legend className="feature__name">
            <h3>{props.feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
}

export default Options;