function showPicture() {
  var sourceOfPicture = "pie-chart.png";
  var img = document.getElementById('bigpic')
  img.src = sourceOfPicture.replace('90x90', '225x225');
  img.style.display = "block";
}

function showchart() {
  var sourceOfPicture = "bar-diagram.png";
  var img = document.getElementById('bigpic1')
  img.src = sourceOfPicture.replace('90x90', '225x225');
  img.style.display = "block";
}
