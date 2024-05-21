// calculates an expression written in polish notation

const Stack = require("./stack");

function calc(expression) {
    // get our data into the structure we're using
    const symbs = expression.split(" ");
    const stk = new Stack()
    for(let i = symbs.length - 1; i >= 0; i--) {
        // put all the numbers onto a stack
        if (!isNaN(symbs[i])) {
            stk.push(parseFloat(symbs[i]))
        }
        // handle operators by popping two values off the stack, operating, and pushing
        else {
            if (symbs[i] == "+") {
                let val = stk.pop() + stk.pop();
                stk.push(val);
            }
            else if (symbs[i] == "-") {
                let val = stk.pop() - stk.pop();
                stk.push(val);
            }
            else if (symbs[i] == "*") {
                let val = stk.pop() * stk.pop();
                stk.push(val);
            }
            else if (symbs[i] == "/") {
                let val = stk.pop() / stk.pop();
                stk.push(val);
            }
            else throw new Error(`unrecognized operator ${symbs[i]}`)
        }
    }
    if (stk.size == 1 && !isNaN(stk.peek())) {
        return parseFloat(stk.pop())
    }
    else {
        throw new Error("improperly formatted calculation string")
    }
}