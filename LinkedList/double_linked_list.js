class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev=null;
  }
}



class LinkedList {
  constructor(value) {
    this.head = new Node(value)
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    newNode.prev=this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    
    newNode.next=this.head;
    this.head.prev=newNode;
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
    let currentNode=previousNode.next;
    newNode.prev=previousNode;
    newNode.next=currentNode;
    previousNode.next=newNode;
    currentNode.prev=newNode;
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
    this.length++
    return currentNode;
  }

}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(12112, 199);
myLinkedList.delete(2)



console.log(myLinkedList.print());



