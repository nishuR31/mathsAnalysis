import calc from "./calc.js";

export default function signCheck(func, ...vals) {
  return vals.map(val=>calc(func, val));
}
