import styled from 'styled-components';

export const CastList = styled.ul`
  list-style: none;
  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 32px;
  grid-template-columns: repeat(4, 1fr);
`;
