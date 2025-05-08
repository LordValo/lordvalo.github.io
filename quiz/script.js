// Fragen: 10 / +10 / -5 
var fragen = ["Wie GEIL findest du TIMMMMM?", "Wann wolltest du als letztes TIM bei einem Erwachsenen Film zuschauen?", "Wie viele ECHTE Haare hat er?", "Wie alt ist TIM die Geile Sauuu?", "Wie viele Länder waren unter Römischer Herrschaft zur Zeit seiner größten Ausdehnung?", "Mag Tim füße??", "Ist das Tim auf dem Fetten Bild?", "Wer ist die Geilste Sau auf der Welt?", "Was ist die größte Zahl?", "LETZTE FRAGE: Wann hat tim das letzte mal einen abgelassen?", "Vielen Dank fürs Spielen!"];
var lastQuestion = 11;
var answerIndex = [
  ["sehr geil", "er ist hund", "ja", "ka"],
  ["Nie", "vor 69 sekunden", "Was ist das", "Ich mag Jonas mehr"],
  ["200", "keine also Perücke", "Ich würde es gerne mit ihm Herausfinden...", "brauche es nicht zu wissen"],
  ["15 oder 16", "ka", "3", "69"],
  ["31", "25", "19", "46"],
  ["ka", "Ichaufjedenfallnicht", "FÜßEEE!!", "ja"],
  ["ja", "ne", "Tim in gigaform", "Baum"],
  ["Jonas Winkelhofer", "Veganerian", "TIMDIEGEILESAU!!!!!!!!!!", "Maddin"],
  ["5", "2", "Deutschland", "1"],
  ["will ich nicht wissen", "vor 3 min", "ich weiß es", "ich nicht"],
  ["1","1","1", "1"]
];
var trues=[1,2,3,1,4,1,3,3,1,3];
var points = 0;
var index = 1;
function draw() {

  document.getElementById("score").innerHTML = "Tim der GigaChad - Das Quiz | Punkte: " + points;
  document.getElementById("cFrage").innerHTML = "Frage nr. " + index + " - " + fragen[index - 1];
  update();
}
function update(){
  document.getElementById("b1").innerHTML=answerIndex[index-1][0];
  document.getElementById("b2").innerHTML=answerIndex[index-1][1];
  document.getElementById("b3").innerHTML=answerIndex[index-1][2];
  document.getElementById("b4").innerHTML=answerIndex[index-1][3];
}
function validate(id){
  if (index<lastQuestion){
  if (id==trues[index-1]){
    points+=10;
    document.getElementById("state").innerHTML="Right! +10 points!";
  } else {
    points-=5;
    document.getElementById("state").innerHTML="Wrong! -5 points!";
  }
  index++;
  draw();
  if (index==lastQuestion){
    stop();
  }
  } else {
    points=0;
    index=1;
    draw();
  }
}
function stop() {
  if (points <=-50){
    var note = "7?";
    document.getElementById("state").innerHTML="Es gibt Note 7???";
  } else if (points <= 10) {
    var note = 6;
    
    document.getElementById("state").innerHTML="Bist du etwa ein hater!";
  } else if (points < 25) {
    var note = 5;
    document.getElementById("state").innerHTML="In der Schule genauso gut wie Tim, wa?";
  } else if (points <= 50) {
    var note = 4;
    document.getElementById("state").innerHTML="Ausreichend, ne?";
  } else if (points <= 69) {
    var note = 3;
    document.getElementById("state").innerHTML="Was ist weiss und stoert beim Fruehstueck? Eine Lavine";
  } else if (points <= 85) {
    var note = 2;
    
    document.getElementById("state").innerHTML="Gut gemacht! Du bist fast ein GiggaChad wie Tim!";
  } else {
    var note = 1;
    
    document.getElementById("state").innerHTML="GGs!";
  }
  document.getElementById("cFrage").innerHTML = "Vielen Dank für's Spielen!";
    document.getElementById("score").innerHTML = "Tim der GigaChad - Das Quiz | Punkte: " + points + " | Note: " + note;
  document.getElementById("b1").innerHTML="Play again";
  document.getElementById("b2").innerHTML="Play again";
  document.getElementById("b3").innerHTML="Play again";
  document.getElementById("b4").innerHTML="Play again";
  
}
