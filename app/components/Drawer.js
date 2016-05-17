import React, {PropTypes} from 'react';
import Icon from './Icon';

const Drawer = props => {
    const {isVisible, onClose, title} = props;
    const drawerClass = isVisible ? 'visible' : 'hidden';

    return (
        <div className={`drawer drawer--${drawerClass}`}>
            <div className="drawer__background"></div>
            <div className="drawer__foreground">
                <div className="drawer__inner">
                    <button className="drawer__close" onClick={onClose}>
                        <Icon icon="close" className="close" viewBox="0 0 24 24" />
                    </button>
                    <h3 className="drawer__headline">{title}</h3>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

Drawer.propTypes = {
    children: PropTypes.element.isRequired,
    isVisible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};

export default Drawer;
