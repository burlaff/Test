function generateTable() {

    // ---- Variables ---- //
    let MPHValue = 6.0;
    let MPHValueFormatted;

    // Loop 30 times
    for (let i = 0; i < 41; i++) {


        // ---- Calculate and format MPH ---- //
        // Round MPH to 2 decimal places
        MPHValue = Math.round(MPHValue * 100) / 100;
        MPHValueFormatted = addDecimalPlace(MPHValue);

        // Empty table row and column
        let newRow = $("<tr>");
        let column = "";

        // ---- Add the values to the columns ---- ///
        // MPH Column
        column += '<td class="tableRows">' + MPHValueFormatted + '</td>';
        // Mins per mile column
        column += '<td class="tableRows">' + convertToMinutesPerMile(MPHValue) + '</td>';
        // 5K Time Column
        column += '<td class="tableRows">' + calculateTime(3.1, MPHValue) + '</td>';
        // 10K Time Column
        column += '<td class="tableRows">' + formatHours(calculateTime(6.2, MPHValue)) + '</td>';
        // Half Marathon Time Column
        column += '<td class="tableRows">' + formatHours(calculateTime(13.1, MPHValue)) + '</td>';
        // Marathon Time Column
        column += '<td class="tableRows">' + formatHours(calculateTime(26.2, MPHValue)) + '</td>';

        // Add the column to the row
        newRow.append(column);

        // Add the row to the table
        $("#paceTable").append(newRow);

        // Recalculate the variables
        MPHValue += 0.10;

    }

}

// Convert MPH to minutes per mile
function convertToMinutesPerMile(MPHValue) {

    // Variables
    let minsPerMile;
    let secondsOnly;
    let minsOnly;

    // Calculate minutes per mile from MPH value
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

// Add leading zero to value
function addLeadingZero(numberToCheck) {
    if (numberToCheck.toString().length === 1) {
        numberToCheck = "0" + numberToCheck;
    }

    return numberToCheck;
}

// Add .0 to end of value
function addDecimalPlace(numberToRound) {
    if (numberToRound.toString().length === 1) {
        numberToRound = numberToRound.toString() + "." + "0";
    }

    return numberToRound;
}

// Calculate time from distance and speed
function calculateTime(distance, speed) {

    // Calculate time in hours, * 60 to convert to mins
    let time = (distance / speed) * 60;
    // Get minutes only by rounding down to zero decimals
    let minsOnly = Math.floor(time);
    // Get seconds only
    let secondsOnly = (time % 1) * 60;
    // Round seconds to zero decimal places
    secondsOnly = Math.round(secondsOnly);
    // Add extra zero before secondsOnly for formatting
    if (secondsOnly.toString().length === 1) {
        secondsOnly = "0" + secondsOnly;
    }

    // Concat the results to get the formatted  time
    return minsOnly + ":" + secondsOnly;

}

function formatHours(timeToFormat) {
    let originalTime = timeToFormat;

    // Replace the ":" in timeToFormat with a "." and convert to float
    timeToFormat = timeToFormat.replace(":", ".");
    timeToFormat = parseFloat(timeToFormat);


    // Variables
    let timeInHours;
    let remainingMinutes;
    let remainingSeconds;

    // If time is greater than 60 minutes
    if (timeToFormat >= 60) {
        // Calculate how many hours
        timeInHours = timeToFormat / 60;

        // Get remaining minutes from that value
        remainingMinutes = timeInHours % 1;
        remainingMinutes = remainingMinutes * 60;

        // Get remaining seconds from minutes
        remainingSeconds = remainingMinutes % 1;
        remainingSeconds = remainingSeconds * 60;

        // Remove decimal places from hours, minutes and seconds
        timeInHours = Math.floor(timeInHours);
        remainingMinutes = Math.floor(remainingMinutes);
        remainingSeconds = Math.floor(remainingSeconds);

        // Add leading zero if applicable
        timeInHours = addLeadingZero(timeInHours);
        remainingMinutes = addLeadingZero(remainingMinutes);
        remainingSeconds = addLeadingZero(remainingSeconds);


        return timeInHours + ":" + remainingMinutes + ":" + remainingSeconds;

    }

    return originalTime;


}
