import React, {Component, PropTypes} from 'react';
import Firebase from 'firebase';
import Drawer from '../components/Drawer';
import Loader from '../components/Loader';
import PatientCard from '../components/PatientCard';
import AddPatientBtn from '../components/AddPatientBtn';
import AddPatientForm from '../components/AddPatientForm';

class MyPatientsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patients: [],
            isLoading: true,
            isDrawerVisible: false,
            newPatientName: '',
        };
    }

    componentWillMount() {
        // Fetch patients from firebase
        this.firebaseRef = new Firebase('https://webdoctor.firebaseio.com/patients/');
        this.firebaseRef.on('value', dataSnapshot => {
            const items = [];
            dataSnapshot.forEach(childSnapshot => {
                const item = childSnapshot.val();
                item.patientId = childSnapshot.key();
                items.push(item);
            });
            this.setState({
                patients: items,
                isLoading: false,
            });
        });
    }

    componentWillUnmount() {
        // Remove firebase event listeners
        this.firebaseRef.off();
    }

    // Push new patient to firebase
    handleSubmitPatient(event) {
        event.preventDefault();
        if (this.state.newPatientName.trim().length > 0) {
            this.firebaseRef.push({
                name: this.state.newPatientName,
                description: 'Brief patient description here',
                status: 'Last contact: X days ago',
                prescriptions: [],
            });
            this.setState({
                newPatientName: '',
                isDrawerVisible: false,
            });
        }
    }

    // Update value from new patient form
    handleChangePatient(event) {
        this.setState({newPatientName: event.target.value});
    }

    // show drawer and new patient form
    handleAddBtnClicked() {
        this.setState({
            isDrawerVisible: true,
        });
    }

    // hide drawer and new patient form
    handleCloseDrawer() {
        this.setState({
            isDrawerVisible: false,
        });
    }

    render() {
        const patientList = this.state.patients.map((patient, i) => {
            return (
                <li key={i} className="patients-list__item">
                    <PatientCard patient={patient} />
                </li>
            );
        });

        const addPatientBtn = (
            <li key="new" className="patients-list__item">
                <AddPatientBtn onAddBtnClicked={() => this.handleAddBtnClicked()} />
            </li>
        );

        const patientListEl = (
            <div className="patients-list">
                <ul className="patients-list__inner">
                    {patientList}
                    {addPatientBtn}
                </ul>
            </div>
        );

        return (
            <div className="l-main">
                {this.state.isLoading ? <Loader /> : patientListEl}
                <Drawer
                    title="Add patient"
                    isVisible={this.state.isDrawerVisible}
                    onClose={() => this.handleCloseDrawer()}
                >
                    <AddPatientForm
                        name={this.state.newPatientName}
                        handleSubmit={event => this.handleSubmitPatient(event)}
                        handleChange={event => this.handleChangePatient(event)}
                    />
                </Drawer>
            </div>
        );
    }
}

MyPatientsContainer.propTypes = {
    routeParams: PropTypes.object,
};

export default MyPatientsContainer;
