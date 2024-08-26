// Mapea cada vocal a su versión encriptada
const directriz = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function encriptarTexto(texto) {
    let textoEncriptado = ""; // Inicializa una variable para almacenar el texto encriptado
    for (let i = 0; i < texto.length; i++) { // Recorre cada letra del texto ingresado
        const letra = texto[i].toLowerCase(); // Convierte la letra a minúscula
        const reemplazo = directriz.find(elemento => elemento[0] === letra); // Busca la letra en la directriz
        textoEncriptado += reemplazo ? reemplazo[1] : letra; // Si encuentra un reemplazo, usa la versión encriptada; si no, usa la letra original
    }
    return textoEncriptado; // Retorna el texto encriptado
}

function desencriptarTexto(texto) {
    let textoDesencriptado = texto; // Inicializa una variable para almacenar el texto desencriptado
    for (let i = 0; i < directriz.length; i++) { // Recorre cada mapeo en la directriz
        const regex = new RegExp(directriz[i][1], "g"); // Crea una expresión regular para encontrar todas las ocurrencias de la cadena encriptada
        textoDesencriptado = textoDesencriptado.replace(regex, directriz[i][0]); // Reemplaza las cadenas encriptadas por las letras originales
    }
    return textoDesencriptado; // Retorna el texto desencriptado
}

// Función que se ejecuta al hacer clic en el botón "Encriptar"
function encriptar() {
    const textoIngresado = document.getElementById("textoInicial").value; // Obtiene el texto ingresado por el usuario
    const textoEncriptado = encriptarTexto(textoIngresado); // Encripta el texto ingresado
    document.getElementById("textoFinal").value = textoEncriptado; // Muestra el texto encriptado en el textarea de resultado
}

// Función que se ejecuta al hacer clic en el botón "Desencriptar"
function desencriptar() {
    const textoIngresado = document.getElementById("textoInicial").value; // Obtiene el texto ingresado por el usuario
    const textoDesencriptado = desencriptarTexto(textoIngresado); // Desencripta el texto ingresado
    document.getElementById("textoFinal").value = textoDesencriptado; // Muestra el texto desencriptado en el textarea de resultado
}

// Función para copiar el texto mostrado en el textarea que muestra el resultado
function copiarTexto() {
    const textarea = document.getElementById('textoFinal'); // Obtiene el elemento textarea donde está el texto encriptado
    textarea.select(); // Selecciona todo el texto del textarea
    document.execCommand('copy'); // Copia el texto seleccionado al portapapeles
}

// Asociación de funciones a eventos onclick de los botones
document.getElementById("botonEncriptar").onclick = encriptar; // Asocia la función encriptar al botón "Encriptar"
document.getElementById("botonDesencriptar").onclick = desencriptar; // Asocia la función desencriptar al botón "Desencriptar"
document.getElementById("botonCopiar").onclick = copiarTexto; // Asocia la función copiarTexto al botón "Copiar"

// Pruebas en consola
let texto = "hola";
console.log("Texto original:", texto); // Muestra el texto original en la consola
console.log("Texto encriptado:", encriptarTexto(texto)); // Muestra el texto encriptado en la consola
console.log("Texto desencriptado:", desencriptarTexto(encriptarTexto(texto)));  // Muestra el texto desencriptado en la consola, comprobando el ciclo completo de encriptar/desencriptar.

