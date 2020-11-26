// The fibonacci function: iterative solution
function fibonacci(num) {
    var a = 1, b = 0, temp;

    // while loop
    while (num >= 0){
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}