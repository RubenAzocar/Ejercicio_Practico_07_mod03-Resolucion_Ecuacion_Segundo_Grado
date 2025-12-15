// =================================================================
// EJERCICIO: RESOLUCIÓN DE ECUACIÓN DE SEGUNDO GRADO
// Forma: ax² + bx + c = 0
// =================================================================

// -----------------------------------------------------------------
// PASO 1: SOLICITAR DATOS AL USUARIO
// -----------------------------------------------------------------

/*
┌─────────────────────────────────────────────────────────────────┐
│ DECISIÓN 1: ¿Cómo obtener datos del usuario?                   │
└─────────────────────────────────────────────────────────────────┘

OPCIONES DISPONIBLES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. prompt()              ✅ ELEGIMOS ESTA
   - Ventana emergente simple
   - No requiere HTML adicional
   - Ideal para ejercicios básicos
   - El ejercicio la pide explícitamente

2. Formulario HTML <input>  ❌ NO ELEGIMOS
   - Más profesional y bonito
   - Requiere crear formulario en HTML
   - Requiere eventos (onclick, submit)
   - Más complejo para este ejercicio

3. Argumentos en consola  ❌ NO ELEGIMOS
   - Para aplicaciones de terminal/Node.js
   - No funciona en navegador
   - No era el requerimiento

CONCLUSIÓN: Usamos prompt() porque:
- Es lo que pide el ejercicio
- Es simple y directo
- Funciona inmediatamente sin HTML extra
*/

// prompt() muestra una ventana emergente y devuelve lo que el usuario escribe
// IMPORTANTE: prompt() SIEMPRE devuelve un STRING (texto), nunca un número
let variableA = parseFloat(prompt("Ingresa el valor de a: "));
let variableB = parseFloat(prompt("Ingresa el valor de b: "));
let variableC = parseFloat(prompt("Ingresa el valor de c: "));

/*
┌─────────────────────────────────────────────────────────────────┐
│ DECISIÓN 2: ¿Por qué parseFloat() y no otra cosa?              │
└─────────────────────────────────────────────────────────────────┘

PROBLEMA: prompt() devuelve TEXTO, pero necesitamos NÚMEROS para calcular

OPCIONES DE CONVERSIÓN:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. parseFloat()          ✅ ELEGIMOS ESTA
   - Convierte a número DECIMAL (con decimales)
   - Ejemplo: "3.5" → 3.5
   - Perfecto para ecuaciones (pueden tener decimales)
   - El ejercicio lo pide explícitamente

2. parseInt()            ❌ NO ELEGIMOS
   - Solo números ENTEROS (sin decimales)
   - Ejemplo: "3.5" → 3 (pierde el .5)
   - No sirve si el usuario ingresa 2.75

3. Number()              ❌ NO ELEGIMOS (aunque funcionaría)
   - También convierte a número
   - Más moderno pero el ejercicio pide parseFloat()
   - Comportamiento ligeramente diferente con valores vacíos

4. Operador + (unario)   ❌ NO ELEGIMOS
   - Ejemplo: +prompt()
   - Menos explícito y claro
   - Difícil de entender para principiantes

CONCLUSIÓN: parseFloat() es ideal porque:
- Maneja números decimales (2.5, 3.14, etc.)
- Es explícito en su intención
- Es lo que pide el ejercicio
*/

/*
┌─────────────────────────────────────────────────────────────────┐
│ DECISIÓN 3: ¿Por qué "let" y no "var" o "const"?               │
└─────────────────────────────────────────────────────────────────┘

OPCIONES PARA DECLARAR VARIABLES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. let                   ✅ ELEGIMOS ESTA
   - Variable que puede cambiar
   - Alcance de bloque (solo existe donde se declaró)
   - Moderna y segura
   - No necesitamos cambiar estos valores después

2. const                 ❌ NO ELEGIMOS (aunque podría usarse)
   - Variable constante (no puede cambiar)
   - Más restrictiva
   - Buena práctica si NO va a cambiar
   - En este caso, podríamos usarla

3. var                   ❌ NUNCA USAR
   - Forma antigua (pre-2015)
   - Problemas de alcance
   - Puede causar bugs difíciles de encontrar
   - Obsoleta en JavaScript moderno

CONCLUSIÓN: Usamos let porque:
- Es moderna y estándar
- Es flexible (aunque no la cambiemos)
- Es lo que se enseña actualmente
*/

