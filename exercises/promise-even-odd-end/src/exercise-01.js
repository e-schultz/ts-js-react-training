const getNumbers = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 1000);
  });
};

const numbers = getNumbers();

let even = numbers.then(result => result.filter(n => n % 2 === 0));
let odd = numbers.then(result => result.filter(n => n % 2 !== 0));

export { even, odd };
