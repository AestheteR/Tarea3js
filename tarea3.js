var valor = document.getElementById("value");
valor.addEventListener("keyup",factorial);
outputDiv = document.getElementById("resultado");
mensaje = document.getElementById("out mensaje")
function factorial(){
    if (valor.value==""){
        return;
    }
    number = valor.value;
    number = parseFloat(number)

    let resultado = 1;
    while (number !==0){
        resultado *= number;
        number -= 1;
        
    }
    mensaje.innerHTML = "El factorial del número " + valor.value + " es:"
    outputDiv.innerHTML = resultado;
}