// -----------------------------------------------------------------
// PASO 2: DEFINIR LA FUNCIÓN DISCRIMINANTE
// -----------------------------------------------------------------

/*
┌─────────────────────────────────────────────────────────────────┐
│ DECISIÓN 4: ¿Por qué crear una FUNCIÓN y no calcular directo?  │
└─────────────────────────────────────────────────────────────────┘

OPCIONES PARA CALCULAR EL DISCRIMINANTE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Crear una función       ✅ ELEGIMOS ESTA
   let disc = calcularDiscriminante(a, b, c);

   VENTAJAS:
   + El ejercicio lo pide explícitamente
   + Código reutilizable (si necesitamos calcularlo varias veces)
   + Más organizado y legible
   + Separa responsabilidades
   + Más fácil de testear

2. Calcular directamente   ❌ NO ELEGIMOS
   let disc = Math.pow(b, 2) - 4 * a * c;

   DESVENTAJAS:
   - No cumple el requisito del ejercicio
   - Menos reutilizable
   - Si hay error, más difícil de encontrar

CONCLUSIÓN: Función porque:
- Es requisito del ejercicio
- Buena práctica de programación (modularidad)
- Más profesional
*/

/*
┌─────────────────────────────────────────────────────────────────┐
│ DECISIÓN 5: ¿Cómo calcular b² (b al cuadrado)?                 │
└─────────────────────────────────────────────────────────────────┘

OPCIONES PARA ELEVAR A UNA POTENCIA:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Math.pow(b, 2)        ✅ ELEGIMOS ESTA
   - Función específica para potencias
   - Funciona con cualquier exponente
   - El ejercicio lo pide explícitamente
   - Más explícito: "elevo b a la 2"

2. b * b                 ❌ NO ELEGIMOS (aunque es válido)
   - Multiplicación directa
   - Más rápida en ejecución
   - Pero solo sirve para potencia de 2
   - Menos clara la intención

3. b ** 2                ❌ NO ELEGIMOS (aunque es moderno)
   - Operador de exponenciación (ES2016+)
   - Más moderno y conciso
   - Pero el ejercicio pide Math.pow()

COMPARACIÓN:
Math.pow(4, 2)  → 16    ✅ Cualquier potencia, explícito
4 * 4           → 16    ⚠️  Solo cuadrados, menos claro
4 ** 2          → 16    ⚠️  Moderno pero no lo piden

CONCLUSIÓN: Math.pow() porque:
- Es lo que pide el ejercicio
- Es universal (sirve para cualquier potencia)
- Es claro en su intención
*/

function calcularDiscriminante(a, b, c) {
    /*
    ┌─────────────────────────────────────────────────────────────┐
    │ DECISIÓN 6: ¿Por qué usar "return"?                        │
    └─────────────────────────────────────────────────────────────┘

    OPCIONES PARA DEVOLVER EL RESULTADO:
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    1. return (devolver el valor)   ✅ ELEGIMOS ESTA
       function calcular() {
           return resultado;
       }

       VENTAJAS:
       + La función puede usarse en cualquier parte
       + Podemos guardar el resultado en una variable
       + Flexible: let x = calcular();
       + Es el estándar para funciones que calculan

    2. console.log() directo         ❌ NO ELEGIMOS
       function calcular() {
           console.log(resultado);
       }

       DESVENTAJAS:
       - Solo imprime, no podemos usar el valor
       - No podemos hacer: let x = calcular();
       - Menos flexible

    3. Variable global               ❌ NO ELEGIMOS
       let resultadoGlobal;
       function calcular() {
           resultadoGlobal = resultado;
       }

       DESVENTAJAS:
       - Contamina el scope global
       - Puede causar conflictos
       - Mala práctica de programación

    CONCLUSIÓN: return porque:
    - Es la forma correcta de funciones que calculan
    - Permite usar el resultado donde queramos
    - Mantiene la función independiente
    */

    // Calculamos y devolvemos el resultado en una sola línea
    return Math.pow(b, 2) - 4 * a * c;

    // Alternativa (mismo resultado, más líneas):
    // let resultado = Math.pow(b, 2) - 4 * a * c;
    // return resultado;
    // Pero es innecesario crear variable temporal aquí
}

