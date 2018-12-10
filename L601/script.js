let studentId = prompt("Enter Student id"),
  selStudent = document.querySelector(`div[data-student-id='${studentId}']`);

if (selStudent) {
  selStudent.style.backgroundColor = "green";
}
