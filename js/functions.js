function generateTable() {
    alert("Javascript working");

    let MPHValue = 6.0;
    let minsPerMileValue;
    let _5KTimeValue;
    let _10KTimeValue;
    let HalfMarathonTimeValue;
    let MarathonTimeValue;

    // Loop 30 times
    for (let i = 0; i < 30; i++) {

        // Empty table row and column
        let newRow = $("<tr>");
        let column = "";

        // Add the values to the columns
        column += '<td>' + MPHValue + '</td>';
        column += '<td>' + convertToMinutesPerMile(MPHValue) + '</td>';
        column += '<td>5K</td>';
        column += '<td>10K</td>';
        column += '<td>Half Marathon</td>';
        column += '<td>Marathon</td>';

        // Add the column to the row
        newRow.append(column);

        // Add the row to the table
        $("#paceTable").append(newRow);

        // Recalculate the variables
        MPHValue += 0.10;
        MPHValue = Math.round(MPHValue * 100) / 100;

    }

}

function convertToMinutesPerMile(MPHValue) {

    // Variables
    let minsPerMile;
    let secondsOnly;
    let minsOnly;

    minsPerMile = 60 / MPHValue;
    secondsOnly = minsPerMile % 1;
    secondsOnly = secondsOnly * 60;
    secondsOnly = Math.ceil(secondsOnly);
    minsOnly = Math.floor(minsPerMile);

    minsPerMile = minsOnly + ":" + secondsOnly;

    minsPerMile = addLeadingZero(minsPerMile);

    return minsPerMile;

}

function addLeadingZero(numberToCheck) {
    if (numberToCheck.toString().length === 1) {
        numberToCheck = "0" + numberToCheck;
    }

    return numberToCheck;
}