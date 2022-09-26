function requiredReading(numberOfPages, pagesReadInHour,daysToRead) {
  let totalHours = numberOfPages / pagesReadInHour;
  let requiredHours = totalHours / daysToRead;
  
  console.log(requiredHours);
  
}requiredReading(212, 20, 2)