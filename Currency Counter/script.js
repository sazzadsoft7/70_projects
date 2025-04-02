function countCurrency() {
    let amount = parseInt(document.getElementById("amount").value);
    if (isNaN(amount) || amount <= 0) {
        document.getElementById("result").innerHTML = "Please enter a valid amount!";
        return;
    }

    let notes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]; // Available notes & coins
    let result = "<h3>Currency Breakdown:</h3>";

    notes.forEach(note => {
        if (amount >= note) {
            let count = Math.floor(amount / note);
            amount = amount % note;
            result += `<p>৳${note} × ${count}</p>`;
        }
    });

    document.getElementById("result").innerHTML = result;
}
