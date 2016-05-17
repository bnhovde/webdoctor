import React from 'react';
import {Link, IndexLink} from 'react-router';

const NavBar = () => {
    return (
        <div className="navbar">
            <IndexLink className="navbar__item" activeClassName="navbar__item--active" to="/">My Patients</IndexLink>
            <Link className="navbar__item" activeClassName="navbar__item--active" to="/medication">Medication</Link>
        </div>
    );
};

export default NavBar;

