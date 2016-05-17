import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Icon from './Icon';

const PatientDetail = props => {
    const {name, description, status, patientId, prescriptions = []} = props.patient;
    const handleDelete = props.handleDelete;
    const prescriptionArr = Object.keys(prescriptions).map(key => prescriptions[key]);

    const prescriptionsList = prescriptionArr.map((item, i) => {
        return (
            <li key={i}>{item.name}</li>
        );
    });

    return (
        <div className="l-container">

            <div className="block">
                <div className="pod">
                    <div className="pod__avatar">
                        <Icon icon="person" className="avatar" viewBox="0 0 24 32" />
                    </div>
                    <h1 className="pod__headline">{name}</h1>
                    <h2 className="pod__description">{description}</h2>
                    <h3 className="pod__status">{status}</h3>
                </div>
            </div>

            <div className="block">
                <h3 className="h-text-size-large">Prescriptions</h3>
                <ul>
                    {prescriptionsList.length ? prescriptionsList : 'No prescriptions'}
                </ul>
            </div>

            <div className="block block--justified">
                <Link to="medication" className="btn btn--good">Add Prescription</Link>
                <button onClick={() => handleDelete(patientId)} className="btn btn--bad">Delete {name}</button>
            </div>
        </div>
    );
};

PatientDetail.propTypes = {
    handleDelete: PropTypes.func.isRequired,
    patient: PropTypes.object.isRequired,
};

export default PatientDetail;
