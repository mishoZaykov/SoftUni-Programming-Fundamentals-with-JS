function vacation(groupPeople, typeOfGroup, dayOfTheWeek) {
  let price = 0;
  let total = 0;
  if (typeOfGroup === "Students" && dayOfTheWeek === "Friday") {
    price = 8.45;
  } else if (typeOfGroup === "Business" && dayOfTheWeek === "Friday") {
    price = 10.9;
  } else if (typeOfGroup === "Regular" && dayOfTheWeek === "Friday") {
    price = 15;
  }

  if (typeOfGroup === "Students" && dayOfTheWeek === "Saturday") {
    price = 9.8;
  } else if (typeOfGroup === "Business" && dayOfTheWeek === "Saturday") {
    price = 15.6;
  } else if (typeOfGroup === "Regular" && dayOfTheWeek === "Saturday") {
    price = 20;
  }

  if (typeOfGroup === "Students" && dayOfTheWeek === "Sunday") {
    price = 10.46;
  } else if (typeOfGroup === "Business" && dayOfTheWeek === "Sunday") {
    price = 16;
  } else if (typeOfGroup === "Regular" && dayOfTheWeek === "Sunday") {
    price = 22.5;
  }

  if (typeOfGroup === "Students" && groupPeople >= 30) {
    total = price * groupPeople;
    total = total * 0.85;
  } else if (typeOfGroup === "Business" && groupPeople >= 100) {
    groupPeople -= 10;
    price *= groupPeople;
    total = price;
  } else if (typeOfGroup === "Regular" && groupPeople >= 10 && groupPeople <= 20) {
    total = price * groupPeople;
    total = total * 0.95;
  } else {
    total = price * groupPeople;
  }
  console.log(`Total price: ${total.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");
