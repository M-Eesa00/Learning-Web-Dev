const customers = [
  { name: "Ali Khan", type: "Residential", units: 85 },
  { name: "TechNest Pvt Ltd", type: "Commercial", units: 450 },
  { name: "Sara Malik", type: "Residential", units: 320 },
  { name: "City Hospital", type: "Commercial", units: 750 },
  { name: "Usman Tariq", type: "Residential", units: 210 },
  { name: "Bilal Ahmed", type: "Residential", units: 580 },
  { name: "QuickMart Store", type: "Commercial", units: 13000 },
];

var elecContainer = document.querySelector(".elec-bill");
var elecHtml = `<div class="col-12"><h2 class="mb-4 text-dark text-center mt-3">Electricity Bills</h2></div>`;
var totalBill = 0;

function calculateBaseAmount(units) {
  if (units <= 0) {
    return 0;
  } else if (units <= 100) {
    return units * 0.05;
  } else if (units <= 300) {
    return units * 0.1;
  } else if (units <= 600) {
    return units * 0.15;
  } else {
    return units * 0.2;
  }
}

function calculateSurcharge(units) {
  if (units > 300) {
    return 10.0;
  }
  return 0.0;
}

function calculateDiscount(subtotal) {
  if (subtotal > 50) {
    return subtotal * 0.1;
  }
  return 0.0;
}

function calculateTax(amount, customerType) {
  if (customerType.toLowerCase() === "commercial") {
    return amount * 0.15; // 15% tax
  } else if (customerType.toLowerCase() === "residential") {
    return amount * 0.05;
  }
  return 0.0;
}

function getBillTableClass(finalBill) {
  if (finalBill < 20) {
    return "table-success";
  } else if (finalBill <= 80) {
    return "table-warning";
  } else {
    return "table-danger";
  }
}

customers.forEach((element) => {
  const amount = calculateBaseAmount(element.units);
  const surCharges = calculateSurcharge(element.units);
  const subtotalBeforeDiscount = amount + surCharges;
  const discount = calculateDiscount(subtotalBeforeDiscount);
  const taxableAmount = subtotalBeforeDiscount - discount;
  const tax = calculateTax(taxableAmount, element.type);
  const finalBill = taxableAmount + tax;
  totalBill += amount;

  const cardColor = billColor(finalBill);

  elecHtml += `<div class="col-md-6 col-lg-3 mb-3">
               <div class="card h-100 shadow-sm">
                 <div class="card-body">
                 <span class = "badge mb-3 mt-2" style="background-color: ${cardColor.cardColor};"><h5> ${cardColor.text}</h5></span>
                  <h5 class="card-title">${element.name}</h5>
                   <p class="card-text">
                     <b> Type : </b> ${element.type} <br>
                     <b> Units : </b> ${element.units} <br>
                     <b> Gross Amount : </b> $${amount.toFixed(2)} <br>
                     <b> Sur Charges : </b> $${surCharges.toFixed(2)} <br>
                     <b> Tax : </b> $${tax.toFixed(2)} <br>
                     <b> Discount : </b> $${discount.toFixed(2)} <br>
                     <b> Final Bill : </b> $${finalBill.toFixed(2)} 
                   </p>
                 </div>
               </div>
             </div>`;

  //TABLE

  var billTableBody = document.getElementById("billTableBody");

  billTableBody.innerHTML = customers
    .map((element) => {
      const amount = calculateBaseAmount(element.units);
      const surCharges = calculateSurcharge(element.units);
      const subtotalBeforeDiscount = amount + surCharges;
      const discount = calculateDiscount(subtotalBeforeDiscount);
      const taxableAmount = subtotalBeforeDiscount - discount;
      const tax = calculateTax(taxableAmount, element.type);
      const finalBill = taxableAmount + tax;
      totalBill += amount;
      const tableClass = getBillTableClass(finalBill);
      return `
      <tr class="${tableClass}">
        <td>${element.name}</td>
        <td>${element.type}</td>
        <td>${element.units}</td>
        <td>$${amount.toFixed(2)}</td>
        <td>$${surCharges.toFixed(2)}</td>
        <td>$${discount.toFixed(2)}</td>
        <td>$${tax.toFixed(2)}</td>
        <td>$${finalBill.toFixed(2)}</td>
      </tr>
    `;
    })
    .join("");
});

elecContainer.innerHTML = elecHtml;

function billColor(finalBill) {
  if (finalBill < 20) {
    return {
      cardColor: "lightgreen",
      text: "Low",
    };
  } else if (finalBill >= 20 && finalBill <= 80) {
    return {
      cardColor: "yellow",
      text: "Medium",
    };
  } else {
    return {
      cardColor: "lightcoral",
      text: "High",
    };
  }
}
