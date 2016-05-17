import React, {PropTypes} from 'react';
import Icon from './Icon';

const AddPatientForm = ({handleSubmit, handleChange, name}) => {
    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form__inner">
                <input
                    className="form__input"
                    placeholder="enter patient name"
                    type="text"
                    onChange={handleChange}
                    value={name}
                />
                <button className="form__btn" onClick={handleSubmit}>
                    <Icon viewBox="0 0 32 32" size="small" icon="submit" />
                </button>
            </div>
        </form>
    );
};

AddPatientForm.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
};

export default AddPatientForm;
