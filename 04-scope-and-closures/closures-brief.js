// closures demo in 10 lines of code!

const x10 = scaleBy(10); //closes over the value 10
console.log(x10(3)); //30
const x50 = scaleBy(50); //closes over the value 10
console.log(x50(4)); //200

function scaleBy(factor) {
  // lex-scoped var
  var scale = factor;
  // returns function with a ref to lex-scoped var
  return function (num) {
    return num * scale;
  };
}
