
//Global information of the workspace 

    
workspace = {
    "scale":1,
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
    xe = x - elem.offsetLeft;
    ye = y - elem.offsetTop;
    xx = Math.round(xe/workspace.scale);
    yy = Math.round(ye/workspace.scale);
    console.log("Coordinates: "+xx+"/"+yy);
    
}


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result)
                .width(96)
                .height(96);
        };
	reader.onloadend = function () {
	    workspace.image.src  = reader.result;
	}
        reader.readAsDataURL(input.files[0]);
    }
}
