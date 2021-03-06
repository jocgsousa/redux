import React from 'react';
import {
    MdAddCircleOutline,
    MdRemoveCircleOutline,
    MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';

export default function Cart() {
    return (
        <Container>
            <ProductTable>
                <thead>
                    <th />
                    <th>PRODUTO</th>
                    <th>QDT</th>
                    <th>SUBTOTAL</th>
                    <th />
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img
                                src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom2.jpg?ts=1603743003&ims=326x"
                                alt="Tênis"
                            />
                        </td>
                        <td>
                            <strong> Tênis muito massa</strong>
                            <span>R$ 129,90</span>
                        </td>

                        <td>
                            <div>
                                <button type="button">
                                    <MdRemoveCircleOutline
                                        size={20}
                                        color="#7159c1"
                                    />
                                </button>
                                <input type="number" readOnly value={2} />
                                <button type="button">
                                    <MdAddCircleOutline
                                        size={20}
                                        color="#7159c1"
                                    />
                                </button>
                            </div>
                        </td>
                        <td>
                            <strong>R$259,80</strong>
                        </td>

                        <td>
                            <div>
                                <button type="button">
                                    <MdDelete size={20} color="#7159c1" />
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </ProductTable>
            <footer>
                <button type="button">Finalizar pedido</button>
                <Total>
                    <span>TOTAL</span>
                    <strong>R$1020,90</strong>
                </Total>
            </footer>
        </Container>
    );
}
