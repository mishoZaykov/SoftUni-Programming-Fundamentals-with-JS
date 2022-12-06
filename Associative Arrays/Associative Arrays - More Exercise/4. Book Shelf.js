function bookShelf(input) {

  let shelfs = {};

  for (let line of input) {
    if(line.includes('->')){
      let [shelfID, genre] = line.split(' -> ');
      if(!shelfs.hasOwnProperty(shelfID)){
        shelfs[shelfID] = { [genre]: []};
      }
    }else{
      let [bookInfo, genre] = line.split(', ');

      for (let key in shelfs) {
        if(shelfs[key].hasOwnProperty(genre)){
          shelfs[key][genre].push(bookInfo);
          break;
        }
      }
    }
    
  } 
  Object.keys(shelfs).sort((a, b) => Object.entries(shelfs[b])[0][1].length - Object.entries(shelfs[a])[0][1].length)
    .forEach(shelfID =>{
      console.log(`${shelfID} ${Object.keys(shelfs[shelfID])}: ${Object.values(shelfs[shelfID])[0].length}`);
      Object.values(shelfs[shelfID]).forEach(values => {
        values.sort((a,b) => a.localeCompare(b)).forEach(v => {
          console.log(`--> ${v}`);
        });
      });
    })

}
bookShelf([
  "1 -> history",
  "1 -> action",
  "Death in Time: Criss Bell, mystery",
  "2 -> mystery",
  "3 -> sci-fi",
  "Child of Silver: Bruce Rich, mystery",
  "Hurting Secrets: Dustin Bolt, action",
  "Future of Dawn: Aiden Rose, sci-fi",
  "Lions and Rats: Gabe Roads, history",
  "2 -> romance",
  "Effect of the Void: Shay B, romance",
  "Losing Dreams: Gail Starr, sci-fi",
  "Name of Earth: Jo Bell, sci-fi",
  "Pilots of Stone: Brook Jay, history",
]);
