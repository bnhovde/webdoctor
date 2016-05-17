import React, {Component, PropTypes} from 'react';
import Firebase from 'firebase';
import PatientDetail from '../components/PatientDetail';
import Loader from '../components/Loader';
import BackArrow from '../components/BackArrow';

class PatientDetailContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patient: {
                name: '',
                status: '',
                description: '',
                prescriptions: [],
            },
            isLoading: true,
        };
    }

    componentWillMount() {
        // Fetch patient from firebase
        this.patientId = this.props.params.id;
        this.allPatientsRef = new Firebase('https://webdoctor.firebaseio.com/patients/');
        this.patientRef = this.allPatientsRef.child(this.patientId);

        this.patientRef.once('value', data => {
            this.setState({
                patient: data.val(),
                isLoading: false,
            });
        });
    }

    handleDelete() {
        this.patientRef.remove(() => this.props.history.push('/'));
    }

    render() {
        const PatientDetailEl = (
            <PatientDetail
                patient={this.state.patient}
                handleDelete={event => this.handleDelete(event)}
            />
        );

        return (
            <div className="patients-details l-main">
                {this.state.isLoading ? <Loader /> : PatientDetailEl}
                <BackArrow destination="/" />
            </div>
        );
    }
}

PatientDetailContainer.propTypes = {
    history: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,
    routeParams: PropTypes.object.isRequired,
};

export default PatientDetailContainer;
