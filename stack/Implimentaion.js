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
        this.lenght=0;
    }
    peek(){
        return this.top;
    }
    push(value){
        let newNode = new Node(value);
        if (this.lenght==0) {
            this.top=newNode
            this.bottom=newNode
        }
        else{
            const oldTop=this.top;
            this.top=newNode;
            this.top.next=oldTop;
        }
        this.lenght++;
        return this;
    }
    pop(){
        if (!this.top) {
            return null;
        }
        const oldTop=this.top;
        this.top

    }
}

const myStack=new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
console.log(myStack);