// -----------------------------------------------------------------
// PASO 3: VALIDAR QUE 'a' NO SEA CERO
// -----------------------------------------------------------------

/*
┌─────────────────────────────────────────────────────────────────┐
│ DECISIÓN 7: ¿Por qué validar con "if" y no de otra forma?      │
└─────────────────────────────────────────────────────────────────┘

OPCIONES PARA VALIDACIÓN:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. if / else             ✅ ELEGIMOS ESTA
   if (condición) {
       // caso error
   } else {
       // continuar normal
   }

   VENTAJAS:
   + Simple y directo
   + Fácil de leer
   + Estándar en programación
   + Permite ejecutar código diferente según caso

2. try / catch           ❌ NO ELEGIMOS
   try {
       if (a === 0) throw new Error();
   } catch(e) { }

   DESVENTAJAS:
   - Diseñado para errores de ejecución
   - Más complejo de lo necesario
   - No es un "error", es una validación

3. Operador ternario     ❌ NO ELEGIMOS
   a === 0 ? mostrarError() : continuar();

   DESVENTAJAS:
   - Menos legible con mucho código
   - Difícil de expandir
   - No recomendado para bloques grandes

CONCLUSIÓN: if/else porque:
- Es la estructura estándar para validaciones
- Clara y fácil de entender
- Permite bloques de código complejos
*/

/*
┌─────────────────────────────────────────────────────────────────┐
│ DECISIÓN 8: ¿Por qué "===" y no "=="?                          │
└─────────────────────────────────────────────────────────────────┘

OPERADORES DE COMPARACIÓN EN JAVASCRIPT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. === (igualdad estricta)    ✅ ELEGIMOS ESTA
   Compara valor Y tipo
   0 === 0        → true  ✓
   0 === "0"      → false ✓ (número vs string)
   0 === false    → false ✓ (número vs booleano)

   VENTAJAS:
   + Más seguro
   + Sin conversiones automáticas
   + Evita bugs sutiles
   + Buena práctica moderna

2. == (igualdad flexible)      ❌ NO ELEGIMOS
   Compara solo valor (convierte tipos)
   0 == 0         → true
   0 == "0"       → true  ⚠️ (convierte "0" a número)
   0 == false     → true  ⚠️ (convierte false a 0)

   PELIGROS:
   - Conversiones impredecibles
   - Puede causar bugs difíciles
   - Comportamiento no intuitivo

EJEMPLO DEL PELIGRO DE ==:
if (variableA == 0)  ← Si el usuario escribe "0" (texto), igual da true
if (variableA === 0) ← Solo true si es el número 0, más seguro

CONCLUSIÓN: === SIEMPRE porque:
- Evita conversiones automáticas raras
- Es más predecible y seguro
- Es la buena práctica actual
- Los linters lo recomiendan
*/

