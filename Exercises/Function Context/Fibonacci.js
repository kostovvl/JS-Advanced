class getFibonator{
    constructor(){
        this.counter = 0;
         this.number1 = 0;
        this.number2 = 1;
        this.toPrint = 0;
    }

    fib() {
        this.counter++;
        if (this.counter == 1) {
            return 1;
        }
        this.toPrint = this.number1 + this.number2;
        this.number1 = this.number2;
        this.number2 = this.toPrint;
        return this.toPrint;
    }
}

let fib = new getFibonator();
console.log(fib.fib()); // 1
console.log(fib.fib()); // 1
console.log(fib.fib()); // 2
console.log(fib.fib()); 
console.log(fib.fib()); // 1
console.log(fib.fib()); // 1
console.log(fib.fib()); // 2
console.log(fib.fib());