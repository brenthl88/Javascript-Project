
// from data.js
var tableData = data;



// YOUR CODE HERE!
var tablebody = d3.select("tbody"); 
tableData.forEach(function(data){
    var row = tablebody.append("tr");
    Object.entries(data).forEach(function([key, value]){
       row.append("td").text(value);
    })
});

var button = d3.select("#filter-btn");

button.on("click", function(){
    var textInput = d3.select("#datetime");
    var valueInput = textInput.property("value");
    console.log(valueInput);
    var rows = tableData.filter(data => data.datetime == valueInput);
    console.log(rows);
    tablebody.html("");
    rows.forEach(function(data){
        var row = tablebody.append("tr");
        Object.entries(data).forEach(function([key, value]){
           row.append("td").text(value);
        });
    });

});








