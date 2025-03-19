function convertCurrency() {
    let exchangeRate = parseFloat(document.getElementById("exchangeRate").value);
    let usdAmount = parseFloat(document.getElementById("usdAmount").value);

    if (isNaN(exchangeRate) || isNaN(usdAmount)) {
        alert("올바른 값을 입력하세요.");
        return;
    }

    let krwResult = exchangeRate * usdAmount;
    document.getElementById("krwResult").textContent = krwResult.toLocaleString();
}
