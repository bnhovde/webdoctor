import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Icon from './Icon';

const BackArrow = ({destination}) => {
    return (
        <Link className="back-arrow" to={destination}>
            <Icon icon="back" className="back" viewBox="0 0 24 24" />
        </Link>
    );
};

BackArrow.propTypes = {
    destination: PropTypes.string.isRequired,
};

export default BackArrow;
