export default function parser(eq) {
  eq = eq.replace(/(\d)([a-zA-Z])/g, "$1*$2"); //3x=>3*x
  eq = eq.replace(/([a-zA-Z])(\d)/g, "$1^$2"); //x3=>x^3
  eq = eq.replace(/(\d)([a-zA-Z])(\d)/g, "$1*$2^$3"); //3x3=>3*x^3
  return eq;
}
