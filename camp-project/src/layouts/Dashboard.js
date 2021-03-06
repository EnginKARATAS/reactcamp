import React from 'react'
import CartSummary from './CartSummary'
import Categories from './Categories'
import ProductList from '../pages/ProductList'
import Navi from './Navi'
import { Grid } from 'semantic-ui-react'
import CartDetail from '../pages/CartDetail'


export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Route exact path="/" component={ProductList}/>
                        <Route exact path="/products" component={ProductList}/>
                        <Route exact path="/products/:name" component={ProductDetail}/>
                        <Route exact path="/cart" component={CartDetail}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
