// Reverse a string using a stack

const Stack = require("./stack");

function reverseStringByStack(str) {
    // this is an awful way to do it, but it _does_ use the data structure we're practicing.
    const stack = new Stack;
    for (i=0; i<str.length; i++) {
        stack.push(str[i]);
    }
    
    let retStr = "";
    while (!stack.isEmpty()) {
        retStr += stack.pop();
    }
    return retStr;
}