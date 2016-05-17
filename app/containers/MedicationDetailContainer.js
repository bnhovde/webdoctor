import React, {Component, PropTypes} from 'react';
import Firebase from 'firebase';
import Drawer from '../components/Drawer';
import MedicineDetail from '../components/MedicineDetail';
import BackArrow from '../components/BackArrow';
import Loader from '../components/Loader';
import {queryMedicationDetail} from '../utilities/api';

class MedicationDetailContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patients: [],
            queryData: {
                results: [],
            },
            isLoading: true,
            isDrawerVisible: false,
        };
    }

    componentWillMount() {
        // Query the medicine details from the API
        queryMedicationDetail(this.props.params.id)
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

        // Fetch patients from firebase
        this.allPatientsRef = new Firebase('https://webdoctor.firebaseio.com/patients/');
        this.allPatientsRef.once('value', dataSnapshot => {
            const items = [];
            dataSnapshot.forEach(childSnapshot => {
                const item = childSnapshot.val();
                item.patientId = childSnapshot.key();
                items.push(item);
            });
            this.setState({
                patients: items,
            });
        });
    }

    // Push new prescription to patient
    handleAddPrescription(event, patientId) {
        event.preventDefault();
        const medicationName = this.state.queryData.results[0].openfda.generic_name[0];
        const medicationId = this.props.params.id;

        this.patientRef = this.allPatientsRef.child(patientId);
        this.patientRef.child('prescriptions').push({
            name: medicationName,
            id: medicationId,
        });
        this.setState({
            isDrawerVisible: false,
        });

        // Go to patient
        this.props.history.push(`/patient/${patientId}`);
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
        const resultsEl = (
            <MedicineDetail
                drug={this.state.queryData.results}
                handleAdd={() => this.handleAddBtnClicked()}
            />
        );

        // List of all patients
        const patientList = this.state.patients.map(patient => {
            return (
                <button key={patient.patientId} onClick={event => this.handleAddPrescription(event, patient.patientId)} className="btn btn--stack">{patient.name}</button>
            );
        });

        return (
            <div className="medication l-main">
                <BackArrow destination="/medication" />
                {this.state.isLoading ? <Loader /> : resultsEl}
                <Drawer
                    title="Add to Patient"
                    isVisible={this.state.isDrawerVisible}
                    onClose={() => this.handleCloseDrawer()}
                >
                    {patientList}
                </Drawer>
            </div>
        );
    }
}

MedicationDetailContainer.propTypes = {
    history: PropTypes.object,
    params: PropTypes.object,
    routeParams: PropTypes.object,
};

export default MedicationDetailContainer;
