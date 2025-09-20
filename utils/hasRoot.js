import calc from "./calc.js";

export default function hasRoot(f, a, b) {
  const fa = calc(f, a);
  const fb = calc(f, b);
  const product = fa * fb;

  if (product < 0) {
    return {
      roots: true,
      message: `Odd number of real root(s) exists between ${a} and ${b}}.`,
      negative: fa < 0 ? "a" : "b",
      fa,
      fb,
    };
  } else if (product > 0) {
    return {
      roots: false,
      message: `Even number of real or complex roots exist between ${a} and ${b}}.`,
    };
  } else {
    return { roots: null, message: `One of the endpoints is a root.` };
  }
}
