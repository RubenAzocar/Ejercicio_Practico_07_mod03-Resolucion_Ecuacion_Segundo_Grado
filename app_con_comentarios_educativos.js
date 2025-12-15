// =================================================================
// EJERCICIO: RESOLUCIÓN DE ECUACIÓN DE SEGUNDO GRADO
// Forma: ax² + bx + c = 0
// =================================================================

// -----------------------------------------------------------------
// PASO 1: SOLICITAR DATOS AL USUARIO CON prompt()
// -----------------------------------------------------------------

/*
¿POR QUÉ prompt()?
- El ejercicio lo pide explícitamente
- Ventana emergente simple
- No requiere HTML adicional
- Ideal para ejercicios básicos

¿POR QUÉ parseFloat()?
- prompt() devuelve TEXTO (string)
- parseFloat() convierte a NÚMERO DECIMAL
- Necesario para hacer cálculos matemáticos
- Ejemplo: "3.5" → 3.5
- El ejercicio lo pide explícitamente

ALTERNATIVAS NO USADAS:
- parseInt() → Solo enteros, pierde decimales
- Number() → Funciona pero no lo piden
- Formulario HTML → Más complejo, no era requisito

¿POR QUÉ "let" y no "var" o "const"?
- let → Moderna, alcance de bloque, estándar actual
- const → Más restrictiva, pero podría usarse
- var → NUNCA usar, obsoleta, problemas de alcance
*/

let a = parseFloat(prompt("Ingresa el valor de a:"));
let b = parseFloat(prompt("Ingresa el valor de b:"));
let c = parseFloat(prompt("Ingresa el valor de c:"));

// -----------------------------------------------------------------
// PASO 2: DECLARAR FUNCIÓN DISCRIMINANTE
// -----------------------------------------------------------------

/*
¿POR QUÉ CREAR UNA FUNCIÓN?
- El ejercicio lo pide explícitamente
- Código reutilizable
- Más organizado y profesional
- Separa responsabilidades
- Más fácil de testear

¿POR QUÉ Math.pow(b, 2)?
- El ejercicio pide usar Math.pow()
- Calcula b² (b elevado al cuadrado)
- Ejemplo: Math.pow(4, 2) = 16

ALTERNATIVAS NO USADAS:
- b * b → Funciona pero no lo piden
- b ** 2 → Moderno pero no lo piden

¿POR QUÉ return?
- Devuelve el valor calculado
- Permite usar el resultado donde queramos
- Forma correcta para funciones que calculan
- Sin return, la función no devuelve nada (undefined)
*/

function discriminante(a, b, c) {
    // Fórmula del discriminante: b² - 4ac
    return Math.pow(b, 2) - 4 * a * c;
}

// -----------------------------------------------------------------
// PASO 3: CALCULAR DISCRIMINANTE Y DECLARAR VARIABLE RESULTADO
// -----------------------------------------------------------------

/*
LLAMADA A LA FUNCIÓN:
discriminante(a, b, c) → Ejecuta la función con los valores
disc → Guarda el resultado devuelto por return

¿POR QUÉ DECLARAR "resultado" AQUÍ?
CONCEPTO: SCOPE (ALCANCE) DE VARIABLES

SI DECLARAMOS DENTRO DEL if:
if (disc > 0) {
    let resultado = "...";  ← Solo existe DENTRO de estas llaves
}
alert(resultado);  ← ERROR: resultado no existe aquí

SI DECLARAMOS FUERA DEL if:
let resultado = "";  ← Existe en TODO el programa desde aquí
if (disc > 0) {
    resultado = "...";  ← Modificamos la variable
}
alert(resultado);  ← ✓ FUNCIONA, resultado existe aquí

CONCLUSIÓN: Declaramos fuera para usarla después en alert/console/HTML
*/

let disc = discriminante(a, b, c);
let resultado = "";

// -----------------------------------------------------------------
// PASO 4: EVALUAR DISCRIMINANTE Y CALCULAR SOLUCIONES
// -----------------------------------------------------------------

/*
¿POR QUÉ if / else if / else?
- Necesitamos evaluar RANGOS (>, ===, <)
- switch no sirve para comparaciones > o <
- Estructura perfecta para este problema
- Se detiene en la primera condición verdadera

3 CASOS POSIBLES:
1. discriminante > 0  → 2 soluciones diferentes
2. discriminante === 0 → 1 solución única
3. discriminante < 0  → Sin soluciones reales

¿POR QUÉ === y no ==?
=== (estricta)   → Compara valor Y tipo
0 === 0    → true
0 === "0"  → false (número vs string)

== (flexible)    → Convierte tipos (PELIGROSO)
0 == "0"   → true (convierte "0" a 0)
0 == false → true (conversiones raras)

CONCLUSIÓN: SIEMPRE usar === por seguridad
*/