if (variableA === 0) {
    /*
    ┌─────────────────────────────────────────────────────────────┐
    │ DECISIÓN 9: ¿Por qué mostrar en 3 lugares diferentes?      │
    └─────────────────────────────────────────────────────────────┘

    El ejercicio pide mostrar resultados de 3 formas:

    1. alert()              → Usuario final (ventana emergente)
    2. console.log()        → Desarrolladores (debugging)
    3. innerHTML            → En la página web (profesional)

    Cada uno tiene un propósito diferente:

    alert():
    ✓ Fuerza al usuario a ver el mensaje
    ✓ Bloquea la ejecución hasta que se cierre
    ✓ Usado en aplicaciones simples

    console.log():
    ✓ No molesta al usuario
    ✓ Para debugging y desarrollo
    ✓ Solo visible con F12 (DevTools)

    innerHTML:
    ✓ Integrado en la página
    ✓ Más profesional y moderno
    ✓ Permite formato HTML
    ✓ No interrumpe al usuario
    */

    alert("Error: El valor de 'a' no puede ser cero en una ecuación de segundo grado.");
    console.log("Error: a = 0. No es una ecuación cuadrática.");
    document.getElementById("resultado").innerHTML = "❌ Error: 'a' no puede ser cero.";

} else {
    // -----------------------------------------------------------------
    // PASO 4: CALCULAR EL DISCRIMINANTE
    // -----------------------------------------------------------------
    // Llamamos a la función y guardamos el resultado en una variable
    // Esta variable se usará para decidir cuántas soluciones hay
    let discriminante = calcularDiscriminante(variableA, variableB, variableC);

    /*
    ┌─────────────────────────────────────────────────────────────┐
    │ DECISIÓN 10: ¿Por qué declarar "mensaje" fuera del if?     │
    └─────────────────────────────────────────────────────────────┘

    CONCEPTO: SCOPE (ALCANCE) DE LAS VARIABLES
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    Las variables en JavaScript solo existen en el BLOQUE donde
    se declararon. Un bloque es código entre { }

    OPCIÓN A: Declarar DENTRO del if    ❌ NO FUNCIONA
    if (discriminante > 0) {
        let mensaje = "...";     ← Existe SOLO aquí dentro
    }
    alert(mensaje);              ← ERROR: mensaje no existe aquí

    OPCIÓN B: Declarar FUERA del if     ✅ ELEGIMOS ESTA
    let mensaje = "";            ← Existe en todo el bloque else
    if (discriminante > 0) {
        mensaje = "...";         ← Modificamos la variable
    }
    alert(mensaje);              ← ✓ Funciona, mensaje existe

    CONCLUSIÓN: Declaramos fuera porque:
    - Necesitamos usarla después del if
    - Todos los casos (if/else if/else) la modifican
    - Al final la mostramos con alert/console/HTML
    */

    let mensaje = "";

    // -----------------------------------------------------------------
    // PASO 5: EVALUAR EL DISCRIMINANTE Y CALCULAR SOLUCIONES
    // -----------------------------------------------------------------

    /*
    ┌─────────────────────────────────────────────────────────────┐
    │ DECISIÓN 11: ¿Por qué if/else if/else y no switch?         │
    └─────────────────────────────────────────────────────────────┘

    Tenemos 3 casos según el discriminante:
    - Mayor que 0
    - Igual a 0
    - Menor que 0

    OPCIONES DE ESTRUCTURA:
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    1. if / else if / else         ✅ ELEGIMOS ESTA
       if (disc > 0) { }
       else if (disc === 0) { }
       else { }

       VENTAJAS:
       + Perfecto para rangos (>, <, ===)
       + Fácil de leer y entender
       + Evalúa condiciones complejas
       + Orden de ejecución claro

    2. switch                      ❌ NO ELEGIMOS
       switch(discriminante) {
           case valor1: break;
           case valor2: break;
       }

       DESVENTAJAS:
       - Solo para valores exactos
       - No sirve para > o <
       - No podemos hacer: case > 0

    3. Múltiples if separados      ❌ NO ELEGIMOS
       if (disc > 0) { }
       if (disc === 0) { }
       if (disc < 0) { }

       DESVENTAJAS:
       - Menos eficiente (evalúa todos)
       - Con else if, para en el primero que cumple

    CONCLUSIÓN: if/else if/else porque:
    - Necesitamos comparar rangos (>, <)
    - Es la estructura natural para este problema
    - Más eficiente que múltiples if
    */

    // CASO 1: Discriminante MAYOR que 0 → 2 soluciones diferentes
    if (discriminante > 0) {
        /*
        ┌─────────────────────────────────────────────────────────┐
        │ DECISIÓN 12: ¿Cómo calcular la raíz cuadrada?          │
        └─────────────────────────────────────────────────────────┘

        OPCIONES PARA √ (raíz cuadrada):
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

        1. Math.sqrt()           ✅ ELEGIMOS ESTA
           Math.sqrt(16) → 4

           VENTAJAS:
           + Función específica para raíz cuadrada
           + Clara intención
           + Estándar en todos los lenguajes
           + El ejercicio lo pide

        2. Math.pow(x, 0.5)      ❌ NO ELEGIMOS
           Math.pow(16, 0.5) → 4

           DESVENTAJAS:
           - Menos clara (no es obvio que es raíz)
           - Más compleja sin necesidad
           - √x = x^0.5 pero no es intuitivo

        3. x ** 0.5              ❌ NO ELEGIMOS
           16 ** 0.5 → 4

           DESVENTAJAS:
           - Menos legible
           - No es obvio que es raíz cuadrada

        CONCLUSIÓN: Math.sqrt() porque:
        - Es explícita y clara
        - Es lo que pide el ejercicio
        - Es el estándar universal
        */

        /*
        ┌─────────────────────────────────────────────────────────┐
        │ DECISIÓN 13: ¿Por qué calcular x1 y x2 por separado?   │
        └─────────────────────────────────────────────────────────┘

        Fórmula: x = (-b ± √discriminante) / 2a

        El símbolo ± significa DOS operaciones:
        - Una con + (suma)
        - Una con - (resta)

        OPCIONES:
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

        1. Dos variables separadas    ✅ ELEGIMOS ESTA
           let x1 = (-b + √disc) / 2a;
           let x2 = (-b - √disc) / 2a;

           VENTAJAS:
           + Clara y explícita
           + Fácil de debuguear
           + Podemos usar x1 y x2 por separado
           + Más legible

        2. Array de soluciones        ❌ NO ELEGIMOS (para nivel básico)
           let soluciones = [
               (-b + √disc) / 2a,
               (-b - √disc) / 2a
           ];

           DESVENTAJAS:
           - Más complejo para principiantes
           - Requiere índices [0], [1]
           - Menos claro para este ejercicio

        CONCLUSIÓN: Variables separadas porque:
        - Más simple y directo
        - Nivel apropiado para principiantes
        - Más fácil de entender qué es cada solución
        */

        // x1 usa el signo + (positivo)
        let x1 = (-variableB + Math.sqrt(discriminante)) / (2 * variableA);

        // x2 usa el signo - (negativo)
        let x2 = (-variableB - Math.sqrt(discriminante)) / (2 * variableA);

        /*
        ┌─────────────────────────────────────────────────────────┐
        │ DECISIÓN 14: ¿Cómo construir el mensaje de texto?      │
        └─────────────────────────────────────────────────────────┘

        OPCIONES PARA CONCATENAR STRINGS:
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

        1. Concatenación con +   ✅ ELEGIMOS ESTA
           "Texto" + variable + "más texto"

           VENTAJAS:
           + Universal (funciona en todos los navegadores)
           + Fácil de entender para principiantes
           + Compatible con ES5+

        2. Template literals     ❌ NO ELEGIMOS (aunque es mejor)
           `Texto ${variable} más texto`

           VENTAJAS:
           + Más moderno y legible
           + Permite expresiones: ${x1.toFixed(2)}
           + Saltos de línea naturales

           DESVENTAJAS:
           - Requiere ES6 (2015+)
           - Para principiantes, + es más familiar

        3. Array.join()          ❌ NO ELEGIMOS
           ["Texto", variable, "más"].join(" ")

           DESVENTAJAS:
           - Innecesariamente complejo
           - Menos intuitivo

        CONCLUSIÓN: Concatenación + porque:
        - Es la forma clásica y universal
        - Más apropiada para nivel básico
        - Funciona en cualquier entorno

        NOTA: \n es un salto de línea (newline)
        "Línea 1\nLínea 2" se ve como:
        Línea 1
        Línea 2
        */

        mensaje = "✅ La ecuación tiene 2 soluciones reales distintas:\n\n" +
            "x₁ = " + x1 + "\n" +
            "x₂ = " + x2 + "\n\n" +
            "Discriminante = " + discriminante;

        // CASO 2: Discriminante IGUAL a 0 → 1 solución única
    } else if (discriminante === 0) {
        /*
        Cuando el discriminante es 0:
        x = (-b ± √0) / 2a
        x = (-b ± 0) / 2a
        x = -b / 2a

        El ± desaparece porque √0 = 0
        Por eso solo hay UNA solución
        */

        let x = -variableB / (2 * variableA);

        mensaje = "✅ La ecuación tiene 1 solución única (raíz doble):\n\n" +
            "x = " + x + "\n\n" +
            "Discriminante = " + discriminante;

        // CASO 3: Discriminante MENOR que 0 → No hay soluciones reales
    } else {
        /*
        ┌─────────────────────────────────────────────────────────┐
        │ CONCEPTO: ¿Por qué no hay soluciones reales?           │
        └─────────────────────────────────────────────────────────┘

        Cuando discriminante < 0, tendríamos que calcular:
        x = (-b ± √negativo) / 2a

        PROBLEMA: √-16 NO EXISTE en números reales
        - Ningún número multiplicado por sí mismo da negativo
        - 4 × 4 = 16 (positivo)
        - (-4) × (-4) = 16 (positivo también)

        Las soluciones serían números IMAGINARIOS/COMPLEJOS
        (con la unidad imaginaria "i")

        Para este ejercicio básico, solo reportamos que no hay
        soluciones reales.
        */

        mensaje = "❌ La ecuación NO tiene soluciones reales.\n\n" +
            "El discriminante es negativo: " + discriminante + "\n" +
            "(Las soluciones serían números complejos/imaginarios)";
    }

    // -----------------------------------------------------------------
    // PASO 6: MOSTRAR RESULTADOS EN 3 FORMAS DIFERENTES
    // -----------------------------------------------------------------

    /*
    ┌─────────────────────────────────────────────────────────────┐
    │ DECISIÓN 15: ¿Por qué mostrar de 3 formas diferentes?      │
    └─────────────────────────────────────────────────────────────┘

    El ejercicio pide mostrar en 3 lugares. Cada uno tiene un
    propósito diferente en el desarrollo web:

    1. alert()          → Para el USUARIO FINAL
    2. console.log()    → Para DESARROLLADORES (debugging)
    3. innerHTML        → Para la PÁGINA WEB (profesional)
    */

    /*
    ═══════════════════════════════════════════════════════════════
    FORMA 1: window.alert() - Ventana Emergente
    ═══════════════════════════════════════════════════════════════

    ┌─────────────────────────────────────────────────────────────┐
    │ ¿Cuándo usar alert()?                                       │
    └─────────────────────────────────────────────────────────────┘

    CARACTERÍSTICAS:
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    + BLOQUEA la ejecución hasta que se cierra
    + Garantiza que el usuario VEA el mensaje
    + Simple y rápida de implementar
    - No se puede dar estilo (color, tamaño, etc.)
    - Puede ser molesta si aparece muchas veces
    - No profesional para aplicaciones serias

    CUÁNDO USARLA:
    ✓ Ejercicios y prácticas básicas
    ✓ Alertas críticas (errores importantes)
    ✓ Confirmaciones simples
    ✓ Cuando el ejercicio la pide (como este caso)

    CUÁNDO NO USARLA:
    ✗ Aplicaciones profesionales modernas
    ✗ Si necesitas estilo personalizado
    ✗ Si molesta la experiencia del usuario

    ALTERNATIVAS MODERNAS:
    - Modales HTML/CSS
    - Notificaciones (toast)
    - SweetAlert, Toastify (librerías)
    */

    alert(mensaje);

    /*
    ═══════════════════════════════════════════════════════════════
    FORMA 2: console.log() - Consola del Navegador
    ═══════════════════════════════════════════════════════════════

    ┌─────────────────────────────────────────────────────────────┐
    │ ¿Para qué sirve la consola?                                │
    └─────────────────────────────────────────────────────────────┘

    CARACTERÍSTICAS:
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    + NO molesta al usuario (invisible para él)
    + Perfecta para DEBUGGING (encontrar errores)
    + Permite ver el estado de variables
    + Registra el historial de ejecución
    + Puedes ver objetos, arrays, etc. en detalle

    CÓMO VERLA:
    1. Abre el navegador
    2. Presiona F12 (o Ctrl+Shift+I)
    3. Ve a la pestaña "Console"

    CUÁNDO USARLA:
    ✓ Siempre durante desarrollo
    ✓ Para verificar valores de variables
    ✓ Para encontrar bugs
    ✓ Para seguir el flujo del programa
    ✓ Para ver errores de JavaScript

    IMPORTANTE:
    En producción (app final), debes QUITAR los console.log()
    o usar herramientas de logging profesionales

    VARIANTES DE console:
    - console.log()    → Mensaje normal
    - console.error()  → Mensaje de error (rojo)
    - console.warn()   → Advertencia (amarillo)
    - console.table()  → Datos en tabla
    - console.time()   → Medir tiempo de ejecución
    */

    console.log(mensaje);
    console.log("-----------------------------------");
    console.log("Valores ingresados:");
    console.log("a =", variableA);
    console.log("b =", variableB);
    console.log("c =", variableC);

    /*
    ═══════════════════════════════════════════════════════════════
    FORMA 3: innerHTML - Modificar el HTML de la Página
    ═══════════════════════════════════════════════════════════════

    ┌─────────────────────────────────────────────────────────────┐
    │ DECISIÓN 16: ¿Cómo modificar contenido HTML desde JS?      │
    └─────────────────────────────────────────────────────────────┘

    OPCIONES PARA MODIFICAR EL DOM:
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    1. innerHTML         ✅ ELEGIMOS ESTA
       element.innerHTML = "contenido";

       CARACTERÍSTICAS:
       + Reemplaza TODO el contenido del elemento
       + Permite insertar HTML: <br>, <strong>, etc.
       + Simple y directa
       + Perfecta para este ejercicio

       CUIDADO:
       ⚠️  No uses con contenido del usuario (riesgo XSS)
       ⚠️  Solo para contenido controlado

    2. textContent       ❌ NO ELEGIMOS
       element.textContent = "contenido";

       CARACTERÍSTICAS:
       - Solo texto plano (no interpreta HTML)
       - <br> se vería como texto, no como salto de línea
       - Más seguro pero menos flexible

       CUÁNDO USAR:
       ✓ Si el contenido viene del usuario
       ✓ Si no necesitas HTML

    3. innerText         ❌ NO ELEGIMOS
       element.innerText = "contenido";

       CARACTERÍSTICAS:
       - Similar a textContent
       - Considera el CSS (display, visibility)
       - Menos usado modernamente

    4. appendChild()     ❌ NO ELEGIMOS (para nivel básico)
       element.appendChild(nuevoElemento);

       CARACTERÍSTICAS:
       - Más complejo
       - Crea elementos con document.createElement()
       - Más profesional pero requiere más código

    CONCLUSIÓN: innerHTML porque:
    - Es simple y directa
    - Permite usar HTML (<br> para saltos de línea)
    - Perfecta para este nivel y ejercicio
    */

    /*
    ┌─────────────────────────────────────────────────────────────┐
    │ DECISIÓN 17: ¿Cómo encontrar el elemento en el DOM?        │
    └─────────────────────────────────────────────────────────────┘

    DOM = Document Object Model (estructura del HTML)

    OPCIONES PARA SELECCIONAR ELEMENTOS:
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    1. document.getElementById("id")      ✅ ELEGIMOS ESTA
       Busca por el atributo id=""

       VENTAJAS:
       + Muy específico (id es único)
       + Rápido de ejecutar
       + Fácil de entender
       + Estándar desde siempre

       HTML: <div id="resultado"></div>
       JS:   document.getElementById("resultado")

    2. document.querySelector("#id")      ❌ NO ELEGIMOS (aunque es válido)
       Usa selectores CSS

       VENTAJAS:
       + Más flexible (acepta cualquier selector CSS)
       + Moderno

       HTML: <div id="resultado"></div>
       JS:   document.querySelector("#resultado")

       DESVENTAJAS:
       - Más lento que getElementById
       - Innecesario si solo usas id

    3. document.getElementsByClassName()  ❌ NO ELEGIMOS
       Busca por clase=""

       DESVENTAJAS:
       - Devuelve una lista (aunque haya uno solo)
       - Requiere [0] para acceder al primero
       - Menos eficiente que id

    4. document.getElementsByTagName()    ❌ NO ELEGIMOS
       Busca por etiqueta <div>, <p>, etc.

       DESVENTAJAS:
       - Devuelve lista
       - Muy genérico
       - No apropiado para elemento específico

    CONCLUSIÓN: getElementById() porque:
    - Es la más directa para buscar por id
    - Más rápida en ejecución
    - Más clara en intención
    - Estándar y compatible
    */

    /*
    ┌─────────────────────────────────────────────────────────────┐
    │ DECISIÓN 18: ¿Por qué replace(/\n/g, "<br>")?              │
    └─────────────────────────────────────────────────────────────┘

    PROBLEMA:
    En JavaScript usamos \n para saltos de línea
    En HTML usamos <br> para saltos de línea

    "Línea 1\nLínea 2" en JavaScript
    ↓
    "Línea 1<br>Línea 2" en HTML

    EXPLICACIÓN DE replace(/\n/g, "<br>"):
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    mensaje.replace(buscar, reemplazar)

    /\n/g  → Expresión regular (regex)
       \n  → Busca saltos de línea
       g   → Global (todas las ocurrencias, no solo la primera)

    "<br>" → Reemplaza cada \n por <br>

    ALTERNATIVAS:
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    1. replace() con regex   ✅ ELEGIMOS ESTA
       mensaje.replace(/\n/g, "<br>")

       + Reemplaza TODOS los \n
       + Una sola línea
       + Eficiente

    2. split() y join()      ❌ NO ELEGIMOS
       mensaje.split("\n").join("<br>")

       - Más complejo
       - Crea array intermedio
       - Menos eficiente

    3. Usar <pre> en HTML    ❌ NO ELEGIMOS
       <pre>mensaje</pre>

       - Respeta \n automáticamente
       - Pero cambia el formato (fuente monoespaciada)
       - No apropiado para este caso

    CONCLUSIÓN: replace() con regex porque:
    - Es la forma estándar
    - Eficiente y concisa
    - Fácil de entender una vez que conoces regex
    */

    document.getElementById("resultado").innerHTML = mensaje.replace(/\n/g, "<br>");
}

