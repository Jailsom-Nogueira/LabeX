import styled from 'styled-components';

export const DetailsContainer = styled.div`
  width: 50vw;
  margin: 0 auto;
  ul{
    width: 100%;
    padding: 6px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
`;
export const TripDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.1rem;
  padding: 0.4rem;
  border-radius: 5px;
  background-color: #f2f2f2;
`;
export const CandidateContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin: 0.1rem;
  padding: 0.4rem;
  border-radius: 5px;
  background-color: #f2f2f2;
`;
export const ButtonsContainer = styled.div`
  button{
    margin: 0.2rem;
  } 
`;