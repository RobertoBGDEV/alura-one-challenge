function EncriptarTexto() {
    var array = document.getElementById("texto-ingresado").value;
    var textoCodificado = "";

    if (array == "") {
        textoCodificado = '<img src="imagenes/Muñeco.png" alt=""><h3>Ningún mensaje fue encontrado</h3><p>Ingresa el texto que desees encriptar o desencriptar.</p>';
    } else {
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            switch (element) {
                case "a":
                    textoCodificado += "ai";
                    break;
                case "e":
                    textoCodificado += "enter";
                    break;
                case "i":
                    textoCodificado += "imes";
                    break;
                case "o":
                    textoCodificado += "ober";
                    break;
                case "u":
                    textoCodificado += "ufat";
                    break;
                default:
                    textoCodificado += element;
                    break;
            }
        }
    }

    document.getElementById("divtexto").innerHTML = textoCodificado;
}

function DesencriptarTexto() {
    var array = document.getElementById("texto-ingresado").value;
    var textoCodificado = "";

    if (array == "") {
        textoCodificado = '<img src="imagenes/Muñeco.png" alt=""><h3>Ningún mensaje fue encontrado</h3><p>Ingresa el texto que desees encriptar o desencriptar.</p>';
    } else {
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            switch (element) {
                case "a":
                    textoCodificado += "a";
                    index += 1;
                    break;
                case "e":
                    textoCodificado += "e";
                    index += 4;
                    break;
                case "i":
                    textoCodificado += "i";
                    index += 3;
                    break;
                case "o":
                    textoCodificado += "o";
                    index += 3;
                    break;
                case "u":
                    textoCodificado += "u";
                    index += 3;
                    break;
                default:
                    textoCodificado += element;
                    break;
            }
        }
    }

    document.getElementById("divtexto").innerHTML = textoCodificado;
}

var button = document.getElementById("encriptador");
button.onclick = EncriptarTexto;

var button2 = document.getElementById("desencriptador");
button2.onclick = DesencriptarTexto;
