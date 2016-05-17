import React from 'react';

// Based on http://dmfrancisco.github.io/react-icons/

function renderGraphic(icon) {
    switch (icon) {
        case 'search':
            return (
                <path class="path1" d="M9.516 14.016c2.484 0 4.5-2.016 4.5-4.5s-2.016-4.5-4.5-4.5-4.5 2.016-4.5 4.5 2.016 4.5 4.5 4.5zM15.516 14.016l4.969 4.969-1.5 1.5-4.969-4.969v-0.797l-0.281-0.281c-1.125 0.984-2.625 1.547-4.219 1.547-3.609 0-6.516-2.859-6.516-6.469s2.906-6.516 6.516-6.516 6.469 2.906 6.469 6.516c0 1.594-0.563 3.094-1.547 4.219l0.281 0.281h0.797z"></path>
            );
        case 'close':
            return (
                <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"></path>
            );
        case 'back':
            return (
                <path d="M15.422 16.078l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z"></path>
            );
        case 'add':
            return (
                <path d="M18.984 12.984h-6v6h-1.969v-6h-6v-1.969h6v-6h1.969v6h6v1.969z"></path>
            );
        case 'aid':
            return (
                <path d="M28 8h-6v-4c0-1.1-0.9-2-2-2h-8c-1.1 0-2 0.9-2 2v4h-6c-2.2 0-4 1.8-4 4v16c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4v-16c0-2.2-1.8-4-4-4zM12 4h8v4h-8v-4zM24 22h-6v6h-4v-6h-6v-4h6v-6h4v6h6v4z"></path>
            );
        case 'person':
            return (
                <path d="M12 16c-6.625 0-12 5.375-12 12 0 2.211 1.789 4 4 4h16c2.211 0 4-1.789 4-4 0-6.625-5.375-12-12-12zM6 6c0-3.314 2.686-6 6-6s6 2.686 6 6c0 3.314-2.686 6-6 6s-6-2.686-6-6z"></path>

            );
        case 'loader':
        default:
            return (
                <path d="M32 12h-12l4.485-4.485c-2.267-2.266-5.28-3.515-8.485-3.515s-6.219 1.248-8.485 3.515c-2.266 2.267-3.515 5.28-3.515 8.485s1.248 6.219 3.515 8.485c2.267 2.266 5.28 3.515 8.485 3.515s6.219-1.248 8.485-3.515c0.189-0.189 0.371-0.384 0.546-0.583l3.010 2.634c-2.933 3.349-7.239 5.464-12.041 5.464-8.837 0-16-7.163-16-16s7.163-16 16-16c4.418 0 8.418 1.791 11.313 4.687l4.687-4.687v12z"></path>
            );
    }
}

const Icon = props => {
    return (
        <svg className={`icon icon--${props.className}`} viewBox={props.viewBox} preserveAspectRatio="xMidYMid meet" fit>
            {renderGraphic(props.icon)}
        </svg>
    );
};

Icon.defaultProps = {
    icon: 'person',
    className: 'avatar',
    viewBox: '0 0 24 32',
};

Icon.propTypes = {
    className: React.PropTypes.string,
    icon: React.PropTypes.string.isRequired,
    viewBox: React.PropTypes.string,
};

export default Icon;
