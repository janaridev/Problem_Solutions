function grow(x) {
  let result = 1;

  for (prop in x) {
    result *= x[prop];
  }

  return result;
}

var result = grow([1, 2, 3]);
