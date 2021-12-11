var currentNumber = 0;

document.getElementById("subtrair").addEventListener("click", function(){
    if (currentNumber >= -9) {
        currentNumber = currentNumber - 1;
        document.getElementById("currentNumber").innerHTML = currentNumber;
    } else {}
});

document.getElementById("adicionar").addEventListener("click", function(){
    if (currentNumber <= 9) {
        currentNumber = currentNumber + 1;
        document.getElementById("currentNumber").innerHTML = currentNumber;
    } else {}
});

function red(){
    if (currentNumber <= 0) {
    document.getElementById("currentNumber").classList.add("negativo");
    }
};

function black(){
    if (currentNumber >= -1) {
        document.getElementById("currentNumber").classList.remove("negativo");
    }
};