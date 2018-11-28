var myloc;
var myMap;
var canvas;
var mappa = new Mappa('MapboxGL', "pk.eyJ1Ijoic3Jkd2piIiwiYSI6ImNqb3IwZDQwOTBhdG8za3JuM2s4djc2Zm0ifQ.4TjgyjeOq_0JX7xcjEG0Cg");
var shanghaiLat = 31.2243085;
var shanghaiLon = 120.9162903;

var options = {
  lat: shanghaiLat,
  lng: shanghaiLon,
  zoom: 3,
  style: 'mapbox://styles/srdwjb/cjor0hak3curi2rlmm8c1c6oa',
  pitch: 30
}

function preload() {
  myloc = getCurrentPosition();

}

function setup() {

  canvas = createCanvas(windowWidth, windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  var distance = calcGeoDistance(myloc.latitude, shanghaiLat, myloc.longitude, shanghaiLon, "km");
  distanceTEXT = Math.round(distance)

  // console.log(distance);

  // put setup code here
}

function draw() {
  clear();
  fill(random(255), random(255), random(255));
  var pointhere = myMap.latLngToPixel(myloc.latitude, myloc.longitude);
  var pointsh = myMap.latLngToPixel(shanghaiLat, shanghaiLon);

  push()
  strokeWeight(2);
  stroke(255)
  line(pointhere.x, pointhere.y, pointsh.x, pointsh.y);
  pop()

  ellipse(pointhere.x, pointhere.y, 15);
  ellipse(pointsh.x, pointsh.y, 15);



  fill(255);
  textFont('Goudy Old Style');
  textSize(30);
  textAlign(CENTER);
  text('HOW FAR ARE YOU FROM SHANGHAI?', windowWidth / 2, windowHeight / 6);



  fill("red");
  textFont('Goudy Old Style');
  textSize(20);
  text('YOU ARE HERE', pointhere.x - 5, pointhere.y - 20);

  fill(0);
  text('YOU ARE ' + distanceTEXT + ' KM AWAY FROM SHANGHAI.', windowWidth / 2, windowHeight / 6 + 40);



  // put drawing code here
}
