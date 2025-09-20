
# Maths Analysis – Numerical Root Solvers

[![Node.js](https://img.shields.io/badge/Node.js%2022.x-green?logo=node.js&logoColor=black)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript%20ESM-yellow?logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![math.js](https://img.shields.io/badge/Math.js-blue)](https://mathjs.org/)

This project implements **Numerical Analysis methods** in Node.js to approximate real roots of equations.
Currently supports:

* **Bisection Method**
* **Regula Falsi (False Position) Method**

It uses [math.js](https://mathjs.org/) to parse and evaluate functions, and provides iterative logs until convergence.

---

##  Features

* Parse mathematical expressions from plain input (`ax+xa+a` → a*x+x<sup>a</sup>+a) where `a` is coefficient and `x` is variable.
* Solve using **Bisection** or **Regula Falsi**.
* Detailed iteration logs:

  * Interval `[a, b]` : a, b: initial guesses, must satisfy f(a) * f(b) < 0
  * Approximate root
  * Function values:  equation string (e.g., "x^3 - 9x - 4")
  * Error/convergence check
  * Tolerance: stopping precision (default 1e-7)
  * Stopping condition : Used help from [chatgpt](https://chatgpt.com)
  * MaxIter: maximum allowed iterations
  * Input validation (e.g., throws error if `f(a) * f(b) > 0`).
  * Verified correctness by comparing results with **Desmos graphs**.

  * Example return:
```json
{
  "function": "x3 - 9x - 4",
  "parsedFunction": "x^3 - 9*x - 4",
  "a": 2,
  "b": 3,
  "iterations": [...],
  "result": {
    "valid": true,
    "equatesTo": 2.8793852415718
  }
}
```

---

## Installation

Clone and install dependencies:

```bash
git clone https://github.com/nishuR31/mathsAnalysis.git
cd mathsAnalysis
npm install
```

---

##  Usage

Run the solver with Node.js:

```bash
node index.js
```

---


##  Documentation

### `bisection(func, a, b, tolerance = 1e-7, maxIter = 100)`

Finds a root using the **Bisection Method**.

* `func`: equation string (e.g., `x3-9x-4`) which gets parsed 
* `a`, `b`: initial guesses, must satisfy `f(a) * f(b) < 0`
* Returns: object `{ function, parsed function, a, b root, iterations, result:
                                                                          { valid, equatesTo} }`

### `regulaFalsi(func, a, b, tolerance = 1e-7, maxIter = 100)`

Finds a root using the **Regula Falsi Method**.

* Same parameters as `bisection`
* Returns: object `{ function, parsed function, a, b root, iterations, result:
                                                                          { valid, equatesTo} }`


---

##  Testing

Tested with multiple polynomial functions and compared against **Desmos** for validation. Roots matched within tolerance.

---

##  References

* Numerical Analysis standard textbooks
* [Desmos Graphing Calculator](https://www.desmos.com/calculator) for root verification
* [math.js documentation](https://mathjs.org/docs/)


