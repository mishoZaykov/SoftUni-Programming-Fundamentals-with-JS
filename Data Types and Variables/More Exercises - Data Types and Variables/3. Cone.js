function cone(radius, height) {
  let p = 3.14;
  let volume = (1 / 3) * p * radius *radius * height;
  let lateralSurface = p * radius * Math.sqrt(radius * radius + height * height);
  let baseSurface = p * radius * radius;
  let totalSurfece = lateralSurface + baseSurface;
  console.log(`volume = ${volume.toFixed(4)}`);
  console.log(`area = ${totalSurfece.toFixed(4)}`);
}cone(3.3, 7.8)