// =================================================================
// FIN DEL PROGRAMA
// =================================================================

/*
╔═══════════════════════════════════════════════════════════════════╗
║              RESUMEN: CÓMO ELEGIR ELEMENTOS EN JS                 ║
╚═══════════════════════════════════════════════════════════════════╝

PROCESO MENTAL PARA ELEGIR QUÉ USAR:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. ¿QUÉ NECESITO HACER?
   └─ Obtener datos → prompt(), formularios, fetch API
   └─ Calcular → operadores, Math, funciones personalizadas
   └─ Decidir → if/else, switch, operador ternario
   └─ Repetir → for, while, forEach, map
   └─ Mostrar → alert, console, innerHTML

2. ¿CUÁL ES EL NIVEL DE COMPLEJIDAD?
   └─ Básico → Métodos simples (prompt, alert, if/else)
   └─ Intermedio → DOM, eventos, arrays, objetos
   └─ Avanzado → APIs, async/await, frameworks

3. ¿QUÉ PIDE EL EJERCICIO?
   └─ SIEMPRE revisa requisitos específicos
   └─ Usa lo que piden (ej: Math.pow() vs operador **)

4. ¿ES PARA APRENDER O PARA PRODUCCIÓN?
   └─ Aprender → Usa métodos explícitos y claros
   └─ Producción → Usa métodos modernos y eficientes

5. ¿COMPATIBILIDAD?
   └─ Navegadores antiguos → Métodos clásicos (ES5)
   └─ Navegadores modernos → Métodos nuevos (ES6+)

REGLA DE ORO:
╔═══════════════════════════════════════════════════════════════╗
║  "Elige la solución MÁS SIMPLE que resuelva el problema"     ║
║  "No uses algo complejo si algo simple funciona"             ║
╚═══════════════════════════════════════════════════════════════╝
*/

