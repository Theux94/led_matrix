

function showMatrix(nr){
    switch(nr) {
    case '1':
	vanishPanels();
	increaseSize('1');
        document.getElementById("panel1").style.display = "block";
	document.getElementById("panel1").style.marginLeft = "45%";
	set_workspace(1);
        break;
    case '2':
	vanishPanels();
	increaseSize('2');
	document.getElementById("panel1").style.marginLeft = "45%";
	document.getElementById("panel1").style.display = "block";
        document.getElementById("panel2").style.display = "block";
        set_workspace(2);
	break;
    case '3':
	vanishPanels();
	increaseSize('3');
	document.getElementById("panel1").style.marginLeft = "40%";
        document.getElementById("panel1").style.display = "block";
        document.getElementById("panel2").style.display = "block";
        document.getElementById("panel3").style.display = "block";
	set_workspace(3);
        break;
    case '4':
	vanishPanels();
	increaseSize('4');
	document.getElementById("panel1").style.marginLeft = "35%";
	document.getElementById("panel1").style.display = "block";
        document.getElementById("panel2").style.display = "block";
        document.getElementById("panel3").style.display = "block";
        document.getElementById("panel4").style.display = "block";
        set_workspace(4);
	break;
    case '5':
	vanishPanels();
	increaseSize('5');
	document.getElementById("panel1").style.marginLeft = "32%";
	document.getElementById("panel1").style.display = "block";
        document.getElementById("panel2").style.display = "block";
        document.getElementById("panel3").style.display = "block";
        document.getElementById("panel4").style.display = "block";
        document.getElementById("panel5").style.display = "block";
	set_workspace(5);
        break;
    case '6':
	vanishPanels();
	increaseSize('6');
	document.getElementById("panel1").style.marginLeft = "27%";
	document.getElementById("panel1").style.display = "block";
        document.getElementById("panel2").style.display = "block";
        document.getElementById("panel3").style.display = "block";
        document.getElementById("panel4").style.display = "block";
        document.getElementById("panel5").style.display = "block";
        document.getElementById("panel6").style.display = "block";
	set_workspace(6);
        break;
    case '7':
	vanishPanels();
	increaseSize('7');
	document.getElementById("panel1").style.marginLeft = "21%";
	document.getElementById("panel1").style.display = "block";
        document.getElementById("panel2").style.display = "block";
        document.getElementById("panel3").style.display = "block";
        document.getElementById("panel4").style.display = "block";
        document.getElementById("panel5").style.display = "block";
        document.getElementById("panel6").style.display = "block";
        document.getElementById("panel7").style.display = "block";
	set_workspace(7);
        break;
    case '8':
	vanishPanels();
	increaseSize('8');
	document.getElementById("panel1").style.marginLeft = "19%";
	document.getElementById("panel1").style.display = "block";
        document.getElementById("panel2").style.display = "block";
        document.getElementById("panel3").style.display = "block";
        document.getElementById("panel4").style.display = "block";
        document.getElementById("panel5").style.display = "block";
        document.getElementById("panel6").style.display = "block";
        document.getElementById("panel7").style.display = "block";
        document.getElementById("panel8").style.display = "block";
	set_workspace(8);
        break;
    case '9':
	vanishPanels();
	increaseSize('9');
	document.getElementById("panel1").style.marginLeft = "15%";
	document.getElementById("panel1").style.display = "block";
        document.getElementById("panel2").style.display = "block";
        document.getElementById("panel3").style.display = "block";
        document.getElementById("panel4").style.display = "block";
        document.getElementById("panel5").style.display = "block";
        document.getElementById("panel6").style.display = "block";
        document.getElementById("panel7").style.display = "block";
        document.getElementById("panel8").style.display = "block";
        document.getElementById("panel9").style.display = "block";
	set_workspace(9);
        break;
    case '10':
	vanishPanels();
	increaseSize('10');
	document.getElementById("panel1").style.marginLeft = "13%";
	document.getElementById("panel1").style.display = "block";
        document.getElementById("panel2").style.display = "block";
        document.getElementById("panel3").style.display = "block";
        document.getElementById("panel4").style.display = "block";
        document.getElementById("panel5").style.display = "block";
        document.getElementById("panel6").style.display = "block";
        document.getElementById("panel7").style.display = "block";
        document.getElementById("panel8").style.display = "block";
        document.getElementById("panel9").style.display = "block";
        document.getElementById("panel10").style.display = "block";
        set_workspace(10);
	break;
    default:
        alert("Something went wrong!")
    } 
}
function vanishPanels(){
    document.getElementById("panel1").style.display = "none";
    document.getElementById("panel2").style.display = "none";
    document.getElementById("panel3").style.display = "none";
    document.getElementById("panel4").style.display = "none";
    document.getElementById("panel5").style.display = "none";
    document.getElementById("panel6").style.display = "none";
    document.getElementById("panel7").style.display = "none";
    document.getElementById("panel8").style.display = "none";
    document.getElementById("panel9").style.display = "none";
    document.getElementById("panel10").style.display = "none";
}
function increaseSize(p){
    var panel1 = document.getElementById("panel1").style;
    var panel2 = document.getElementById("panel2").style;
    var panel3 = document.getElementById("panel3").style; 
    var panel4 = document.getElementById("panel4").style;
    var panel5 = document.getElementById("panel5").style;
    var panel6 = document.getElementById("panel6").style;
    var panel7 = document.getElementById("panel7").style; 
    var panel8 = document.getElementById("panel8").style;
    var panel9 = document.getElementById("panel9").style;
    var panel10 = document.getElementById("panel10").style;

    if(p>=1){
	panel1.width = "96px";
	panel1.height = "96px";}
    if(p>=2){
	panel2.width = "96px";
	panel2.height = "96px";}
    if(p>=3){
	panel3.width = "96px";
	panel3.height = "96px";}
    if(p>=4){
	panel4.width = "96px";
	panel4.height = "96px";}
    if(p>=5){
	panel5.width = "96px";
	panel5.height = "96px";}
    if(p>=6){
	panel6.width = "96px";
	panel6.height = "96px";}
    if(p>=7){
	panel7.width = "96px";
	panel7.height = "96px";}
    if(p>=8){
	panel8.width = "96px";
	panel8.height = "96px";}
    if(p>=9){
	panel9.width = "96px";
	panel9.height = "96px";}
    if(p>=10){
	panel10.width = "96px";
	panel10.height = "96px";}
}



