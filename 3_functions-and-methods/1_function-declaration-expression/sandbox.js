// function declarations (hoisted)
function greet() {
  console.log('hello there');
}

// function expression (not hoisted)
const speak = function () {
  console.log('good day');
};

greet();
greet();
greet();

speak();
speak();
speak();
