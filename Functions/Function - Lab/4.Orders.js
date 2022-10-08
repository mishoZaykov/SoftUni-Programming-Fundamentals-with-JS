function orders(product, quantity) {
  let totalPrice = 0;

  switch (product) {
    case "coffee":
      totalPrice = quantity * 1.5;
      console.log(totalPrice.toFixed(2));
      break;
    case "water":
      totalPrice = quantity * 1.0;
      console.log(totalPrice.toFixed(2));
      break;
    case "coke":
      totalPrice = quantity * 1.4;
      console.log(totalPrice.toFixed(2));
      break;
    case "snacks":
      totalPrice = quantity * 2.0;
      console.log(totalPrice.toFixed(2));
      break;
  }
}
orders("water", 5);
