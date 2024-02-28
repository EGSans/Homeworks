class Book{
    constructor(name,isbn,author,editorial){
        this.name = name;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
}


class Bookstacks{
    constructor(){
        this.stack=[];
        this.count = 0;}
    }

class BookStack {
        constructor() {
            this.stack = {};
            this.count = 0;
        }
    
        push(book) {
            this.stack[this.count] = book;
            this.count++;
            return this.stack;
        }
    
        pop() {
            this.count --;
            const book = this.stack[this.count];
            delete this.stack[this.count];
            return book;

        }
        peek(){
            return this.stack[this.count - 1];
        }

        size() {
            return this.count;
        }

        print() {
            console.log(this.stack);
        }
    
        isEmpty() {
            return this.count === 0;
        }
    }

const book1 = new Book("The Great Gatsby", "978-3-16-148410-0", "F. Scott Fitzgerald", "Scribner");
const book2 = new Book("To Kill a Mockingbird", "978-0-06-112008-4", "Harper Lee", "J.B. Lippincott & Co.");
const book3 = new Book("1984", "978-0-452-28423-4", "George Orwell", "Harcourt, Brace & World");
const book4 = new Book("The Catcher in the Rye", "978-0-06-112008-4", "J.D. Salinger", "J.B. Lippincott & Co.");

const books = new BookStack();

books.push(book1);
books.push(book2);
books.push(book3);
books.push(book4);

while(!books.isEmpty()){
    console.log(books.pop());

}


