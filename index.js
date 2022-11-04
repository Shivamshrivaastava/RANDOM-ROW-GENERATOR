function appendRow() {
  let cell, firstRow, row;
  let table = document.getElementById("tbl");
  firstRow = table.rows[0];
  row = table.insertRow(-1);
  row.className = "tr";
  // console.log("hi");
  cell = row.insertCell(0);
  console.log(cell);
  // cell.innerHTML = (table.rows.length -1);
  for (let i =1; i < firstRow.cells.length; i++) {
    cell = row.insertCell(-1)
    switch (i) {
      case 1:
        cell.innerHTML = "adarsh";
        break;
      case 2:
        cell.innerHTML = "singh";
        break;
      case 3:
        cell.innerHTML = "banaras";
        break;
      case 4:
        cell.innerHTML = "india";
        break;
    }
  }
  for (let i = 1; i < table.rows.length; i++) {
    table.rows[i].cells[0].innerHTML = i;
  }
}

function appendRowTop() {
  let cell, firstRow, row;
  let table = document.getElementById("tbl");
  firstRow = table.rows[0];
  row = table.insertRow(1);
  row.className = "tr";
  cell = row.insertCell(0);
  // cell.innerHTML = '';
  for (let i =1; i < firstRow.cells.length; i++) {
    cell = row.insertCell(-1)
    switch (i) {
      case 1:
        cell.innerHTML = "adarsh";
        break;
      case 2:
        cell.innerHTML = "singh";
        break;
      case 3:
        cell.innerHTML = "banaras";
        break;
      case 4:
        cell.innerHTML = "Indonesia";
        break;
    }
  }
  for (let i = 1; i < table.rows.length; i++) {
    table.rows[i].cells[0].innerHTML = i;
  }
}
