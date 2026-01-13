class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top=null;
        this.bottom=null;
        this.length=0;
    }
    peek(){
        return this.top;
    }
    push(value){
        let newNode = new Node(value);
        if (this.length==0) {
            this.top=newNode
            this.bottom=newNode
        }
        else{
            const oldTop=this.top;
            this.top=newNode;
            this.top.next=oldTop;
        }
        this.length++;
        return this;
    }
    pop(){
        if (!this.top) {
            return null;
        }
        if (this.bottom === this.top){
            this.bottom=null
        }
        // const oldTop=this.top;
        this.top=this.top.next;
        this.length--
        return this

    }
}

const myStack=new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
console.log(myStack);