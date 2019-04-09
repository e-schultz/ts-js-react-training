const getNumbers = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 1000);
  });
};

const numbers = getNumbers();

let even = [];
let odd = [];

export { even, odd };
