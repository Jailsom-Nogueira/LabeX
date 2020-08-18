import React from 'react';
import { useHistory } from 'react-router-dom';
import { AdminBarContainer } from './styles'

export default function AdminBar () {
  const history = useHistory();

  const goToCreateTripPage = () => {
    history.push('/admin/create-trip');
  };

  const goToAllTripsPage = () => {
    history.push('/admin/all-trips');
  };

  return(
    <AdminBarContainer>
        <button onClick={goToCreateTripPage}>CRIAR VIAGEM</button>
        <button onClick={goToAllTripsPage}>VIAGENS</button>
    </AdminBarContainer>
  )
}