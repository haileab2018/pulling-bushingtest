
var emp1 = {};
emp1.firstName = "Michael";
emp1.lastName = "Scott";
emp1.gender = "M";
emp1.designation = "Regional Manager";

function CreatEmployeeObject(firstName, lastName, gender, designation){
  //var newObject = {};
  //newObject.firstName = firstName;
  //newObject.lastName = lastName; ....
  // change newObject to this
   this.firstName = firstName;
   this.lastName = lastName;
   this.gender = gender;
   this.designation = designation;
  //return  newObject;
}

var emp3 = new creatEmployeeObject("Haileab", "Kebreab", "M", "Designer");
//document.getElementById("note").innerHTML = emp3;

// function print(massage){
//   var employee = document.getElementById("note");
//   employee.innerHTML = massage;
// }
console.log(emp3);
