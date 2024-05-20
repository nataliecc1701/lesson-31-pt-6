// balances brackets

const Stack = require("./stack");

const openBracks = ["(", "[", "{"];
const closeBracks = [")", "]", "}"];

// check to see if a string is balanced
function balance(str) {
    const stk = new Stack();
    
    for (let i=0; i<str.length; i++) {
        if(openBracks.indexOf(str[i]) >= 0) {
            stk.push(openBracks.indexOf(str[i]))
        }
        if(closeBracks.indexOf(str[i]) >= 0) {
            if (closeBracks.indexOf(str[i]) != stk.pop()) {
                return false;
            }
        }
    }
    return stk.isEmpty();
}