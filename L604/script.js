let newStudents = document.querySelector(".new_student"),
  studentList = document.querySelector("#student-list");

newStudents.addEventListener("keyup", e => {
  let keyCode = e.which,
    target = e.target,
    escBtn = 27;

  if (keyCode !== escBtn && target.value) {
    let li = document.createElement("li");
    li.textContent = target.value;
    studentList.appendChild(li);
  }
});
