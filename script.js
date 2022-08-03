function encriptar() {
    var valor = 0;
    encriptado = ""
    let textoingresado = document.getElementById("textoingresado").value;
    let str = textoingresado
    let arr = Array.from(str);
    for (i = 0; i < str.length; i++) {
        if (arr[i].search(/[^A-Z]+/) === -1 | arr[i].search(/[^0-9]+/) === -1 | arr[i].search(/[^!@#$%^&*.,:?¡¿/]+/) === -1 ) {
            alert("Ingrese solo minusculas; no se puede ingresar numeros o signos ");
            var contenido1 = document.getElementById("textoingresado");
            contenido1.value = "";
            valor = 1
            break;
        }
        
        if (arr[i] == "a") {
            encriptado = encriptado + "ai"
        }
        else if (arr[i] == "e") {
            encriptado = encriptado + "enter"
        }
        else if (arr[i] == "o") {
            encriptado = encriptado + "ober"
        }
        else if (arr[i] == "u") {
            encriptado = encriptado + "ufat"
        }
        else if (arr[i] == "i") {
            encriptado = encriptado + "imes"
        }
        else {
            encriptado = encriptado + arr[i]
        }
    }
    if (valor == 0) {
        var contenido = document.getElementById("texto2");
        contenido.value = encriptado;
    }
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("texto2").innerHTML = encriptado;
    document.getElementById("textoingresado").innerHTML = " ";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar() {
    let textoingresado = document.getElementById("textoingresado").value;
    console.log(textoingresado);
    arr = textoingresado.replaceAll("ai", "a")
    arr = arr.replaceAll("enter", "e")
    arr = arr.replaceAll("imes", "i")
    arr = arr.replaceAll("ufat", "u")
    arr = arr.replaceAll("ober", "o")
    var contenido = document.getElementById("texto2");
    contenido.value = arr;
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("texto2").innerHTML = encriptado;
    document.getElementById("textoingresado").innerHTML = " ";
    document.getElementById("copiar").style.display = "inherit";
}
function copiar() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand('copy');
    alert("Texto copiado en el portapapeles");
  }

