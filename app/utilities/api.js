import 'whatwg-fetch';
import config from '../config/config';

const APIURL = `https://api.fda.gov/drug/label.json?api_key=${config.APIKEY}`;

const queryMedication = function (query) {
    return fetch(`${APIURL}&search=${encodeURIComponent(query)}&limit=10`)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            return json;
        }).catch(function (ex) {
            console.log('parsing failed', ex);
        });
};

const queryMedicationDetail = function (id) {
    return fetch(`${APIURL}&search=id:"${encodeURIComponent(id)}"`)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            return json;
        }).catch(function (ex) {
            console.log('parsing failed', ex);
        });
};

export {
    queryMedication,
    queryMedicationDetail,
};
