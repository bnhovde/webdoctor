import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Icon from './Icon';

const MedicineCard = ({drug}) => {
    const {generic_name, brand_name} = drug.openfda;

    return (
        <Link to={`medication/${drug.id}`} className="pod pod--btn">
            <div className="pod__avatar">
                <Icon icon="person" className="avatar" viewBox="0 0 24 32" />
            </div>
            <h1 className="pod__headline">{generic_name}</h1>
            <h2 className="pod__description">{brand_name}</h2>
            <h3 className="pod__status">{drug.id}</h3>
        </Link>
    );
};

MedicineCard.propTypes = {
    drug: PropTypes.object,
};

export default MedicineCard;
