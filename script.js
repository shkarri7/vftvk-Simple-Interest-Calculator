function Start() {
    slider = document.getElementById("rate");
    output = document.getElementById("rateval");
    output.innerHTML = slider.value + "%"; 


    slider.oninput = function() {
    output.innerHTML = this.value + "%";
    }    
}

function compute()
{
    curYear = new Date().getFullYear()
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    n = document.getElementById("nyears").value; 
    endyear = curYear + parseInt(n)

    resulttext = document.getElementById("restext")

    if (p < 1) {
        alert("Enter a positive number")
        p = ""
    }
    else {
        result = p * (r / 100) * n 
        resulttext.innerHTML = "If you deposit " + `<span>${p}</span>, <br/>` +
        "at an interest rate of " + `<span>${r}%</span>. <br/>` +
        "You will receive an amount of " + `<span>${result}</span>, <br/>` +
        "in the year " + `<span>${endyear}</span>.`
    }

}
        
