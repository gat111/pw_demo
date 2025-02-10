function login() {
  // ログイン処理 (ここでは簡略化)
  window.location.href = "menu.html";
}

function collectData() {
  // データ収集処理 (ここでは簡略化)
  window.location.href = "processing.html";
  setTimeout(function () {
    window.location.href = "data_summary.html";
    displaySummary();
  }, 10000); // 10秒後に遷移
}

function displaySummary() {
  const department = document.getElementById("department").value;
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;

  const summaryData = {
    department: department,
    period: `${startDate} - ${endDate}`,
    revenue: Math.floor(Math.random() * 1000000),
    expenses: Math.floor(Math.random() * 500000),
    profit: Math.floor(Math.random() * 500000),
  };

  const tableBody = document.querySelector("#summaryTable tbody");
  const row = tableBody.insertRow();
  row.insertCell().textContent = summaryData.department;
  row.insertCell().textContent = summaryData.period;
  row.insertCell().textContent = summaryData.revenue;
  row.insertCell().textContent = summaryData.expenses;
  row.insertCell().textContent = summaryData.profit;
}

function downloadData(type) {
  alert(`${type}形式でダウンロードします (未実装)`);
}

function goBack() {
  window.location.href = "data_collection.html";
}
