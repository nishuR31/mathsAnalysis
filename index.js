import bisection from "./bisection/bisection.js";
import regula from "./regulaFalsi/regula.js";

export default function analyse(
  func,
  method = "r",
  a,
  b,
  tol = 1e-7,
  maxIter = 1000
) {
  return method.toLowerCase() === "r"
    ? regula(func, a, b, tol, maxIter)
    : bisection(func, a, b, tol, maxIter);
}

console.log(analyse("x3-9x-4","b", 3, 4));
