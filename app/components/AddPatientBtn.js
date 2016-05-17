import React, {PropTypes} from 'react';
import Icon from './Icon';

const AddPatientBtn = props => {
    const {onAddBtnClicked} = props;

    return (
        <button key="addCard" onClick={() => onAddBtnClicked()} className="patients-card patients-card--add">
            <div className="patients-card__icon">
                <Icon icon="add" className="add" viewBox="0 0 24 24" />
            </div>
            <div className="patients-card__details">
                <span className="patients-card__name">Add patient</span>
            </div>
        </button>
    );
};

AddPatientBtn.propTypes = {
    onAddBtnClicked: PropTypes.func.isRequired,
};

export default AddPatientBtn;
