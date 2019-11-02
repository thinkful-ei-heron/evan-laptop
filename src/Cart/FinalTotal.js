import React from 'react'

function FinalTotal (props) {
    const total = Object.keys(props.selected).reduce(
        (acc, curr) => acc + props.selected[curr].cost,
        0
      );
    return (
        <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {props.dollar.format(total)}
              </div>
        </div>
    )
}

export default FinalTotal;