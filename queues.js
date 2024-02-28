class Queue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(person) {
      this.queue.push(person);
    }
  
    dequeue() {
      return this.queue.shift();
    }

    peek() {
      return this.queue[0];
    }

    size() {
      return this.queue.length;
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }

    print() {
        return this.queue;
    }
  }
  
  const atmQueue = new Queue();
  

  function addPersonToQueue(name) {
    const person = {
      name: name,
      arrivedTime: new Date().toLocaleTimeString(),
    };
    atmQueue.enqueue(person);
    console.log(`${person.name} has joined the ATM queue at ${person.arrivedTime}`);
  }
  
  addPersonToQueue("Shelly");
  addPersonToQueue("Lester");
  addPersonToQueue("Flash");
  addPersonToQueue("Sans");
  addPersonToQueue("Rex");
  addPersonToQueue("Ben 10");
  
  function processQueue() {
    while (!atmQueue.isEmpty()) {
      const currentPerson = atmQueue.dequeue();
      console.log(`${currentPerson.name} is using the ATM at ${new Date().toLocaleTimeString()}`);
    }
  
    console.log("ATM queue is empty.");
  }
  
  setTimeout(processQueue, 10000);
  