

const print = ()=>{
 
  window.print()
}

// end 
function downloadExcel() {
  // Get the HTML content you want to convert to Excel
  var print_section = document.getElementById("print_section").innerHTML;
  
  // Create a temporary link element
  var link = document.createElement('a');
  link.style.display = 'none';
  
  // Create a Blob object with the HTML content
  var blob = new Blob([print_section], { type: 'application/vnd.ms-excel' });
  
  // Set the URL of the link to the Blob object
  link.href = URL.createObjectURL(blob);
  
  // Set the filename of the download
  link.download = 'data.xls';
  
  // Append the link to the document body
  document.body.appendChild(link);
  
  // Simulate a click event on the link to trigger the download
  link.click();
  
  // Remove the link from the document body
  document.body.removeChild(link);
}
//  download to word

function downloadWord() {
  var htmlContent = document.getElementById("print_section").innerHTML;
  
  // Convert HTML to Word document
  var convertedContent = htmlDocx.asBlob(htmlContent);
  
  // Create a temporary link element
  var link = document.createElement('a');
  link.style.display = 'none';
  
  // Set the URL of the link to the Blob object
  link.href = URL.createObjectURL(convertedContent);
  
  // Set the filename of the download
  link.download = 'data.docx';
  
  // Append the link to the document body
  document.body.appendChild(link);
  
  // Simulate a click event on the link to trigger the download
  link.click();
  
  // Remove the link from the document body
  document.body.removeChild(link);
}

    // downloading to pdf 
    function downloadPDF() {
      var element = document.getElementById("print_section");
      
      // Set options for PDF generation
      var options = {
        
        filename: 'data.pdf',
        image: { type: 'jpeg', quality: 0.98 }, // Optional
        html2canvas: { scale: 2 }, // Optional
        
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }, // Optional
        logging: true,  // Enable logging for troubleshooting
        useCORS: true,
      };
      
      
      // Generate PDF from HTML content
      html2pdf().set(options).from(element).save();
    }



document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var gender = document.getElementById("gender").value;
  var name = document.getElementById("name").value;
  var words = name.split(" ");
  var capitalized = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  var capitalizedName = capitalized.join(" ");

  var designation = document.getElementById("designation").value;
  var school = document.getElementById("school").value;
  var schoolInput = document.getElementById("schoolInput").value;
  var words = schoolInput.split(" ");
  var capitalized = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  var capitalizedSchool = capitalized.join(" ");

  var leaveNature = document.getElementById("leaveNature").value;
  var service_book = document.getElementById("service_book").value;
  var teshil = document.getElementById("tehsil").value;
  var leaveType = document.getElementById("leaveType").value;

  // document.getElementById('leaveTypeSpan').content = leaveNature;

  var dateFrom = document.getElementById("dateFrom").value;
  var dateUpto = document.getElementById("dateUpto").value;

  partsdateFrom = dateFrom.split("-");
  var year = partsdateFrom[0];
  var month = partsdateFrom[1];
  var day = partsdateFrom[2];
  var formatLeaveFrom = day + "/" + month + "/" + year;
  partsLeaveUpto = dateUpto.split("-");
  var years = partsLeaveUpto[0];
  var months = partsLeaveUpto[1];
  var days = partsLeaveUpto[2];
  var formatLeaveUpto = days + "/" + months + "/" + years;
  // for culculation of days
  const date1 = new Date(dateFrom);
  const date2 = new Date(dateUpto);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  var table = document
    .getElementById("dataTable")
    .getElementsByTagName("tbody")[0];
  var rowIndex = table.rows.length + 1; // Get the new rowIndex
  var newRow = table.insertRow();

  var serialCell = newRow.insertCell(0);
  var nameCell = newRow.insertCell(1);
  var schoolCell = newRow.insertCell(2);
  var LeavePeriodCell = newRow.insertCell(3);
  var leaveNatureCell = newRow.insertCell(4);
  var service_bookCell = newRow.insertCell(5);
var   edit_button = newRow.insertCell(6)
edit_button.className = "editColumn"
  var editButton = document.createElement('Button');
  editButton.textContent = 'Edit';
  editButton.className= "editButton"
  // editButton.addEventListener('click', function() {
  //   // Handle edit functionality here
  //   console.log('Edit button clicked for row:', newRow.rowIndex);
  // });
  edit_button.appendChild(editButton);

  editButton.addEventListener('click', function() {
    var rowIndex = this.parentNode.parentNode.rowIndex; // Get the row index
    var table = document.getElementById('dataTable');
    var row = table.rows[rowIndex];
    
    // Access the cells and edit their content
    var nameCell = row.cells[1];
    var schoolCell = row.cells[2];
  
    // Example: Change the content of the first name cell
    var saveButton = row.querySelector(".save_button")
    if(!saveButton){   
    var newName = document.createElement('input');
    newName.type = 'text';
    newName.value  =  nameCell.textContent

    var newSchool = document.createElement('input');
    newSchool.type = 'text';
    newSchool.value  =  schoolCell.textContent
    // schoolCell.textContent = gender + " " + newSchool;
    
    nameCell.textContent = '';
    nameCell.appendChild(newName);

    schoolCell.textContent = '';
    schoolCell.appendChild(newSchool);

    var saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.className = 'save_button'
    saveButton.addEventListener('click', function(){
      // Get update value from the inputs
      var updatedNewName = newName.value;
      var words = updatedNewName.split(" ");
      var capitalized = words.map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      });
      var capitalizedName = capitalized.join(" ");
      
      var updatedSchoolName = newSchool.value;
      var words = updatedSchoolName.split(" ");
      var capitalized = words.map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      });
      var capitalizedSchool = capitalized.join(" ");
    
 // update the cell content with the new value
 nameCell.textContent = capitalizedName;
 schoolCell.textContent = capitalizedSchool;
 
 editButton.disabled = false;
 row.removeChild(saveButton)
     })
     row.appendChild(saveButton)
    }
  });
  
// editButton.appendChild(editButton)
  

  serialCell.innerHTML = rowIndex;
  nameCell.innerHTML = gender + " " + capitalizedName + "," + " " + designation;
  schoolCell.innerHTML =  gender + " " + capitalizedSchool + " <br>" + teshil;
  LeavePeriodCell.innerHTML = formatLeaveFrom +  " " +  "to" +" " +  formatLeaveUpto + " <br>" + "(" +    diffDays +    " " +    "Days)" +" " + leaveType;
  leaveNatureCell.innerHTML = leaveNature;
  service_bookCell.innerHTML = service_book;

  document.getElementById("myForm").reset();
});
