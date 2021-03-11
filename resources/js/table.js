"use strict";
var TBL = []; //array of objects to store the table data

// $("table#details tr").each(function () {
//   var arrayOfThisRow = [];
//   var tableData = $(this).find("td");
//   var tableData = $(this).find("td");
//   if (tableData.length > 0) {
//     tableData.each(function () {
//       arrayOfThisRow.push($(this).text());
//     });
//     TBL.push(arrayOfThisRow);
//   }
// });

// alert(TBL);

/*Get Header*/
var xKey = [];
$("#details thead td").each(function () {
  var tempColName = $(this).text();
  {
    xKey.push(tempColName);
  }
});

/*Get Data*/
// var xValue = [];
// $("#details tbody tr").each(function () {
//   var arrayOfThisRow = [];
//   var tableData = $(this).find("td");
//   if (tableData.length > 0) {
//     tableData.each(function () {
//       arrayOfThisRow.push($(this).text());
//     });
//     xValue.push(arrayOfThisRow);
//   }
// });
// console.log(xValue);
// add objects to the TBl variable
for (var i = 0; i < 0; i++) {
  var obj = {};
  for (var j = 0; j < xKey.length; j++) {
    obj[xKey[j]] = "";
  }
  TBL.push(obj);
}

// insert data to TBL
function render() {
  var table = document.getElementById("datas");
  table.innerHTML = "";
  var tr = "";
  TBL.forEach((x) => {
    tr += "<tr>";
    tr +=
      "<td>" +
      x["Home Price"] +
      "</td>" +
      "<td>" +
      x["Credit Score"] +
      "</td>" +
      "<td>" +
      x["Interest Rate"] +
      "</td>" +
      "<td>" +
      x["Monthly Rent"] +
      "</td>" +
      "<td>" +
      x["Monthly Savings"] +
      "</td>" +
      "<td>" +
      x["Initial Budget"] +
      "</td>" +
      "<td>" +
      x["DP, %"] +
      "</td>" +
      "<td>" +
      x["DP, $"] +
      "</td>" +
      "<td>" +
      x["Mon Sav"] +
      "</td>" +
      "<td>" +
      x["Loan"] +
      "</td>" +
      "<td>" +
      x["LTV"] +
      "</td>" +
      "<td>" +
      x["Type"] +
      "</td>" +
      "<td>" +
      x["PMT"] +
      "</td>" +
      "<td>" +
      x["Extra"] +
      "</td>" +
      "<td>" +
      x["PMI Rate"] +
      "</td>" +
      "<td>" +
      x["PMI Monthly"] +
      "</td>" +
      "<td>" +
      x["PMI Payment"] +
      "</td>" +
      "<td>" +
      x["Property Taxes"] +
      "</td>" +
      "<td>" +
      x["Home Insurence"] +
      "</td>" +
      "<td>" +
      x["Monthly"] +
      "</td>" +
      "<td>" +
      x["Mortgage"] +
      "</td>" +
      "<td>" +
      x["Rent"] +
      "</td>" +
      "<td>" +
      x["S+M+R"] +
      "</td>" +
      "<td>" +
      x["Overpay"] +
      "</td>";
    tr += "</tr>";
  });
  table.innerHTML += tr;
}

// dinamically populate 4 elements into TBL
var price = 350000;
for (let i = 0; i < 4; i++) {
  var newPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits: Math.trunc(Math.abs(price)).toFixed().length,
  }).format(price);
  price += 50000;
  TBL.push({
    "Home Price": newPrice,
  });
}

render();

console.log(TBL);
