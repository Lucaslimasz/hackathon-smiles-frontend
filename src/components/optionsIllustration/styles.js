import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  margin: auto;
`;

export const Span = styled.View`
  width: 12px;
  height: 12px;
  background: ${props => props.active ? '#FF5A00' : '#C4C4C4'};

  margin: 0 5px;
  border-radius: 24px;
`;
