function myFunction() {
    var FirstNumber = parseInt(document.getElementById("firstNumber").value);
    var SecondNumber = parseFloat(document.getElementById("secondNumber").value);
    var Total = FirstNumber % SecondNumber;


 if(String(FirstNumber) == "NaN" || String(SecondNumber) == "NaN")
 
 {
    alert("Merci de n'utiliser que des nombre")
    return
 }
    alert(Total);
}
