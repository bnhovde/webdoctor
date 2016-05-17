import React, {Component, PropTypes} from 'react';
import SearchResults from '../components/SearchResults';
import SearchForm from '../components/SearchForm';
import Loader from '../components/Loader';
import {queryMedication} from '../utilities/api';

class MedicationContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            isError: false,
            query: '',
            queryData: {
                results: [],
            },
        };
    }

    // Push new patient to firebase
    handleChangeSearch(event) {
        this.setState({
            query: event.target.value,
        });
    }

    // Update value from new patient form
    handleSubmitSearch(event) {
        event.preventDefault();
        this.setState({
            isLoading: true,
        });
        this.search();
    }

    // Search for results based on input
    search() {
        return queryMedication(this.state.query)
            .then(queryData => {
                return this.setState({
                    queryData,
                    isLoading: false,
                });
            })
            .catch(() => {
                return this.setState({
                    isError: true,
                    isLoading: false,
                });
            });
    }

    render() {
        return (
            <div className="prescriptions l-main">
                <div className="prescriptions__inner">
                    <SearchForm
                        query={this.state.query}
                        disabled={this.state.isLoading}
                        onChangeSearch={ev => this.handleChangeSearch(ev)}
                        onSubmitSearch={ev => this.handleSubmitSearch(ev)}
                    />
                    {this.state.isLoading ? <Loader /> : <SearchResults results={this.state.queryData.results} />}
                </div>
            </div>
        );
    }
}

MedicationContainer.propTypes = {
    routeParams: PropTypes.object,
};

export default MedicationContainer;
