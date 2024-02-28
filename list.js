
class Todo {
    constructor(title, description, nextTodoIndex = -1) {
      this.title = title;
      this.description = description;
      this.nextTodoIndex = nextTodoIndex;
    }
  

    printDetails() {
      console.log(`Title: ${this.title}`);
      console.log(`Description: ${this.description}`);
      if (this.nextTodoIndex !== -1) {
        console.log(`Points to next TODO at index: ${this.nextTodoIndex}`);
      } else {
        console.log("No next TODO");
      }
      console.log("\n---\n");
    }
  }
  

  const todosArray = [
    new Todo("Programming", "Learn JS", 2),
    new Todo("Fising", "Catch fish", 3),
    new Todo("Drive", "Drive a vehicle", 4),
    new Todo("Sleep", "Go to bed", -1),
  ];
  
  function printAllTodos() {
    for (const todo of todosArray) {
      todo.printDetails();
    }
  }
  
  printAllTodos();
  