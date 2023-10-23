function generateTable() {
    let MPHValue = 6.0;
    let MPHValueFormatted;
    let minsPerMileValue;
    let _5KTimeValue;
    let _10KTimeValue;
    let HalfMarathonTimeValue;
    let MarathonTimeValue;

    // Loop 30 times
    for (let i = 0; i < 31; i++) {

        // Round MPH to 2 decimal places
        MPHValue = Math.round(MPHValue * 100) / 100;
        MPHValueFormatted = addDecimalPlace(MPHValue);
        console.log("Formatted: " + MPHValueFormatted);
        // MPHValueFormatted = "" + MPHValue.toString();

        // Empty table row and column
        let newRow = $("<tr>");
        let column = "";

        // ---- Add the values to the columns ---- ///
        // MPH Column
        column += '<td>' + MPHValueFormatted + '</td>';
        // Mins per mile column
        column += '<td>' + convertToMinutesPerMile(MPHValue) + '</td>';
        // 5K Time Column
        column += '<td>' + calculateTime(3.1, MPHValue) + '</td>';
        // 10K Time Column
        column += '<td>10K</td>';
        // Half Marathon Time Column
        column += '<td>Half Marathon</td>';
        // Marathon Time Column
        column += '<td>Marathon</td>';

        // Add the column to the row
        newRow.append(column);

        // Add the row to the table
        $("#paceTable").append(newRow);

        // Recalculate the variables
        MPHValue += 0.10;

    }

}

function convertToMinutesPerMile(MPHValue) {

    // Variables
    let minsPerMile;
    let secondsOnly;
    let minsOnly;

    // Calcaulte minutes per mile from MPH value
    minsPerMile = 60 / MPHValue;
    secondsOnly = minsPerMile % 1;
    secondsOnly = secondsOnly * 60;
    secondsOnly = Math.ceil(secondsOnly);
    minsOnly = Math.floor(minsPerMile);

    // Add the leading zero to seconds and mins if required
    secondsOnly = addLeadingZero(secondsOnly);
    minsOnly = addLeadingZero(minsOnly);

    // concatenate mins and seconds, i.e. 9:30 minutes / mile
    minsPerMile = minsOnly + ":" + secondsOnly;


    return minsPerMile;

}

function addLeadingZero(numberToCheck) {
    if (numberToCheck.toString().length === 1) {
        numberToCheck = "0" + numberToCheck;
    }

    return numberToCheck;
}

function addDecimalPlace(numberToRound) {
    if (numberToRound.toString().length === 1) {
        numberToRound = numberToRound.toString() + "." + "0";
    }

    return numberToRound;
}

function calculateTime(distance, speed) {
    // Calculate time in hours, * 60 to convert to mins
    let time = (distance / speed) * 60;
    // Get minutes only by rounding down to zero decimals
    let minsOnly = Math.floor(time);
    // Get seconds only
    let secondsOnly = (time % 1) * 60;

    // Concat the results to get the formatted  time
    let formattedTime = minsOnly + ":" + secondsOnly;

    return formattedTime;

}

