import calc from "../utils/calc.js";
import check from "../utils/check.js";
import hasRoot from "../utils/hasRoot.js";
import parser from "../utils/parser.js";

export default function bisection(f, a = 1, b = 2, tol = 1e-7, maxIter = 1000) {
  try {
    let { roots, message, fa, fb } = hasRoot(f, a, b);
    if (!roots) {
      throw new Error(message);
    }

    let mid, fMid;
    for (let i = 0; i < maxIter; i++) {
      mid = (a + b) / 2;
      fMid = calc(f, mid);
      console.table({
        function: f,
        parsed: parser(f),
        a,
        b,
        root: mid,
        iterations: i + 1,
        result: check(f, mid),
      });

      // Stopping conditions
      if (Math.abs(fMid) < tol || (b - a) / 2 < tol) {
        return {
          function: f,
          parsed: parser(f),
          a,
          b,
          root: mid,
          iterations: i + 1,
          result: check(f, mid),
        };
      }

      if (fa * fMid < 0) {
        b = mid;
        fb = fMid;
      } else {
        a = mid;
        fa = fMid;
      }
    }

    throw new Error("Max iterations reached without convergence.");
  } catch (err) {
    console.log(`Error: ${err.message}`);
    return err.message;
  }
}

// Example run
// console.log(bisection("2x+3", -2, -1));
