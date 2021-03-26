"use strict";
var TBL = []; //array of objects to store the table data

/*Get Header*/
var xKey = [];
$("#details thead td").each(function () {
  var tempColName = $(this).text();
  {
    xKey.push(tempColName);
  }
});

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
      "<td class='creditScore' id='score'>" +
      x["Credit Score"] +
      "</td>" +
      "<td id='rate'>" +
      x["Interest Rate"] +
      "</td>" +
      "<td id='rent'>" +
      x["Monthly Rent"] +
      "</td>" +
      "<td id='savings'>" +
      x["Monthly Savings"] +
      "</td>" +
      "<td id='budget'>" +
      x["Initial Budget"] +
      "</td>" +
      "<td class='downPaymentPercent' id='dp'>" +
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

//format number to currency
function toCurrency(number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits: Math.trunc(Math.abs(price)).toFixed().length,
  }).format(number);
}
// dinamically populate 4 elements into TBL
var price = 350000;
for (let i = 0; i < 4; i++) {
  var newPrice = toCurrency(price);
  price += 50000;
  TBL.push({
    "Home Price": newPrice,
    "Interest Rate": '<input value=""></input>',
    "Monthly Rent": '<input value=""></input>',
    "Monthly Savings": '<input value=""></input>',
    "Initial Budget": '<input value=""></input>',
  });
}

render();

//console.log(TBL);
//method to display dropdown  and store selected option in TBL
function addDropDownMenu() {
  var target_cell_Score = document.getElementsByClassName("creditScore");
  var target_cell_dp = document.getElementsByClassName("downPaymentPercent");

  console.log(target_cell_Score);
  console.log(target_cell_dp);
  let list = "";
  let lest_dp = "";
  for (let i = 0; i < target_cell_Score.length; i++) {
    list =
      "<select>" +
      '<option value="1">Credit Score</option>' +
      '<option value="700">700-719</option>' +
      '<option value="720">720-739</option>' +
      '<option value="740">740-759</option>' +
      '<option value="760">760-779</option>' +
      '<option value="780">780-800</option>' +
      "</select>";
    lest_dp =
      "<select>" +
      '<option value="1">DP, %</option>' +
      '<option value="5">5%</option>' +
      '<option value="10">10%</option>' +
      '<option value="15">15%</option>' +
      '<option value="20">20%</option>' +
      '<option value="25">25%</option>' +
      '<option value="30">30%</option>' +
      "</select>";

    target_cell_Score.item(i).innerHTML = list;
    target_cell_dp.item(i).innerHTML = lest_dp;
    let mySelect_score = target_cell_Score.item(i).firstChild;
    let mySelect_dp = target_cell_dp.item(i).firstChild;
    mySelect_score.addEventListener("change", function () {
      TBL[i]["Credit Score"] = this.value;
      console.log(TBL);
    });
    mySelect_dp.addEventListener("change", function () {
      TBL[i]["DP, %"] = this.value;
      TBL[i]["DP, $"] = toCurrency(calcDownPayment(i));

      render();
      console.log(TBL);
    });
  }
}
addDropDownMenu();

//Calculate DP$  based on Home Price and DP% columns
function calcDownPayment(row) {
  let down_payment_persent = Number(TBL[row]["DP, %"]) / 100;
  var currency = TBL[row]["Home Price"];
  var price = toNumber(currency);
  const down_payment = price * down_payment_persent;
  return down_payment;
}

// convert to number
function toNumber(str) {
  return Number(str.replace(/[^0-9\.]+/g, ""));
}

let rate = document.getElementById("rate");
rate.addEventListener("input", function () {
  console.log(this.value);
});
