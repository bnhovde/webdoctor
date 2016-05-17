import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Icon from './Icon';

const MedicineDetail = ({drug, handleAdd}) => {
    const {generic_name, brand_name} = drug[0].openfda;
    const {indications_and_usage, dosage_and_administration} = drug[0];

    return (
        <div className="l-container">
            <div className="block">
                <div className="pod">
                    <div className="pod__avatar">
                        <Icon icon="aid" className="aid" viewBox="0 0 32 32" />
                    </div>
                    <h1 className="pod__headline">{generic_name}</h1>
                    <h2 className="pod__description">{brand_name}</h2>
                    <h3 className="pod__status">{drug[0].id}</h3>
                </div>
            </div>

            <div className="block">
                <h3 className="h-text-size-large">Indications and usage</h3>
                {indications_and_usage}
            </div>

            <div className="block">
                <h3 className="h-text-size-large">Dosage and administration</h3>
                {dosage_and_administration}
            </div>

            <div className="block block--justified">
                <Link to="medication" className="btn">Back to search</Link>
                <button onClick={() => handleAdd()} className="btn btn--good">Add to patient</button>
            </div>
        </div>
    );
};

MedicineDetail.propTypes = {
    drug: PropTypes.object.isRequired,
    handleAdd: PropTypes.func.isRequired,
};

export default MedicineDetail;
