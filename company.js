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

// document.getElementById("grid-card").textContent = "company-data";
// document.getElementById("grid-card-p").textContent = "";

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
