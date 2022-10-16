import styled from "styled-components";
import { COLORS } from '../../../common';

export const TitleComponent = styled.h1`
    display: block;
    width: 100%;
    text-align: left;
    font-size: 25px;
    color: #FFFFFF;
    border-bottom: 1px solid ${COLORS.secondary};
    padding: 50px 0 2px 10px;
    box-sizing: border-box;
`;