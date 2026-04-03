function fibs(n) {
    let arr = [];
    let prev = 0, curr = 1;
    for (let i = 0; i < n; i++) {
        if (i == 0) arr[i] = prev;
        else if (i == 1) arr[i] = curr;
        else {
            arr[i] = prev + curr;
            prev = curr;
            curr = arr[i];
        }
    }
    return arr;
}

function fibsRec(n) {
    if (n == 0) return [];
    if (n == 1) return [0];
    let curr = fibsRec(n-1);
    let next = curr[curr.length - 1] + (curr[curr.length - 2] ?? 1);
    return [...curr, next];
}

/*
Well Optimized Solution:
function getFibSequence(n, sequence = [0, 1]) {
  // Base case: sequence has reached desired length
  if (sequence.length >= n) {
    return sequence.slice(0, n);
  }

  // Add next number and recurse
  const nextVal = sequence[sequence.length - 1] + sequence[sequence.length - 2];
  return getFibSequence(n, [...sequence, nextVal]);
}

console.log(getFibSequence(5)); // [0, 1, 1, 2, 3]
*/

/*
Required Output: 
fib(4) = [0, 1, 1, 2]
fib(3) = [0, 1, 1]
fib(2) = [0, 1]
fib(1) = [0]
fib(0) = []

One Approach:
fib(4) = [...fib(3), 2]
fib(3) = [...fib(2), 1]
fib(2) = [...fib(1), 1]
fib(1) = [...fib(0), 0]
fib(0) = []

Find nth number:
if (n < 2) return n;
else return fib(n-1) + fib(n-2);

Dry Run of nth number:
fib(5) = fib(4) + fib(3)
fib(4) = fib(3) + fib(2)
fib(3) = fib(2) + fib(1)
fib(2) = fib(1) + fib(0)
fib(1) = 1
fib(0) = 0
*/

for(let i = 0; i <= 8; i++) {
    if (i == 4 || i == 6 || i == 7) continue;
    console.log(fibs(i));
}

for(let i = 0; i <= 8; i++) {
    if (i == 4 || i == 6 || i == 7) continue;
    console.log(fibsRec(i));
}
