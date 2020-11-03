import styled from 'styled-components';
import { colors } from '../../styles/global';

export const Card = styled.div`
  padding: 1rem;
  background: ${colors.white};
  border: 1px solid ${colors.lightGray};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;
