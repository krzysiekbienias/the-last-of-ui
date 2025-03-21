// function declaration
function getSum(a, b) {
  return a + b;
}

const result = getSum(60, 9);

console.log(result);


function concat(str1,str2) {
  return str1 + str2;
}

// don't touch below this line

console.log(concat("Lane,", " happy birthday!"));

//functions as values:
function add(x, y) {
  return x + y;
}

function mul(x, y) {
  return x * y;
}

function aggregate(a, b, c, arithmetic) {
  const firstResult = arithmetic(a, b);
  const secondResult = arithmetic(firstResult, c);
  return secondResult;
}

const sum=aggregate(2,3,4,add)
const prod=aggregate(2,3,4,mul)

console.log(`Sum is equal ${sum} and product is equal ${prod}`)