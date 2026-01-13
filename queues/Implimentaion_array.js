
class Stack {
    constructor(){
        this.items= [];
    }
    peek(){
        if (this.items.length==0) return []
        return this.items[this.items.length-1];
    }
    push(value){
        this.items.push(value)
        return this.items
    }
    pop(){
        if(this.items.length==0) return 
       this.items.pop()
       return this.items
    }
}

const myStack=new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
console.log(myStack);