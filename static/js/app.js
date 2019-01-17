// from data.js
var tableData = data;

// YOUR CODE HERE!

//Select the submit buttom
var submit = d3.select("#filter-btn");

var tbody = d3.select("tbody")

function buildTable(data) {
  
  
  tbody.html("");

  // I will loop through the object 
  data.forEach((Row) => {
    
    var row = tbody.append("tr");

    Object.values(Row).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
}


submit.on("click", function() {
  
  //Preventing the page from refreshing
  d3.event.preventDefault();


  //selecting the input element and getting the raw html node
  var inputElement = d3.select("#datetime");

  
  // getting the value property of the input element
  var inputValue = inputElement.property("value");

  console.log("output", inputValue);
  console.log(data)

  var filteredData = data.filter(day => day.datetime === inputValue);

  console.log("output", filteredData);

  //adding the table
 
 
  buildTable(filteredData)
  
 
  
  

  });