/** Node: node for a singly linked list. */

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
class JosephusList {
    constructor(vals = []) {
        this.head = null;
        this.tail = null;
        this.length = 0;
    
        for (let val of vals) this.push(val);
      }
      
    /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (this.tail) {
      this.tail.next = newNode;
    }
    else {
      this.head = newNode;
    }
    this.tail = newNode;
    this.length++
  }
  
  /** cull(skip): culls the list with a given skip until there's only one survivor */
  
  cull(skip) {
    if (this.length === 0) {
        throw new Error("can't cull empty list")
    }
    if (this.length === 1) {
        return this.head;
    }
    let currentNode = this.head;
    let prevNode = null;
    while (this.length > 1) {
        // skip over some
        for (let i = 1; i < skip; i++) {
            if (currentNode.next) {
                prevNode = currentNode;
                currentNode = currentNode.next;
            }
            else {
                prevNode = null;
                currentNode = this.head;
            }
        }
        // then remove one
        if (currentNode.next) {
            if (prevNode) {
                prevNode.next = currentNode.next;
            }
            else {
                this.head = currentNode.next;
            }
            currentNode = currentNode.next
        }
        else {
            if (prevNode) {
                prevNode.next = null;
                this.tail = prevNode;
            }
            currentNode = this.head;
        }
        this.length--;
    }
    return this.head;
  }
}

function findSurvivor(count, skip) {
    vals = []
    for (let i=0; i<count; i++) {
        vals.push(i)
    }
    josphLst = new JosephusList(vals)
    
    return josphLst.cull(skip)
}