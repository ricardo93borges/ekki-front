/* eslint-disable no-unused-vars */
import React from "react";
import { Title, Menu, MenuItem, MenuLink } from "./style";

function Header(props) {
    return (
        <section className="row">
            <div className='column' style={{ padding: 0 }}>
                <Title className='float-left'>EKKI</Title>
                <Menu className='float-right'>
                    <MenuItem>
                        <MenuLink>Ricardo Borges</MenuLink>
                    </MenuItem>
                </Menu>
            </div>
        </section>
    );
}

export default Header;
