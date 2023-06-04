const print = () => {
  window.print();
};
const printPuc = ()=>{
  window.print()
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

  // document.getElementById('leaveTypeSpan').textContent = leaveNature;

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

  serialCell.innerHTML = rowIndex;
  nameCell.innerHTML = gender + " " + capitalizedName + "," + " " + designation;
  schoolCell.innerHTML = school + " " + capitalizedSchool + " <br>" + teshil;
  LeavePeriodCell.innerHTML =
    formatLeaveFrom +
    " " +
    "to" +
    " " +
    formatLeaveUpto +
    " <br>" +
    "(" +
    diffDays +
    " " +
    "Days)" +
    " " +
    leaveType;
  leaveNatureCell.innerHTML = leaveNature;
  service_bookCell.innerHTML = service_book;

  document.getElementById("myForm").reset();
});
