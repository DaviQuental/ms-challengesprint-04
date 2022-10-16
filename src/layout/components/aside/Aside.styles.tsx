import styled from 'styled-components';
import { COLORS } from '../../../common'

export const AsideStyles = styled.aside`
  height: inherit;
  width: 100px;
  border-right: 1px solid ${COLORS.secondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

export const MenuStyles = styled.menu`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const FooterStyles = styled.footer`
  color: white
`  