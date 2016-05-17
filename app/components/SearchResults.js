import React, {PropTypes} from 'react';
import MedicineCard from './MedicineCard';

const SearchResults = ({results}) => {
    const resultEls = results.map((drug, i) => {
        return (
            <li key={i} className="block">
                <MedicineCard drug={drug} />
            </li>
        );
    });

    const preSearchEl = (
        <div key="presearch" className="block">
            <p>Enter search query above, for example "aspirin" and hit enter</p>
        </div>
    );

    return (
        <div className="search-results l-container">
            {results.length ? resultEls : preSearchEl}
        </div>
    );
};

SearchResults.propTypes = {
    results: PropTypes.array.isRequired,
};

export default SearchResults;
