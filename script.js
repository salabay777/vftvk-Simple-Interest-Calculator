function compute()
{
    // Input values
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var result = document.getElementById("result");
    // Show results
    result.innerHTML =
        "If you deposit "+ principal +
        ",\<br\>at an interest rate of " + rate +
        "%\<br\>You will receive an amount of " + interest +
        ",\<br\>in the year " + year + "\<br\>"
}

// Update range value
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

// Check for positive values
function validateAmount() {
    var principal = document.getElementById("principal").value;
    if (!parseInt(principal) > 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
}
