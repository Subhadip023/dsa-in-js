class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
       this.first=null;
       this.last= null;
       this.length = 0;
    }
    peek(){
        return this.first;
    }
    enqueue(value){
        const newNode = new Node(value)
        if (this.first==null) {
            this.first = newNode;
            this.last= newNode;
        }else{
            this.last.next=newNode;
            this.last=newNode;
        }
        this.length++;
        return this;
    }
    dequeue(){
        if (this.length===0) return null
        if (this.first==this.last) {
            this.first=null
            this.last=null
            return this
        }
        const currentFirst = this.first;
        this.first = this.first.next;
        this.length --;
        return currentFirst;
    }
}

const myQ = new Queue();

myQ.enqueue('first');
myQ.enqueue('second');
myQ.enqueue('third');
myQ.enqueue('fourth');
myQ.dequeue()
console.log(myQ);