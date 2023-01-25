/*
If an error is thrown in any of the asynchronous functions we called in the last stage, let's catch it.
*/
const { getResults } = require('./lab');
const { sendResults } = require('./messaging');
const { logResponse, logError } = require('./logs');

async function handleResults(patientId) {
    try {
        const results = await getResults(patientId);
        const response = await sendResults(patientId, results);
        await logResponse(response);
    }
    catch(ex) {
        logError(ex);
    }
}

module.exports = handleResults;