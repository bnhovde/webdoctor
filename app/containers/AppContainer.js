import React, {Component, PropTypes} from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

class AppContainer extends Component {
    render() {
        return (
            <div>
                <Header />
                <NavBar />
                {this.props.children}
            </div>
        );
    }
}

AppContainer.propTypes = {
    children: PropTypes.element.isRequired,
};

export default AppContainer;
