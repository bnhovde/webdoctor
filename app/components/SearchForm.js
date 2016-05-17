import React, {PropTypes} from 'react';
import Icon from './Icon';

const SearchForm = ({query, onSubmitSearch, onChangeSearch, disabled}) => {
    return (
        <form className="form" onSubmit={onSubmitSearch}>
            <div className="form__inner">
                <input
                    className="form__input"
                    placeholder="Enter Search Term"
                    type="text"
                    onChange={onChangeSearch}
                    value={query}
                    disabled={disabled}
                />
                <button
                    className="form__btn"
                    onClick={onSubmitSearch}
                    disabled={disabled}
                >
                    <Icon viewBox="0 0 32 32" size="small" icon="submit" />
                </button>
            </div>
        </form>
    );
};

SearchForm.propTypes = {
    disabled: PropTypes.bool,
    onChangeSearch: PropTypes.func.isRequired,
    onSubmitSearch: PropTypes.func.isRequired,
    query: PropTypes.string,
};

export default SearchForm;
