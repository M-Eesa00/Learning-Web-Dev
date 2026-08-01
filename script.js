var bgColor = "red";
const textColor = "#212529";
//document.getElementById("card-media-div").class.add = "my-custom-class";
//document.getElementById("card-media-div").style.backgroundColor = bgColor;
//class selector to change color of all divs

/* 
        name: hamza
        age: 25
        email: "hamza@example.com"
        skills: php, javascript, css

      */
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

document.getElementById("card-media-title").textContent = "Students Data";
document.getElementById("card-media-p-tag").textContent = "";

// CREATING CARDS FOR OBJECTS

var container = document.getElementById("demoDiv");
var html = "";

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

// ASSIGNMENT 2
// CONVERTING RAW INTO JSON

// Company name and founded year at the top level
// A departments array
// Each department has name, manager, and a projects array
// Each project has name, type, startDate, status, budget, and a team array
// Each team member has name, age, role, and a skills array

const company = {
  name: "Tech Nest",
  founded: 2018,
  departments: [
    {
      name: "Web Development",
      manager: "Ahmed Raza",
      projects: [
        {
          name: "ShopEase",
          type: "E-Commerce Website",
          startDate: "2024-03-01",
          status: "Active",
          budget: 5000,
          team: [
            {
              name: "Ali Khan",
              age: 25,
              role: "Junior Developer HTML",
              skills: ["HTML", "CSS", "JavaScript"],
            },
            {
              name: "Sara Malik",
              age: 28,
              role: "Senior Developer",
              skills: ["Laravel", "Vue", "MySQL"],
            },
          ],
        },
        {
          name: "PortalX",
          type: "Client Portal System",
          startDate: "10-01-2024",
          status: "On Hold",
          budget: 3200,
          team: [
            {
              name: "Usman Tariq",
              age: 30,
              role: "Senior Developer",
              skills: ["PHP", "Laravel", "REST APIs"],
            },
          ],
        },
      ],
    },
    {
      name: "Mobile Apps",
      manager: "Fatima Noor",
      projects: [
        {
          name: "RideNow",
          type: "Ride Booking App",
          startDate: "05-05-2024",
          status: "Active",
          budget: 8000,
          team: [
            {
              name: "Bilal Ahmed",
              age: 27,
              role: "Junior Developer",
              skills: ["Flutter", "Flutter"],
            },
            {
              name: "Ayesha Siddiqi",
              age: 29,
              role: "Senior Developer",
              skills: ["React Native", "Fire base", "Node.js"],
            },
          ],
        },
      ],
    },
    {
      name: "Graphic Designer",
      manager: "Tariq Mehmood",
      projects: [
        {
          name: "BrandKit",
          type: "Branding Package",
          startDate: "02-02-2024",
          status: "Completed",
          budget: 1500,
          team: [
            {
              name: "Sara Khan",
              age: 24,
              role: "Junior Designer",
              skills: ["PhotoShop", "Illustrater", "Figma"],
            },
          ],
        },
      ],
    },
  ],
};

document.getElementById("grid-card").textContent = "company-data";
document.getElementById("grid-card-p").textContent = "";

var companyContainer = document.querySelector(".company-container");
var companyHtml = "";

companyHtml += `<h2 class="mb-4 text-dark text-center mt-3">${company.name} - Founded ${company.founded}</h2>`;

company.departments.forEach(function (department) {
  companyHtml += `<h3 class="mt-4 mb-3 text-dark ">${department.name}</h3>`;
  companyHtml += `<div class="row g-3">`;

  department.projects.forEach(function (project) {
    const color = setColor(project.status);
    companyHtml += `
      <div class="col-md-6 mb-3">
        <div class="card h-100 shadow-sm" style="background-color: ${color};">
          <div class="card-body">
            <h5 class="card-title fw-bolder">${project.name}</h5>
            <p class="card-text">
              <b>Status:</b> ${project.status} <br>
              <b>Budget:</b> $ ${project.budget} 
            </p>
            <div class="mt-2">
              <b>Team:</b>
    `;

    project.team.forEach(function (member) {
      companyHtml += `<p class="mb-1"> <b>Name :</b>${member.name} <br>
      <b>Role : </b> ${member.role}</p>`;
    });

    companyHtml += `
            </div>
          </div>
        </div>
      </div>
    `;
  });

  // companyHtml += `</div>`;
});

