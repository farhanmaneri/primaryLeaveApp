
const print = () => {

    window.print();
  };
  
  
  
    document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault()
    
      var gender = document.getElementById('gender').value;
      var name = document.getElementById('name').value.toUpperCase();
      var designation = document.getElementById('designation').value;
      var school = document.getElementById('school').value;
      var schoolInput = document.getElementById('schoolInput').value.toUpperCase();
      var leaveNature = document.getElementById('leaveNature').value;
      var service_book = document.getElementById('service_book').value;
       // var new_station = document.getElementById('new_station').value;
  
     var dateFrom = document.getElementById('dateFrom').value;
     var dateUpto = document.getElementById('dateUpto').value;
  
     partsdateFrom = dateFrom.split('-');
     var year = partsdateFrom[0];
     var month = partsdateFrom[1];
     var day = partsdateFrom[2];
     var formatLeaveFrom = day + "/" + month + "/" + year
     partsLeaveUpto = dateUpto.split('-');
     var years = partsLeaveUpto[0];
     var months = partsLeaveUpto[1];
     var days = partsLeaveUpto[2];
     var formatLeaveUpto = days + "/" + months + "/" + years
  // for culculation of days 
     const date1 = new Date(dateFrom);
     const date2 = new Date(dateUpto);
     const diffTime = Math.abs(date2 - date1);
     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));  
     
  
      var table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
      var rowIndex = table.rows.length + 1; // Get the new rowIndex
      var newRow = table.insertRow();
      
  
    
  
      var serialCell = newRow.insertCell(0)
      var nameCell = newRow.insertCell(1);
      var schoolCell = newRow.insertCell(2);
      var LeavePeriodCell = newRow.insertCell(3);
      var leaveNatureCell = newRow.insertCell(4);
      var service_bookCell = newRow.insertCell(5);
  
      serialCell.innerHTML = rowIndex
      nameCell.innerHTML = gender +" "+name  +","+" "+ designation
      schoolCell.innerHTML = school +" "+ schoolInput;
      LeavePeriodCell.innerHTML = formatLeaveFrom +" "+"to"+" "+formatLeaveUpto +" "+"(" + diffDays +" "+"Days)";
      leaveNatureCell.innerHTML = leaveNature;
      service_bookCell.innerHTML = service_book;
  
      document.getElementById('myForm').reset();
    
    });
  