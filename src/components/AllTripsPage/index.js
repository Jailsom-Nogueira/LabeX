import React from 'react';
import {AllTripsContainer} from './styles';
import ListTripsComponentAdmin from '../ListTripsComponentAdmin'

export default function AllTripsPage() {
  return (
    <AllTripsContainer>
      <h1>TODAS AS VIAGENS</h1>
      <ListTripsComponentAdmin />
    </AllTripsContainer>
  );
}