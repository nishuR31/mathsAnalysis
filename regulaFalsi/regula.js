import calc from "../utils/calc.js";
import check from "../utils/check.js";
import hasRoot from "../utils/hasRoot.js";
import parser from "../utils/parser.js";

export default function regula(f, a, b, tol = 1e-7, maxIter = 1000) {
  try {
    let { roots, message, fa, fb } = hasRoot(f, a, b);
    if (!roots) {
      throw new Error(message);
    }

    let mid, fMid;
    for (let i = 0; i < maxIter; i++) {
      mid = (a * fb - b * fa) / (fb - fa);
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
      //   if (Math.abs(fMid) < tol || (b - a) / 2 < tol) {
      if (Math.abs(fMid) < tol || Math.abs(b - a) < tol) {
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
    console.log(`Error: ${err}`);
    return err;
  }
}

// Example run
// console.log(regula("2x2-8", -3, -1));
