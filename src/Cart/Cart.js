import React from 'react'
import SubTotal from './SubTotal'
import FinalTotal from './FinalTotal'

function Cart (props) {
    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <SubTotal
                dollar={props.dollar}
                selected={props.selected}
            />
            <FinalTotal
                dollar={props.dollar}
                selected={props.selected}
            />
        </section>
    )
}

export default Cart