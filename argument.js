function arrayyy() {
    let sum = 0;
    for(let i=0;i<arguments.length;i++) {
        sum += arguments[i];
    }
    return sum;
}
// console.log(arrayyy(1,2,3,4,5));


// find maximum
function maxi() {
    let max = Number.MIN_VALUE;
    for(let i=0;i<arguments.length;i++) {
        if (arguments[i]>max)
            max = arguments[i];
    }
    return max;
}
// console.log(maxi(1,2,3,4,5,6));


// using rest parameter
function findsum(...args) {
    let sum = 0;
    for(let arg of args) {
        sum += arg;
    }
    return sum;
}
// console.log(findsum(31,646,354,2,86,67,6,97,66));

// with arrow function
const sum = (a,b) => {
    return a+b;
}
// console.log(sum(2,3));

const person = {
  name: "John",
  greet: () => {
    return this.name;
  }
};
console.log(person.greet());