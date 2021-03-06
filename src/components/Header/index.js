import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './styles';

import Logo from '../../assets/images/logo.png';

function Header() {
    return (
        <Container>
            <Link to="/">
                <img src={Logo} alt="Logo" />
            </Link>

            <Cart to="cart">
                <div>
                    <strong>Meu carrinho</strong>
                    <span>3 items</span>
                </div>

                <MdShoppingBasket size={34} color="#FFFF" />
            </Cart>
        </Container>
    );
}

export default Header;
