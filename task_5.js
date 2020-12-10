function areaOfTriangle(a, b, c) {
  let semiPerimeter = (1 / 2) * (a + b + c);
  let area = Math.sqrt(
    semiPerimeter *
    (semiPerimeter - a) *
    (semiPerimeter - b) *
    (semiPerimeter - c)
  );
  return area + ' sq.units';
}

