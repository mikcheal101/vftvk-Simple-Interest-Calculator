
// function to compute the future value
function compute()
{
    var principal = new Number(document.getElementById("principal").value);
    var rate = new Number(document.getElementById("rate").value);
    var years = new Number(document.getElementById("years").value);
    var interest = principal * years * rate / 100;

    var today = new Date();
    var future_date = new Date(today.getFullYear() + years, today.getMonth(), today.getDate());

    if(principal <= 0) 
    {
        // alert the user once a principal less than or
        // equals to zeros is entered
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    } 
    else
    {
        // the summary message to display once the computation is completed
        var message = "If you deposit "+ principal +",<br>";
        message += "at an interest rate of "+ rate + "%.";
        message += "You will receive an amount of "+ interest +",<br>";
        message += "in the year "+future_date.getFullYear();
        document.getElementById("result").innerHTML = message;
    }
}

// function to dynamiucally update the rate label
function rateUpdated()
{
    var rate = document.getElementById("rate").value;
    document.getElementById("current_rate").innerHTML = rate + " %";
}
        