// CASO 1: Discriminante positivo → 2 soluciones
if (disc > 0) {
    /*
    FÓRMULA: x = (-b ± √discriminante) / 2a

    El símbolo ± significa DOS operaciones:
    x1 = (-b + √disc) / 2a  ← Con signo +
    x2 = (-b - √disc) / 2a  ← Con signo -

    ¿POR QUÉ Math.sqrt()?
    - El ejercicio lo pide explícitamente
    - sqrt = Square Root (raíz cuadrada)
    - Math.sqrt(16) = 4
    - Clara y explícita

    ALTERNATIVAS NO USADAS:
    - Math.pow(disc, 0.5) → Menos clara
    - disc ** 0.5 → No es obvio que es raíz
    */
    let x1 = (-b + Math.sqrt(disc)) / (2 * a);
    let x2 = (-b - Math.sqrt(disc)) / (2 * a);

    /*
    CONSTRUCCIÓN DEL MENSAJE:
    - Concatenación con operador +
    - \n = salto de línea (newline)
    - "Línea 1\nLínea 2" se muestra:
      Línea 1
      Línea 2

    ALTERNATIVA MODERNA (no usada aquí):
    - Template literals: `Texto ${variable}`
    - Más legible pero menos universal
    */
    resultado = "Dos soluciones:\nx1 = " + x1 + "\nx2 = " + x2;

    // CASO 2: Discriminante cero → 1 solución
} else if (disc === 0) {
    /*
    Cuando discriminante = 0:
    x = (-b ± √0) / 2a
    x = (-b ± 0) / 2a
    x = -b / 2a

    El ± desaparece porque √0 = 0
    Por eso solo hay UNA solución
    */
    let x = -b / (2 * a);
    resultado = "Una solución:\nx = " + x;

    // CASO 3: Discriminante negativo → Sin soluciones reales
} else {
    /*
    ¿POR QUÉ NO HAY SOLUCIONES REALES?

    Si discriminante < 0, necesitaríamos calcular:
    x = (-b ± √negativo) / 2a

    PROBLEMA: √-16 NO EXISTE en números reales
    - Ningún número × sí mismo da negativo
    - 4 × 4 = 16 (positivo)
    - (-4) × (-4) = 16 (también positivo)

    Las soluciones serían números COMPLEJOS/IMAGINARIOS
    (con la unidad imaginaria "i")

    Para este ejercicio básico, solo informamos que no hay
    soluciones en números reales.
    */
    resultado = "No existen soluciones reales";
}

// -----------------------------------------------------------------
// PASO 5: PRESENTAR RESULTADO EN 3 FORMAS DIFERENTES
// -----------------------------------------------------------------

/*
EL EJERCICIO PIDE MOSTRAR EN 3 LUGARES:

1. window.alert() → VENTANA EMERGENTE
   ✓ Para el usuario final
   ✓ Bloquea hasta que se cierre
   ✓ Garantiza que vea el mensaje
   - No se puede dar estilo
   - Puede ser molesta

2. console.log() → CONSOLA DEL NAVEGADOR
   ✓ Para desarrolladores (debugging)
   ✓ No molesta al usuario
   ✓ Ver con F12 → pestaña Console
   ✓ Registra historial de ejecución
   - Usuario normal no lo ve

3. innerHTML → DENTRO DEL HTML
   ✓ Integrado en la página
   ✓ Más profesional y moderno
   ✓ Permite formato HTML
   ✓ No interrumpe al usuario
   - Requiere elemento con id en HTML
*/

// FORMA 1: Alert - window.alert() como pide el ejercicio
window.alert(resultado);

// FORMA 2: Console - console.log() como pide el ejercicio
console.log(resultado);

// FORMA 3: HTML - document.getElementById().innerHTML como pide el ejercicio
/*
DESGLOSE DE ESTA LÍNEA:

document.getElementById("resultado")
- document → El documento HTML completo
- getElementById() → Busca elemento por su id=""
- "resultado" → Busca <div id="resultado">

.innerHTML = ...
- Inserta contenido HTML dentro del elemento

.replace(/\n/g, "<br>")
- Reemplaza saltos de línea por <br>
- /\n/g → Expresión regular que busca \n (g = global, todos)
- "<br>" → Etiqueta HTML para salto de línea
- Necesario porque HTML no interpreta \n

¿POR QUÉ innerHTML y no textContent?
- innerHTML → Interpreta HTML (<br> funciona)
- textContent → Solo texto (vería <br> como texto)

ALTERNATIVAS:
- getElementById() → ✅ Directo para buscar por id
- querySelector("#resultado") → Funciona pero más lento
- getElementsByClassName() → Devuelve lista, más complejo
*/
document.getElementById("resultado").innerHTML = resultado.replace(/\n/g, "<br>");

// =================================================================
// FIN DEL PROGRAMA
// =================================================================

/*
╔═══════════════════════════════════════════════════════════════════╗
║          RESUMEN DE DECISIONES TOMADAS                            ║
╚═══════════════════════════════════════════════════════════════════╝

1. prompt() + parseFloat()    → Obtener y convertir datos
2. let                        → Declarar variables modernas
3. function con return        → Crear función reutilizable
4. Math.pow(b, 2)            → Calcular b² como lo piden
5. Math.sqrt(disc)           → Calcular √ como lo piden
6. if / else if / else       → Evaluar 3 casos posibles
7. ===                       → Comparación estricta y segura
8. Variables separadas (x1, x2) → Simple y clara
9. Concatenación con +       → Construir strings
10. window.alert()           → Mostrar en ventana emergente
11. console.log()            → Mostrar en consola
12. innerHTML + replace()    → Mostrar en HTML con formato

CONCEPTOS CLAVE APRENDIDOS:
✓ prompt() y conversión de tipos
✓ Funciones con parámetros y return
✓ Operaciones matemáticas (Math.pow, Math.sqrt)
✓ Condicionales para tomar decisiones
✓ Scope (alcance) de variables
✓ Comparación === vs ==
✓ Manipulación de strings
✓ DOM manipulation (getElementById, innerHTML)
✓ Tres formas de mostrar información
*/
