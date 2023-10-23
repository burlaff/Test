function generateTable() {
    alert("Javascript working");

    var MPHValue = 6.0;
    var minsPerMileValue;
    var _5KTimeValue;
    var _10KTimeValue;
    var HalfMarathonTimeValue;
    var MarathonTimeValue;

    // Loop 30 times
    for (var i = 0; i < 30; i++) {

        // Empty table row and column
        var newRow = $("<tr>");
        var column = "";

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

    var minsPerMile;
    var secondsOnly;
    var minsOnly;

    minsPerMile = 60 / MPHValue;
    secondsOnly = minsPerMile % 1;
    secondsOnly = secondsOnly * 60;
    secondsOnly = Math.ceil(secondsOnly);
    minsOnly = Math.floor(minsPerMile);

    minsPerMile = minsOnly + ":" + secondsOnly;

    return minsPerMile;

}