//COMAPNY DIV COLORS

function setColor(status) {
  if (status == "Active") {
    return "lightgreen";
  } else if (status == "On Hold") {
    return "lightyellow";
  } else {
    return "rgb(232, 100, 100)";
  }
}

companyContainer.innerHTML = companyHtml;

// ELECTRICITY BILL CALCULATOR

const customers = [
  { name: "Ali Khan", type: "Residential", units: 85 },
  { name: "TechNest Pvt Ltd", type: "Commercial", units: 450 },
  { name: "Sara Malik", type: "Residential", units: 320 },
  { name: "City Hospital", type: "Commercial", units: 750 },
  { name: "Usman Tariq", type: "Residential", units: 210 },
  { name: "Bilal Ahmed", type: "Residential", units: 580 },
  { name: "QuickMart Store", type: "Commercial", units: 130 },
];

document.getElementById("Electricity Bills").textContent = "electricity bills";
document.getElementById("bill").textContent = "";

var elecContainer = document.querySelector(".elec-bill");
var elecHtml = "";
var totalBill = 0;

function calculateBaseAmount(units) {
  if (units <= 100) {
    return units * 0.05;
  } else if (units <= 300) {
    return units * 0.1;
  } else if (units <= 600) {
    return units * 0.15;
  } else {
    return units * 0.2;
  }
}

function calculateSurCharges(type, baseAmount) {
  if (type === "Commercial") {
    return baseAmount * 0.05;
  }
  return 0;
}

function calculateDiscount(amount) {
  if (amount < 50) {
    return amount * 0.1;
  } else {
    return amount;
  }
}

function calculateTax(amount, type) {
  if (type === "Commercial") {
    return amount * 0.15;
  } else if (type === "Residential") {
    return amount * 0.05;
  } else {
    return amount;
  }
}

function calculatefinalBill(baseAmount, surCharges, discount, tax) {
  return baseAmount + surCharges + discount + tax;
}

customers.forEach((element) => {
  const amount = calculateBaseAmount(element.units);
  const surCharges = calculateSurCharges(element.type, amount);
  const discount = calculateDiscount(amount);
  const tax = calculateTax(amount, element.type);
  totalBill += amount;
  const finalBill = calculatefinalBill(amount, surCharges, discount, tax);

  const cardColor = billColor(finalBill, badge);
  // const badgeValue = badgeValue(finalBill); 

  elecHtml += `<div class="col-md-6 col-lg-3">
               <div class="card h-100 shadow-sm" ">
                 <div class="card-body">
                 <span class = "badge mb-3 mt-2" style="background-color: ${cardColor.cardColor};"><h5> ${cardColor.text}</h5></span>
                  <h5 class="card-title">${element.name}</h5>
                   <p class="card-text">
                     <b> Type : </b> ${element.type} <br>
                     <b> Units : </b> ${element.units} <br>
                     <b> Sur Charges : </b> $${surCharges.toFixed(2)} <br>
                     <b> Discount : </b> $${discount.toFixed(2)} <br>
                     <b> Tax : </b> $${tax.toFixed(2)} <br>
                     <b> Discount : </b> $${discount.toFixed(2)} <br>
                     <b> Final Bill : </b> $${finalBill.toFixed(2)} 
                   </p>
                 </div>
               </div>
             </div>`;
});

elecContainer.innerHTML = elecHtml;
document.getElementById("bill-amount").innerHTML =
  ` <p>Total Base Amount</p>$ ${totalBill.toFixed(2)}`;

  var badge = document.querySelectorAll(".badge");


  function billColor(finalBill, badge) {
    if(finalBill < 20){
      return{
        cardColor: "lightgreen",
        text: "Low"
      }
    }
    else if (finalBill >= 20 && finalBill <= 80){
      return {
        cardColor: "yellow",
        text: "Medium"
      };
    }
    else{
      return {
        cardColor: "lightcoral",
        text: "High"
      };
  }
  }
  