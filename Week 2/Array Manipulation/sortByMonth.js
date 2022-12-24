/**
 * Given the array of events, sort them by the month that they occur in 
 *  return the sorted array.
 * Each object in the events array will have properties event and month .
 */


const MONTHS = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

function sortByMonth(events) {
    events.sort((a,b)=>
        MONTHS.indexOf(a.month) - MONTHS.indexOf(b.month)
    )
}

module.exports = sortByMonth;