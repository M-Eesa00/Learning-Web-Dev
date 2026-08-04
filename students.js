const studentsData = [
  {
    id: 1,
    name: "Ali",
    age: 20,
    course: "Web Development",
    marks: 85,
    passed: true,
  },
  {
    id: 2,
    name: "Sara",
    age: 22,
    course: "Graphic Design",
    marks: 42,
    passed: false,
  },
  {
    id: 3,
    name: "Usman",
    age: 21,
    course: "Mobile Apps",
    marks: 76,
    passed: true,
  },
  {
    id: 4,
    name: "Ayesha",
    age: 19,
    course: "Web Development",
    marks: 55,
    passed: false,
  },
  {
    id: 5,
    name: "Bilal",
    age: 23,
    course: "Mobile Apps",
    marks: 91,
    passed: true,
  },
  {
    id: 6,
    name: "Zara",
    age: 20,
    course: "Graphic Design",
    marks: 38,
    passed: false,
  },
  {
    id: 7,
    name: "Hamza",
    age: 22,
    course: "Web Development",
    marks: 67,
    passed: true,
  },
];

// document.getElementById("card-media-title").textContent = "Students Data";
// document.getElementById("card-media-p-tag").textContent = "";

// CREATING CARDS FOR OBJECTS

var container = document.getElementById("demoDiv");
var html = `<div class="col-12"><h2 class="mb-2 text-dark text-center mt-3">Students Data</h2></div>`;

var passCount = (failCount = 0);

studentsData.forEach((element) => {
  const cardColor = getColor(element.marks);

  html += `<div class="col-md-6 col-lg-3">
              <div class="card h-100 shadow-sm" style="background-color: ${cardColor};">
                <div class="card-body">
                  <h5 class="card-title">${element.name}</h5>
                  <p class="card-text">
                    <b> ID : </b> ${element.id} <br> <b> Age : </b> ${element.age}
                    <br> <b> Course : </b> ${element.course} <br> <b> Marks : </b> ${element.marks} 
                  </p>
                </div>
              </div>
            </div>`;
});

container.innerHTML = html;

// TOTAL STUDENTS COUNT

var isStudentCountVisible = false;

function showStudentsCount() {
  var container = document.getElementById("show-totals");
  var button = document.getElementById("all-students");

  if (isStudentCountVisible) {
    container.innerHTML = "";
    button.textContent = "Show Students Count";
    isStudentCountVisible = false;
  } else {
    var html = "";
    html +=
      "<div class='col-md-12'><p class='alert alert-warning'>Total Students: " +
      studentsData.length +
      "</p></div>";
    container.innerHTML = html;
    button.textContent = "Hide Students Count";
    isStudentCountVisible = true;
  }
}

// GRADE CALCULATION

var isGradeVisible = false;

function gradeCalculation() {
  var container = document.getElementById("show-passed");
  var button = document.querySelector("button[onclick='gradeCalculation()']");
  var passCount = 0;
  var failCount = 0;

  studentsData.forEach((element) => {
    if (element.marks >= 80) {
      element.passed = true;
      passCount++;
    } else {
      element.passed = false;
      failCount++;
    }
  });

  if (isGradeVisible) {
    container.innerHTML = "";
    button.textContent = "Show Grade of Students";
    isGradeVisible = false;
  } else {
    var html = "";
    html +=
      "<div class='col-md-12'><p class='alert alert-warning'>Total Passed Students: " +
      passCount +
      "</p><p class='alert alert-danger'>Total Failed Students: " +
      failCount +
      "</p></div>";
    container.innerHTML = html;
    button.textContent = "Hide Grade of Students";
    isGradeVisible = true;
  }
}

// SETTING DIVS BACKGROUND COLOR

function getColor(marks) {
  if (marks >= 80) {
    return "lightgreen";
  } else if (marks >= 50) {
    return "lightyellow";
  } else {
    return "lightcoral";
  }
}
