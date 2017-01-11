
function move(e,image){

  panel = document.getElementById("panelWrapper");
  var newX = e.clientX;
  var newY = e.clientY;
  image = document.getElementById("imageMove");
  if ((newX >= panel.offsetLeft+2) && (newX <= panel.offsetLeft + panel.offsetWidth - workspace.image.width - 2 )){
      image.style.left = newX + "px";
  }
  
  if ((newY >= panel.offsetTop+2) && (newY <= panel.offsetTop + panel.offsetHeight - workspace.image.height - 2)){
      image.style.top = newY + "px";
  }


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
  document.addEventListener("mousemove", move, false);

}

function somewhereClick(e){
  panel = document.getElementById("panelWrapper");
  positionimage(e,panel);
  moving = !moving;
  document.removeEventListener("mousemove", move);

}

