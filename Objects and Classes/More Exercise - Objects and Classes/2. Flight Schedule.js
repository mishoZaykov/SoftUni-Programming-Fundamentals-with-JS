function flightSchedule(input) {

  let specificSectorFlights = input.shift();
  let changedStatus = input.shift();
  let status = input.shift().toString();
  
  let flights = {}

  for (const flight of specificSectorFlights) {
    let [number, Destination] = flight.split(' ');
    flights[number] = {Destination, Status: 'Ready to fly'};
    
  }

  for (const flight of changedStatus) {
    let [number, currentStatus] = flight.split(' ');

    if(flights.hasOwnProperty(number)){
      flights[number].Status = currentStatus;
    }
  }
  for (const flight in flights) {
    if(flights[flight].Status === status){
      console.log(flights[flight]);
    }
  }
  
  
}
// flightSchedule([
//   [
//     "WN269 Delaware",
//     "FL2269 Oregon",
//     "WN498 Las Vegas",
//     "WN3145 Ohio",
//     "WN612 Alabama",
//     "WN4010 New York",
//     "WN1173 California",
//     "DL2120 Texas",
//     "KL5744 Illinois",
//     "WN678 Pennsylvania",
//   ],
//   [
//     "DL2120 Cancelled",
//     "WN612 Cancelled",
//     "WN1173 Cancelled",
//     "SK430 Cancelled",
//   ],
//   ["Cancelled"],
// ]);
flightSchedule([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
'WN612 Cancelled',
'WN1173 Cancelled',
'SK330 Cancelled'],
['Ready to fly']
]
)