/*
╔═══════════════════════════════════════════════════════════════════╗
║          CONCEPTOS CLAVE QUE APRENDISTE EN ESTE EJERCICIO        ║
╚═══════════════════════════════════════════════════════════════════╝

1. ENTRADA DE DATOS
   ✓ prompt() para solicitar datos del usuario
   ✓ parseFloat() para convertir string a número decimal
   ✓ let vs const vs var para declarar variables

2. FUNCIONES
   ✓ Cómo crear funciones reutilizables
   ✓ Parámetros y return
   ✓ Por qué usar funciones vs código directo

3. MATEMÁTICAS EN JS
   ✓ Math.pow(base, exponente) para potencias
   ✓ Math.sqrt(n) para raíz cuadrada
   ✓ Operaciones aritméticas básicas

4. CONDICIONALES
   ✓ if / else if / else para tomar decisiones
   ✓ === vs == (igualdad estricta vs flexible)
   ✓ Operadores de comparación (>, <, ===)

5. SCOPE (ALCANCE)
   ✓ Variables locales vs globales
   ✓ Por qué declarar fuera vs dentro de bloques
   ✓ Dónde existen las variables

6. STRINGS
   ✓ Concatenación con +
   ✓ Saltos de línea con \n
   ✓ replace() para modificar strings

7. DOM MANIPULATION
   ✓ document.getElementById() para seleccionar elementos
   ✓ innerHTML para modificar contenido HTML
   ✓ Diferencia entre \n (JS) y <br> (HTML)

8. DEBUGGING
   ✓ console.log() para ver valores
   ✓ alert() para notificar al usuario
   ✓ Cómo usar DevTools (F12)
*/
