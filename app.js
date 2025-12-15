let variableA = parseFloat(prompt("Ingresa el valor de a: "));
let variableB = parseFloat(prompt("Ingresa el valor de b: "));
let variableC = parseFloat(prompt("Ingresa el valor de c: "));

function calcularDiscriminante(a, b, c) {
    return Math.pow(b, 2) - 4 * a * c;
}

if (variableA === 0) {
    alert("Error: El valor de 'a' no puede ser cero en una ecuación de segundo grado.");
    console.log("Error: a = 0. No es una ecuación cuadrática.");
    document.getElementById("resultado").innerHTML = "❌ Error: 'a' no puede ser cero.";
} else {
    let discriminante = calcularDiscriminante(variableA, variableB, variableC);
    let mensaje = "";

    if (discriminante > 0) {
        let x1 = (-variableB + Math.sqrt(discriminante)) / (2 * variableA);
        let x2 = (-variableB - Math.sqrt(discriminante)) / (2 * variableA);
        mensaje = "✅ La ecuación tiene 2 soluciones reales distintas:\n\n" +
            "x₁ = " + x1 + "\n" +
            "x₂ = " + x2 + "\n\n" +
            "Discriminante = " + discriminante;
    } else if (discriminante === 0) {
        let x = -variableB / (2 * variableA);
        mensaje = "✅ La ecuación tiene 1 solución única (raíz doble):\n\n" +
            "x = " + x + "\n\n" +
            "Discriminante = " + discriminante;
    } else {
        mensaje = "❌ La ecuación NO tiene soluciones reales.\n\n" +
            "El discriminante es negativo: " + discriminante + "\n" +
            "(Las soluciones serían números complejos/imaginarios)";
    }

    alert(mensaje);
    console.log(mensaje);
    console.log("-----------------------------------");
    console.log("Valores ingresados:");
    console.log("a =", variableA);
    console.log("b =", variableB);
    console.log("c =", variableC);
    document.getElementById("resultado").innerHTML = mensaje.replace(/\n/g, "<br>");
}
