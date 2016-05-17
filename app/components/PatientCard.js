import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Icon from './Icon';

const PatientCard = props => {
    const {name = 'unnamed patient'} = props.patient;
    const patientId = props.patient.patientId;

    return (
        <Link to={`patient/${patientId}`} key={patientId} className="patients-card">
            <div className="patients-card__icon">
                <Icon icon="person" className="avatar" viewBox="0 0 24 32" />
            </div>
            <div className="patients-card__details">
                <span className="patients-card__name">{name}</span>
            </div>
        </Link>
    );
};

PatientCard.propTypes = {
    name: PropTypes.string,
    patient: PropTypes.object,
    patientId: PropTypes.string,
};

export default PatientCard;
