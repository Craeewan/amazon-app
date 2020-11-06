import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'


function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
        <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad"/>
            <h1 className="checkout__title">
                shopping basket
            </h1>
            </div>
            <div className="checkout__right">
                <Subtotal/>
                <h2>the subtotal will go here</h2>
            </div>
        </div>
    )
}

export default Checkout
