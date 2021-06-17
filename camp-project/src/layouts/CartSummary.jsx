import React from 'react'
import { Dropdown, Label } from "react";
import { useSelector } from 'react-redux';
import { NavLink } from "semantic-ui-react";
import { cartItems } from '../store/initalValues/cartItems';

export default function CartSummary() {
    const { createItems } = useSelectortor(state => state.cart)
    return (
        <Dropdown item text='Sepetiniz'>
            <Dropdown.Menu>
                <Dropdown.Menu>
                    {
                        cartItems.map((cartItem) = (
                            <Dropdown.Item>
                                {cartItem.product.productName}
                            <Label>
                                {cartItem.quantity}
                            </Label>
                            </Dropdown.Item>
                        ))
                    }
                </Dropdown.Menu>
                <Dropdown.Divider></Dropdown.Divider>
                <Dropdown.Item as={NavLink} to="/cart">Sepete Git</Dropdown.Item>
            </Dropdown.Menu >
        </Dropdown>


    )
}
