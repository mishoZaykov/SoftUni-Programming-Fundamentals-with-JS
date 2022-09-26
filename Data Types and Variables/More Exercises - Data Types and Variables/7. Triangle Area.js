function triangleArea(sideOne, sideTwo, sideThree) {
  let semiPerimeter = (sideOne + sideTwo + sideThree) / 2;
  let area = semiPerimeter * (semiPerimeter - sideOne) * (semiPerimeter - sideTwo) * (semiPerimeter - sideThree);
  console.log(Math.sqrt(area));
}triangleArea(2, 3.5, 4)