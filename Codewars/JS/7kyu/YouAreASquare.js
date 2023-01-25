var isSquare = function (n) {
  for (let i = 0; ; i++) {
    if (i * i === n) {
      return true;
    } else if (i * i > n) {
      return false;
    }
  }
};

let result = isSquare(10);
