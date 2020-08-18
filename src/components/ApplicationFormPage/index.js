import React, { useState, useEffect } from 'react';
import useForm from '../../hooks/useForm';
import { PageContainer, FormContainer } from './styles';

import ListTripsComponent from '../ListTripsComponent'
import AdminBar from '../AdminBar';
import Countries from '../CountriesListComponent';

import axios from 'axios';
import { baseUrl, user} from '../../constants/axios';

export default function ApplicationFormPage() {
  const [allTrips, setAllTrips] = useState([]);
  const token = window.localStorage.getItem('token');

  const { form, onChange } = useForm({
    trip: '',
    candidateName: '',
    age: '',
    profession: '',
    country: '',
    description: ''
  });

  useEffect(() => {
    axios
    .get(`${baseUrl}${user}/trips/` )
    .then( response => {
      setAllTrips(response.data.trips);
    })
    .catch( err => {
      alert(err.message);
    })
  },[]);
  
  const sendApply = () => {
    const body = {
      'name': `${form.candidateName}`,
      'age': `${form.age}`,
      'profession': `${form.profession}`,
      'country': `${form.country}`,
      'applicationText': `${form.description}`,
    };
    axios
    .post(`${baseUrl}${user}/trips/${form.trip}/apply`, 
      body
    )
    .then( response => {
      alert('Inscrição enviada!');
    })
    .catch( err => {
      alert(err.message);
    })
  };

  const handleInputChange = event => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const handleSave = event => {
    event.preventDefault();
    sendApply();
  };

  const isLogged = token !== null ? 
    (<AdminBar />) : (<></>)

  return (
    <>
      {isLogged}
      <PageContainer>
        <FormContainer>
          <h1>INSCREVA-SE AQUI</h1>
          <form onSubmit={handleSave}>
            <select 
              value={form.trip} 
              onChange={handleInputChange}
              name='trip'
              required
            >
              <option defaultValue>Escolha aqui a sua viagem</option>
              {allTrips.map(trip => {
                return(
                  <option 
                    value={trip.id} 
                    key={trip.id}>{trip.name} - 
                    {trip.planet}
                  </option>
                  )
              })}
            </select>
            <h2>DADOS PESSOAIS</h2>
            <input
              value={form.name}
              type='text'  
              name='candidateName' 
              placeholder='Seu nome' 
              pattern={'[A-Za-z]{3,}'}
              title='O nome deve ter no mínimo 3 letras' 
              required
              onChange={handleInputChange}
            />
            <input
              value={form.age}               
              type='number'
              name='age'
              min='18'
              placeholder='Sua idade'
              required 
              onChange={handleInputChange} 
            />
            <input
              value={form.profession}  
              type='text'
              name='profession' 
              placeholder='Sua profissão'
              pattern={'[A-Za-z]{3,}'} 
              required 
              onChange={handleInputChange}              
            />
            <select 
              value={form.country} 
              onChange={handleInputChange}
              name='country'
              required
            >
              <Countries />
            </select>
            <textarea
              value={form.description}  
              rows='6' 
              cols='40'
              type='text'
              name='description' 
              placeholder='Porque sou um bom candidato(a)?'
              pattern={'[A-Za-z]{30,}'}
              required  
              onChange={handleInputChange} 
            />
            <button>Enviar</button>
          </form>
        </FormContainer>
        <ListTripsComponent />
      </PageContainer>
    </>
  );
}        


