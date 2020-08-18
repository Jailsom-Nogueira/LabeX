import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import ApplicationFormPage from '../ApplicationFormPage';
import CreateTripPage from '../CreateTripPage';
import AllTripsPage from '../AllTripsPage';
import TripDetailsPage from '../TripDetailsPage';
import Header from '../Header';
import AdminBar from '../AdminBar';
import LoginPage from '../LoginPage';
import SignUpPage from '../SignUpPage';

export default function Router () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Header />
          <ApplicationFormPage />
        </Route>
        <Route exact path='/login'>
          <Header />
          <LoginPage />
        </Route>
        <Route exact path='/signUp'>
          <Header />
          <SignUpPage />
        </Route>
        <Route exact path='/admin/create-trip'>
          <Header />
          <AdminBar />
          <CreateTripPage />
        </Route>
        <Route exact path='/admin/all-trips'>
          <Header />
          <AdminBar />
          <AllTripsPage />
        </Route>
        <Route exact path='/admin/trip-details/:tripId'>
          <Header />
          <AdminBar />
          <TripDetailsPage/>
        </Route>
        <Route path='/'>
          <h3>Eita Giovana, o forninho caiu (404)</h3>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};