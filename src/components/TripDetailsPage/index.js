import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { 
  DetailsContainer, 
  CandidateContainer, 
  TripDetails, 
  ButtonsContainer 
} from './styles'

import axios from 'axios';
import { baseUrl, user } from '../../constants/axios';

export default function LoginPage () {
  const [myTrip, setMyTrip] = useState([]);
  const [candidates, setCandidates] = useState([]);

  const token = window.localStorage.getItem('token');
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if (token === null) {
      history.push('/login');
    }
  }, [history, token]);

  useEffect(() => {
    getTrips()
  }, []);

  const getTrips = () => {
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
        auth: token
      }
    }
    axios
    .get(`${baseUrl}${user}/trip/${params.tripId}`, 
      axiosConfig
    )
    .then( response => {
      setMyTrip(response.data.trip);
      setCandidates(response.data.trip.candidates);
    })
    .catch( err => {
      alert(err.message);
    })
  };

  const onClickApproval = (candidateId, choise) => {
    const body = {
      'approve': choise,
    };
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
        auth: token
      }
    }
    axios
    .put(`${baseUrl}${user}/trips/${myTrip.id}/candidates/${candidateId}/decide`, 
      body, 
      axiosConfig
    )
    .then( response => {
      getTrips()
    })
    .catch( err => {
      alert(err.message);
    })
  };

  const gotCandidate = candidates.length !== 0 ? 
    (<h3>Candidatos</h3>) : (<h3>Esta viagem ainda não tem candidatos.</h3>)

  return(
    <DetailsContainer>
      <h2>Detalhes da viagem: {myTrip.name}</h2>
      <TripDetails>
        <p><b>Viagem:</b> {myTrip.name}</p>
        <p><b>Planeta:</b> {myTrip.planet}</p>
        <p><b>Data:</b> {myTrip.date}</p>
        <p><b>Duração:</b> {myTrip.durationInDays} dias</p>  
        <p><b>Descrição:</b> {myTrip.description}</p>
      </TripDetails>
      <ul>
        {gotCandidate}
        {candidates.map(candidate => {
          return(
            <CandidateContainer key={candidate.id}>
              <p><b>Nome:</b> {candidate.name}</p>
              <p><b>Idade:</b> {candidate.age}</p>
              <p><b>País:</b> {candidate.country}</p>
              <p><b>Profissão:</b> {candidate.profession}</p>
              <p><b>Aplicação:</b> {candidate.applicationText}</p>
              <ButtonsContainer>
                <button onClick={() => onClickApproval(candidate.id, true)}>Aprovar</button>
                <button onClick={() => onClickApproval(candidate.id, false)}>Negar</button>
              </ButtonsContainer>            
            </CandidateContainer>
          )
        })}
      </ul>
    </DetailsContainer>
  )
}
