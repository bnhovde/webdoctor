import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import AppContainer from './containers/AppContainer';
import PatientListContainer from './containers/PatientListContainer';
import PatientDetailContainer from './containers/PatientDetailContainer';
import MedicationListContainer from './containers/MedicationListContainer';
import MedicationDetailContainer from './containers/MedicationDetailContainer';

export default (
    <Router history={hashHistory}>
        <Route path="/" component={AppContainer}>
            <IndexRoute component={PatientListContainer} />
            <Route path="patient/:id" component={PatientDetailContainer} />
            <Route path="medication" component={MedicationListContainer} />
            <Route path="medication/:id" component={MedicationDetailContainer} />
        </Route>
    </Router>
);
