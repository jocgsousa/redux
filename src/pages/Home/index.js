import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

function Home() {
    return (
        <ProductList>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom2.jpg?ts=1603743003&ims=326x"
                    alt="Tênis"
                />
                <strong>Tênis muito legal</strong>
                <span>R$129,90</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFFF" />3
                    </div>
                    <span>Adicionar ao carrinho</span>
                </button>
            </li>

            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom2.jpg?ts=1603743003&ims=326x"
                    alt="Tênis"
                />
                <strong>Tênis muito legal</strong>
                <span>R$129,90</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFFF" />3
                    </div>
                    <span>Adicionar ao carrinho</span>
                </button>
            </li>

            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom2.jpg?ts=1603743003&ims=326x"
                    alt="Tênis"
                />
                <strong>Tênis muito legal</strong>
                <span>R$129,90</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFFF" />3
                    </div>
                    <span>Adicionar ao carrinho</span>
                </button>
            </li>

            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom2.jpg?ts=1603743003&ims=326x"
                    alt="Tênis"
                />
                <strong>Tênis muito legal</strong>
                <span>R$129,90</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFFF" />3
                    </div>
                    <span>Adicionar ao carrinho</span>
                </button>
            </li>

            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom2.jpg?ts=1603743003&ims=326x"
                    alt="Tênis"
                />
                <strong>Tênis muito legal</strong>
                <span>R$129,90</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFFF" />3
                    </div>
                    <span>Adicionar ao carrinho</span>
                </button>
            </li>

            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom2.jpg?ts=1603743003&ims=326x"
                    alt="Tênis"
                />
                <strong>Tênis muito legal</strong>
                <span>R$129,90</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFFF" /> 3
                    </div>
                    <span>Adicionar ao carrinho</span>
                </button>
            </li>
        </ProductList>
    );
}

export default Home;
