function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var num_years = document.getElementById("years").value;

    var interest = principal*rate*num_years /100;

    var amount = parseInt(principal) + parseFloat(interest)
    var result = document.getElementById("result");
    
    var year = new Date().getFullYear() + parseInt(num_years);

    if(principal <1){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }else{
        result.innerHTML = "If you deposit $ " + "<mark>" + principal + "</mark>" + "\<br\>\
        at an interest rate of " + rate + "%,\<br\>\
        You will receive an amount of $ " + interest + "\<br\>\
        in the year " + year + "\<br\>."
    }
}

function updateRate(){
   var rateval = document.getElementById("rate").value; 
   document.getElementById("rate_val").innerText = rateval;
}
        