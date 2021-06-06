import React from 'react'
import CartSummary from './CartSummary'
import Categories from './Categories'
import ProductList from '../pages/ProductList'
import Navi from './Navi'


export default function Dashboard() {
    return (
        <div>
            <Categories/>
            <ProductList/>
        </div>
    )
}
