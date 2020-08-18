import styled from 'styled-components';

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0.2rem;
  width: 100%;
`;
export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0.1rem;
  padding: 0.4rem;
  border-radius: 5px;
  background-color: #f2f2f2;
`;