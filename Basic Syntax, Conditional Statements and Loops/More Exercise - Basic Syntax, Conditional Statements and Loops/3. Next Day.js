function nextDay(year, month, day) {
  let  nextDay = new Date(year, month - 1, day +1)
  let nextYear = nextDay.getFullYear();
  let nextMonth = nextDay.getMonth() + 1;
  let nextDate = nextDay.getDate();

  console.log(`${nextYear}-${nextMonth}-${nextDate}`);
}
nextDay(2020, 3, 24);
