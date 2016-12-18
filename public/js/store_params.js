
function store_peticion(){
    //Get content Img
    
    //Ajax peticion
    ajaxObj = new XMLHttpRequest();
    ajaxObj.open("POST", "/save", true);
    ajaxObj.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    ajaxObj.send('workspace='+JSON.stringify({img_src: workspace.image.src,
				 scale: workspace.scale, 
				 img_height: workspace.image.height,
				 img_width: workspace.image.width,
				 img_x: workspace.image.x,
				 img_y: workspace.image.y,
				}));
}


