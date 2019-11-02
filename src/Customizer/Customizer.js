import React from 'react'
import Options from './Options'

function Customizer (props) {
    const features = Object.keys(props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
            return (
                <Options 
                    key={featureHash}
                    feature={feature}
                    features={props.features}
                    dollar={props.dollar}
                    state={props.state}
                    updateFeature={props.updateFeature}
                />
            )
      });
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
        </form>
    )
}

export default Customizer;