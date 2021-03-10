"use strict";
var TBL = [];

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

for (var i = 0; i < 5; i++) {
  var obj = {};
  for (var j = 0; j < xKey.length; j++) {
    obj[xKey[j]] = "";
  }
  TBL.push(obj);
}

//console.log(TBL);
