export default function parser(eq) {
  eq = eq.replace(/(\d)([a-zA-Z])/g, "$1*$2"); //3x=>3*x
  eq = eq.replace(/([a-zA-Z])(\d)/g, "$1^$2"); //x3=>x^3
  eq = eq.replace(/(\d)([a-zA-Z])(\d)/g, "$1*$2^$3"); //3x3=>3*x^3
  eq = eq.replace(/\blog([a-zA-Z])\b/g, "log($1)");
  eq = eq.replace(/\bexp([a-zA-Z])\b/g, "exp($1)");
  eq = eq.replace(/\bsin([a-zA-Z])\b/g, "sin($1)");
  eq = eq.replace(/\bcos([a-zA-Z])\b/g, "cos($1)");
  eq = eq.replace(/\btan([a-zA-Z])\b/g, "tan($1)");
  return eq;
}
