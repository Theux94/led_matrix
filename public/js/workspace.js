
//Global information of the workspace 

    
workspace = {
    "scale":3,
    "height":96,
    "width":96,
    "image":{
        "height":0, "width":0, "x":0, "y":0,"src":''
    }
};


// SETTERS OF THE GLOBAL OBJECT WORKSPACE

function set_workspace(scale){
    workspace.scale = scale;
    workspace.width = scale*96;
}

// 
function positionimage(event, elem){
    var x = event.clientX;     // Get the horizontal coordinate
    var y = event.clientY;     // Get the vertical coordinate
    xe = x - panelMarginLeft;
    ye = y - elem.offsetTop;
    xx = Math.floor(xe/workspace.scale);
    yy = Math.floor(ye/workspace.scale);
	if(xx>320) xx=320;
	if(yy==33) yy=32;
    console.log("CoordinatesFinal: "+xx+"/"+yy);
}


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
	var fileToLoad = input.files[0];
        reader.onload = function (fileToLoad) {
	    workspace.image.src  = fileToLoad.target.result;
	    var image = new Image();
	    image.src = fileToLoad.target.result;
	    image.onload = function() {
		var width = this.width;
		var height = this.height;
		var scale = Math.floor(height/32);
		if (height>96){
		    var img_scale = height/96;
		    var img_width = Math.floor(width/img_scale);
		    var img_height = Math.floor(height/img_scale);
		}
		else{
		    var img_width = width;
		    var img_height = height;
		}
		var d = document.getElementById('imageMove');
		d.style.position = "absolute";
		d.style.left = 0+'px';
		d.style.top = 0+'px';
		$('#movingImage')
                    .attr('src', fileToLoad.target.result)
                    .width(img_width)
                    .height(img_height);
	    }
        };
        reader.readAsDataURL(input.files[0]);
    }
}
