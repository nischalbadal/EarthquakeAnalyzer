var table;

function preload(){

  table = loadTable('./earthquakedata.csv', 'csv', 'header');

  mapboxgl.accessToken = 'pk.eyJ1IjoibmlzY2hhbHNoYXJtYTU0MSIsImEiOiJjanRqaTYwa2QwdHZ1NDlscTF1cHBnaWt1In0.fRYDxzASRTR2_tUyg8xAmg';
  const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/nischalsharma541/cju72n6wj28cl1fppp0q0wgdd',
  center: [84.536732, 28.087929],
  zoom: 7.0
  });


  // Add zoom and rotation controls to the map.
  map1.addControl(new mapboxgl.NavigationControl());


}
function preload1(){
  document.getElementById("map-header").innerHTML = "Earthquake 2015 - Location Variation";

  table = loadTable('./earthquakedata.csv', 'csv', 'header');

  mapboxgl.accessToken = 'pk.eyJ1IjoibmlzY2hhbHNoYXJtYTU0MSIsImEiOiJjanRqaTYwa2QwdHZ1NDlscTF1cHBnaWt1In0.fRYDxzASRTR2_tUyg8xAmg';
  const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/nischalsharma541/cju74wa1u2auu1fo6xwt2uiip',
  center: [84.536732, 28.087929],
  zoom: 7.0
  });


  // Add zoom and rotation controls to the map.
  map1.addControl(new mapboxgl.NavigationControl());


}
function setup() {
  //count the columns
  noCanvas();
  console.log(table.getRowCount() + ' total rows in table');
  console.log(table.getColumnCount() + ' total columns in table');

  var x = table.getColumn('latitude');
  var y = table.getColumn('longitude');



  //cycle through the table
  for (let x = 0; x < table.getRowCount(); x++)
    for (let y = 0; y < table.getColumnCount(); y++) {
        console.log(table.getString(x,y));

        fill(255,0,255,200);
        ellipse(x,y,4,4)
    }
      console.log(table.length);
  // for( var i = 0; i < table.length; i++)
}
//
