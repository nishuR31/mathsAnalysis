import { parse } from "mathjs";
export default function compiler(func, val) {
  const compiled = parse(func).compile();
  return compiled.evaluate({ x: val });
}
