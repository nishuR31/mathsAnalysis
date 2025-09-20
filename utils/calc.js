import compiler from "./compiler.js";
import parser from "./parser.js";

export default function calc(eq, val) {
  eq = parser(eq);
  return compiler(eq, val);
}
