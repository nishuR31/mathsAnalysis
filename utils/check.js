import calc from "./calc.js";

export default function check(func,val){
    return {valid:Math.round(calc(func,val))===0,equatesTo:calc(func,val)
    }
}
