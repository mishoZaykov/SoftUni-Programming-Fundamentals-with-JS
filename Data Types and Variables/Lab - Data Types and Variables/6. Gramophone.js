function gramophone(band, album, song) {
  let fullRotation = 2.5
  let songDuration = (album.length * band.length) * song.length / 2
  let rotation = songDuration / fullRotation;
  console.log(`The plate was rotated ${Math.ceil(rotation)} times.`);
}gramophone('Black Sabbath', 'Paranoid', 'War Pigs');