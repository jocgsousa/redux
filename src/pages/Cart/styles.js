import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    padding: 30px;
    border-radius: 4px;
    background: #fff;

    footer {
        display: flex;
        margin-top: 30px;
        justify-content: space-between;
        align-items: center;

        button {
            background: #7159c1;
            border-radius: 4px;
            color: #fff;
            border: 0;
            padding: 12px 20px;
            font-weight: bold;
            text-transform: uppercase;
            transition-duration: opacity 2s;
            &:hover {
                background: ${darken(0.03, '#7159c1')};
            }
        }
    }
`;

export const ProductTable = styled.table`
    width: 100%;

    thead th {
        color: #999;
        text-align: left;
        padding: 12px;
    }

    tbody td {
        padding: 12px;
        border-bottom: 1px solid #eeee;
    }

    img {
        height: 100px;
    }

    strong {
        display: block;
        color: #333;
    }

    span {
        display: block;
        font-size: 18px;
        margin-top: 5px;
        font-weight: bold;
    }

    div {
        display: flex;
        align-items: center;

        input {
            border: 1px solid #eee;
            align-items: center;
            text-align: center;
            color: #667;
            padding: 6px;
            width: 50px;
        }
        button {
            background: none;
            border: 0;
            padding: 6px;
        }
    }
`;

export const Total = styled.strong`
    display: flex;
    align-items: baseline;

    span {
        color: #999;
        font-weight: bold;
    }

    strong {
        font-size: 28px;
        margin-left: 4px;
    }
`;
