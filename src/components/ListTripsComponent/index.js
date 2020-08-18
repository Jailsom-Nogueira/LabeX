import React, { useState, useEffect } from 'react';

import { ListContainer, ListItem } from './styles';

import axios from 'axios';
import { baseUrl, user, } from '../../constants/axios';

export default function ListTripsComponent() {
  const [myTrip, setMyTrip] = useState([]);
  
  useEffect(() => {
    axios
    .get(`${baseUrl}${user}/trips/`)
    .then( response => {
      setMyTrip(response.data.trips);
    })
    .catch( err => {
      alert(err.message);
    })
  },[]);

  return (
    <ListContainer>
      {myTrip.map(trip => {
      return(
        <ListItem key={trip.id}>
          <div>
            <p><b>Viagem:</b> {trip.name}</p>
            <p><b>Planeta:</b> {trip.planet}</p>
            <p><b>Data:</b> {trip.date}</p>
            <p><b>Duração:</b> {trip.durationInDays} dias</p>  
            <p><b>Descrição:</b> {trip.description}</p>
          </div>
        </ListItem>
        )
      })}
    </ListContainer>
  );
}