function generateTable() {

    // Loop 30 times
    for (var i = 0; i < 30; i++) {

        // Empty table row and column
        var newRow = $("<tr>");
        var column = "";

        column += '<td>Mins per mile</td>';
        column += '<td>MPH</td>';
        column += '<td>5K</td>';
        column += '<td>10K</td>';
        column += '<td>Half Marathon</td>';
        column += '<td>Marathon</td>';

        // Add the column to the row
        newRow.append(column);

        // Add the row to the table
        $("paceTable").append(newRow);
    }
}