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

    }
    enqueue(value){
        const newNode = new Node(value)
        if (this.first==null) {
            this.first = newNode;
            this.last=this.first;
        }else{
            this.last.next=newNode
        }
        this.length++;
    }
    dequeue(){
        
    }
}

const myQ= new Queue();

myQ.enqueue('first');
myQ.enqueue('second');
myQ.enqueue('last');

console.log(myQ);