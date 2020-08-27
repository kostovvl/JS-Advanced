function solution(input) {
    return function(input2) {
      return input + input2;
    }
}

let add5 = solution(5);

console.log(add5(2));