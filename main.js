var names = [ "Me", "Brother", "Mother", "Father"];
var pictures = [ "images.jpg", "boi.jpg", "mom.png", "dad.png"];

var i=0;
function updat(){
    i++;
     Numbers_of_family = 4;
     if(i > Numbers_of_family){
         i=0;
     }
      image = pictures[i];
      human= names[i];
      document.getElementById("meh").src = image;
      document.getElementById("ello").innerHTML = human;
      console.log(i)

}