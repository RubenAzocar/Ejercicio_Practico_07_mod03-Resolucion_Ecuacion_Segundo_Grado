// 1. Solicitar valores a, b, c con prompt()
let a = parseFloat(prompt("Ingresa el valor de a:"));
let b = parseFloat(prompt("Ingresa el valor de b:"));
let c = parseFloat(prompt("Ingresa el valor de c:"));

// 2. Declarar función discriminante
function discriminante(a, b, c) {
    return Math.pow(b, 2) - 4 * a * c;
}

// 3. Calcular discriminante
let disc = discriminante(a, b, c);
let resultado = "";

// 4. Evaluar discriminante y calcular soluciones
if (disc > 0) {
    let x1 = (-b + Math.sqrt(disc)) / (2 * a);
    let x2 = (-b - Math.sqrt(disc)) / (2 * a);
    resultado = "Dos soluciones:\nx1 = " + x1 + "\nx2 = " + x2;
} else if (disc === 0) {
    let x = -b / (2 * a);
    resultado = "Una solución:\nx = " + x;
} else {
    resultado = "No existen soluciones reales";
}

// 5. Presentar resultado en 3 formas
window.alert(resultado);
console.log(resultado);
document.getElementById("resultado").innerHTML = resultado.replace(/\n/g, "<br>");
