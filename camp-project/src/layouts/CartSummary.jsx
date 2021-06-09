import React from 'react'
import { Dropdown } from "react-router-dom";
import { NavLink } from "semantic-ui-react";

export default function CartSummary() {
    return (
        <Dropdown item text='Language'>
            <Dropdown.Menu>
                <Dropdown.Item>Acer Leptop</Dropdown.Item>
                <Dropdown.Item>Asus Leptop</Dropdown.Item>
                <Dropdown.Item>Dell Leptop</Dropdown.Item>
                <Dropdown.Divider></Dropdown.Divider>
                <Dropdown.Item as={NavLink} to="/cart"/>   
            </Dropdown.Menu >
        </Dropdown>


    )
}
