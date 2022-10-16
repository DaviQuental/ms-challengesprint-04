import styled from 'styled-components';

import { COLORS } from '../../../common'


export const TableComponent = styled.table`
    border-collapse: collapse;
    color: white;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 85vw;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    & th, td {
        padding: 12px 15px;
    }
 `;

 export const TheadComponent = styled.thead`
    min-width: inherit;
    & > tr {
        background-color: #009879;
        color: #ffffff;
        text-align: left;
        font-size: 15px;
    }
 `;

 export const TbodyComponent = styled.tbody`
    & > tr {
        border-bottom: 1px solid #dddddd;
    }

    & > tr:nth-of-type(even) {
        background-color: ${COLORS.secondary};
    }

    & > tr:last-of-type {
        border-bottom: 2px solid #009879;
    }

    & > tr.active-row {
        font-weight: bold;
        color: #009879;
    }
 `;

