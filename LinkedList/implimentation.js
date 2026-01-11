class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next=this.head;
    this.head = newNode;
    this.length++
    return this;
  }

  print() {
    const list = [];
    let currentNode = this.head;


    while (currentNode != null) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return list;
  }
  insert(index, value) {
    if (index>=this.length) {
      this.append(value);
      return 
    }
    const newNode =new Node(value);
    
    let previousNode = this.getValueAt(index-1);
    newNode.next=previousNode.next;
    previousNode.next=newNode;
    this.length++
    
  }
  delete(index){
    let previousNode = this.getValueAt(index-1);
    previousNode.next=previousNode.next.next;
    this.length--;
    return this
  }

  getValueAt(index){
    let counter = 0;
    let currentNode = this.head;
    while (counter!==index) {
      currentNode=currentNode.next;
      counter++;
    }

    return currentNode;
  }
  reverse(){
    if (!this.head.next) return this
    let prev=null;
    let current=null;
    let next = null;
    this.tail=this.head;
    current=this.head;
    while(current){
      next=current.next;
      current.next=prev;
      prev=current;
      current=next;
    
    }

        this.head=prev;
      return this
  }

}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
// myLinkedList.insert(2, 99);
// myLinkedList.insert(12112, 199);
// myLinkedList.delete(1)
myLinkedList.reverse()



// console.log(JSON.stringify(myLinkedList,null,2));
console.log(myLinkedList.print());



