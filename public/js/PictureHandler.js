
function move(e,image){

  var newX = e.clientX;
  var newY = e.clientY;
  image = document.getElementById("imageMove")
  image.style.left = newX + "px";
  image.style.top = newY + "px";

  
}

function initialClick(e) {

  if(moving){
    document.removeEventListener("mousemove", move);
    moving = !moving;
    panel = document.getElementById("panelWrapper");
    positionimage(e,panel);
    return;
  }
  
  moving = !moving;
  image = this;

  document.addEventListener("mousemove", move, false);

}

