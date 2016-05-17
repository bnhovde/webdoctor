import React from 'react';
import {Link} from 'react-router';

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <h1 className="header__title">WebDoctor</h1>
            </Link>
            <div className="profile-box">
                <div className="profile-box__name">
                    <span className="profile-box__title">Dr.</span>
                    <span>Hansen</span>
                </div>
                <div className="profile-box__avatar"></div>
            </div>
        </div>
    );
};

export default Header;
