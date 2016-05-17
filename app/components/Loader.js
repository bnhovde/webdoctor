import React from 'react';
import Icon from './Icon';

const Loader = () => {
    return (
        <div className="loader" key="loading">
            <Icon icon="loader" viewBox="0 0 32 32" className="loader" />
        </div>
    );
};

export default Loader;
