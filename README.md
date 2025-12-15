# 📐 Resolución de Ecuación de Segundo Grado

Ejercicio práctico del Módulo 3 - Curso Fullstack Talento Digital

## 📋 Descripción

Aplicación web que resuelve ecuaciones de segundo grado de la forma **ax² + bx + c = 0** utilizando la fórmula cuadrática y evaluando el discriminante para determinar el número de soluciones.

## 🎯 Objetivo

Implementar funciones en JavaScript para realizar operaciones matemáticas (potencia y raíz cuadrada), utilizar condicionales para evaluar casos, y mostrar resultados de múltiples formas.

## 🚀 Cómo usar

1. Abre el archivo `index.html` en tu navegador
2. Ingresa el valor de **a** cuando se solicite
3. Ingresa el valor de **b** cuando se solicite
4. Ingresa el valor de **c** cuando se solicite
5. La aplicación calculará y mostrará:
   - **Ventana emergente** (alert) con el resultado
   - **Consola del navegador** (F12 → Console)
   - **En la página web** dentro del div resultado

## 📁 Estructura del proyecto

```
📂 Ejercicio_practico_07_mod03
├── 📄 index.html          # Estructura HTML de la aplicación
├── 📄 app.js              # Lógica JavaScript (versión limpia)
└── 📄 README.md           # Este archivo
```

## 🧮 Fórmula Matemática

### Discriminante
```
Δ = b² - 4ac
```

### Soluciones
```
x = (-b ± √Δ) / 2a
```

### Casos según el discriminante:

- **Δ > 0**: La ecuación tiene **2 soluciones reales distintas**
- **Δ = 0**: La ecuación tiene **1 solución única** (raíz doble)
- **Δ < 0**: La ecuación **no tiene soluciones reales** (soluciones complejas)

## 💻 Tecnologías utilizadas

- HTML5
- JavaScript (ES6)
- Métodos matemáticos: `Math.pow()`, `Math.sqrt()`

## ✨ Características implementadas

- ✅ Solicitud de datos con `prompt()`
- ✅ Conversión de strings a números con `parseFloat()`
- ✅ Función para calcular el discriminante
- ✅ Evaluación de casos con condicionales
- ✅ Cálculo de raíces usando fórmula cuadrática
- ✅ Validación de entrada (a ≠ 0)
- ✅ Salida en 3 formas: alert, console, HTML

## 📝 Ejemplo de uso

### Entrada:
```
a = 1
b = -5
c = 6
```

### Salida:
```
✅ La ecuación tiene 2 soluciones reales distintas:

x₁ = 3
x₂ = 2

Discriminante = 1
```

## 🔍 Casos de prueba

| a | b | c | Discriminante | Resultado |
|---|---|---|---------------|-----------|
| 1 | -5 | 6 | 1 | 2 soluciones: x₁=3, x₂=2 |
| 1 | 4 | 4 | 0 | 1 solución: x=-2 |
| 1 | 2 | 5 | -16 | Sin soluciones reales |
| 0 | 3 | 2 | - | Error: a no puede ser 0 |

## 👨‍💻 Autor

Ejercicio desarrollado como parte del Curso Fullstack - Talento Digital

---

⭐ Ejercicio completado - Módulo 3
# Ejercicio_Practico_07_mod03-Resolucion_Ecuacion_Segundo_Grado
