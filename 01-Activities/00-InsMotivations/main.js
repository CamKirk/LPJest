/**
 * The goldberg function takes in two numbers and returns a matrix of the input and out put vectors. It should not be passed a zero or non-number argument.
 * @param {int} num1 first number for function
 * @param {int} num2 second number for funtion
 */
function goldberg(num1, num2){
    if(typeof num1 !== "number" || typeof num2 !=="number") throw new Error("goldberg function type mismatch");

    if(num1 === 0 || num2 === 0) throw new Error("goldberg function received a zero");
    
    num1 = Math.floor(num1);
    num2 = Math.floor(num2);
    
    let a = num1 << 4;
    let b = num2 << 4;

    let c = a | b;
    let d = a ^ b;

    return([
        [a , c],
        [b , d]
    ]);

}

module.exports = goldberg;
