/*
We have a function handleResults which should retrieve a patient's results from a lab, send them to the patient, and record the response in logs.
The three functions have been imported for you.
Each function returns a promise, so it can be used with async/await. 
You'll need to call these in order:

Pass the patientId to getResults. This will resolve with results.
Pass the patientId and results (in that order) to sendResults. This will resolve with response.
Pass the response to logResponse. There is no return value here. You can choose to either return the promise from logResponse or use await so the function will not resolve until after logResponse is complete.

*/
const { getResults } = require('./lab');
const { sendResults } = require('./messaging');
const { logResponse, logError } = require('./logs');

async function handleResults(patientId) {
    const results = await getResults(patientId);
    const response = await sendResults(patientId , results);
    await logResponse(response)
}

module.exports = handleResults;
