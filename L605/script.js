var students = [  { FirstName: "თორნიკე", LastName: "ერისთავი", PersonalNumber: "123" },  { FirstName: "ნუგზარ", LastName: "ერგემლიძე", PersonalNumber: "124" },  { FirstName: "ფრიდონ", LastName: "სულაბერიძე", PersonalNumber: "125" }];function displayStudentsTable(studentList) {  let dataArray = Array.from(studentList);  let table = document.createElement("table");  let _tr = document.createElement("tr");  let fields = Object.keys(dataArray[0]);  table.appendChild(_tr);  fields.forEach(key => {    let th = document.createElement("th");    th.textContent = key;    _tr.appendChild(th);  });  dataArray.forEach(element => {    let tr = document.createElement("tr");    table.appendChild(tr);    for (let k in element) {      let td = document.createElement("td");      let el = document.createTextNode(element[k]);      td.appendChild(el);      tr.appendChild(td);    }  });  return document.querySelector("#student-list").appendChild(table);}displayStudentsTable(students);