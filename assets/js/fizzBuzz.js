
let i = 0;
do {
    i++;
    if (((i % 5) == 0 ) && ((i % 3) == 0 )) {
        console.log(i +" FizzBuzz");
    } else if ((i % 5) == 0) {
        console.log(i + " Buzz");
    } else if ((i % 3) == 0) {
        console.log(i + " Fizz")
    }
} while (i < 15);