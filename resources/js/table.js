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
  TBL.forEach((x) => {
    let trdom = document.createElement("tr");
    let tr =
      "<td>" +
      x["Home Price"] +
      "</td>" +
      "<td class='creditScore' id='score'>" +
      x["Credit Score"] +
      "</td>" +
      "<td class='rate'>" +
      "</td>" +
      "<td class='rent'>" +
      "</td>" +
      "<td class='savings'>" +
      "</td>" +
      "<td class='budget'>" +
      "</td>" +
      "<td class='downPaymentPercent' id='dp'>" +
      x["DP, %"] +
      "</td>" +
      "<td>" +
      x["DP, $"] +
      "</td>" +
      "<td>" +
      x["Months to Save"] +
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
    trdom.innerHTML = tr;
    trdom.getElementsByClassName("rate")[0].appendChild(
      addNumberInput(x["Interest Rate"], function () {
        x["Interest Rate"] = isFloat(this.value);
        //console.log(TBL);
      })
    );

    trdom.getElementsByClassName("rent")[0].appendChild(
      addNumberInput(x["Monthly Rent"], function () {
        x["Monthly Rent"] = toCurrency(isInt(this.value));

        //console.log(TBL);
      })
    );
    trdom.getElementsByClassName("budget")[0].appendChild(
      addNumberInput(x["Initial Budget"], function () {
        x["Initial Budget"] = toCurrency(isInt(this.value));

        console.log(TBL);
      })
    );
    trdom.getElementsByClassName("savings")[0].appendChild(
      addNumberInput(x["Monthly Savings"], function () {
        x["Monthly Savings"] = toCurrency(isInt(this.value));

        console.log(TBL);
      })
    );

    table.appendChild(trdom);
  });
  addDropDownMenu();
}

//format number to currency
function toCurrency(number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits: Math.trunc(Math.abs(number)).toFixed().length,
  }).format(number);
}
// dinamically populate 4 elements into TBL
var price = 350000;
for (let i = 0; i < 4; i++) {
  var newPrice = toCurrency(price);
  price += 50000;
  TBL.push({
    "Home Price": newPrice,
    "Interest Rate": 0,
    "Monthly Rent": 0,
    "Monthly Savings": 0,
    "Initial Budget": 0,
  });
}

render();

function addNumberInput(val, onchange) {
  let inp = document.createElement("input");
  inp.setAttribute("value", val);
  inp.addEventListener("input", onchange);
  return inp;
}

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
      '<option value="700"' +
      (TBL[i]["Credit Score"] == "700" ? "selected" : "") +
      ">700-719</option>" +
      '<option value="720"' +
      (TBL[i]["Credit Score"] == "720" ? "selected" : "") +
      ">720-739</option>" +
      '<option value="740"' +
      (TBL[i]["Credit Score"] == "740" ? "selected" : "") +
      ">740-759</option>" +
      '<option value="760"' +
      (TBL[i]["Credit Score"] == "760" ? "selected" : "") +
      ">760-779</option>" +
      '<option value="780"' +
      (TBL[i]["Credit Score"] == "780" ? "selected" : "") +
      ">780-800</option>" +
      "</select>";
    lest_dp =
      "<select>" +
      '<option value="1">DP, %</option>' +
      '<option value="5"' +
      (TBL[i]["DP, %"] == "5" ? "selected" : "") +
      ">5%</option>" +
      '<option value="10"' +
      (TBL[i]["DP, %"] == "10" ? "selected" : "") +
      ">10%</option>" +
      '<option value="15"' +
      (TBL[i]["DP, %"] == "15" ? "selected" : "") +
      ">15%</option>" +
      '<option value="20"' +
      (TBL[i]["DP, %"] == "20" ? "selected" : "") +
      ">20%</option>" +
      '<option value="25"' +
      (TBL[i]["DP, %"] == "25" ? "selected" : "") +
      ">25%</option>" +
      '<option value="30"' +
      (TBL[i]["DP, %"] == "30" ? "selected" : "") +
      ">30%</option>" +
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
      TBL[i]["Months to Save"] = monthsToSave(
        TBL[i]["DP, $"],
        TBL[i]["Initial Budget"],
        TBL[i]["Monthly Savings"]
      );

      render();
      console.log(TBL);
    });
  }
}

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

// convert number to float to calculate interest rate
function isFloat(num) {
  let result = 0;
  if (parseFloat(num)) {
    result = parseFloat(num);
    result += "%";
  } else {
    alert("Invalid input for Interest Rate");
  }

  return result;
}
//convert number to integer
function isInt(num) {
  let result = 0;
  if (parseInt(num)) {
    result = parseInt(num);
  } else {
    alert("Invalid input for Monthly Rent");
  }
  return result;
}

//calculate how many months to save for downpayment

function monthsToSave(dp, budget, savings) {
  const dp_num = toNumber(dp);
  const budget_num = toNumber(budget);
  const savings_num = toNumber(savings);

  const result = (dp_num - budget_num) / savings_num;

  return result > 0 ? result : 0;
}
