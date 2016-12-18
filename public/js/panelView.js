
	function showMatrix(nr){
		var allPanelSizeX;
		document.getElementById("panelWrapper").style.borderStyle = "dotted";
		switch(nr) {
    case '1':
		vanishPanels();
		increaseSize('1');
        document.getElementById("panel1").style.display = "inline-block";
		
		document.getElementById("panelWrapper").style.width = "96px";
		document.getElementById("panelWrapper").style.height = "100px";
		allPanelSizeX = '96'
        break;
    case '2':
		vanishPanels();
		increaseSize('2');
		document.getElementById("panel1").style.display = "inline-block";
        document.getElementById("panel2").style.display = "inline-block";
		document.getElementById("panelWrapper").style.width = "196px";
		allPanelSizeX = '192'
        break;
				
	case '3':
		vanishPanels();
		increaseSize('3');
        document.getElementById("panel1").style.display = "inline-block";
        document.getElementById("panel2").style.display = "inline-block";
        document.getElementById("panel3").style.display = "inline-block";
		document.getElementById("panelWrapper").style.width = "296px";
		allPanelSizeX = '288'
        break;
	case '4':
		vanishPanels();
		increaseSize('4');
		document.getElementById("panel1").style.display = "inline-block";
        document.getElementById("panel2").style.display = "inline-block";
        document.getElementById("panel3").style.display = "inline-block";
        document.getElementById("panel4").style.display = "inline-block";
		document.getElementById("panelWrapper").style.width = "396px";
		allPanelSizeX = '384'
        break;
	case '5':
		vanishPanels();
		increaseSize('5');
		document.getElementById("panel1").style.display = "inline-block";
        document.getElementById("panel2").style.display = "inline-block";
        document.getElementById("panel3").style.display = "inline-block";
        document.getElementById("panel4").style.display = "inline-block";
        document.getElementById("panel5").style.display = "inline-block";
		document.getElementById("panelWrapper").style.width = "496px";
		allPanelSizeX = '480'
        break;
	case '6':
		vanishPanels();
		increaseSize('6');
		document.getElementById("panel1").style.display = "inline-block";
        document.getElementById("panel2").style.display = "inline-block";
        document.getElementById("panel3").style.display = "inline-block";
        document.getElementById("panel4").style.display = "inline-block";
        document.getElementById("panel5").style.display = "inline-block";
        document.getElementById("panel6").style.display = "inline-block";
		document.getElementById("panelWrapper").style.width = "596px";
		allPanelSizeX = '576'
        break;
	case '7':
		vanishPanels();
		increaseSize('7');
		document.getElementById("panel1").style.display = "inline-block";
        document.getElementById("panel2").style.display = "inline-block";
        document.getElementById("panel3").style.display = "inline-block";
        document.getElementById("panel4").style.display = "inline-block";
        document.getElementById("panel5").style.display = "inline-block";
        document.getElementById("panel6").style.display = "inline-block";
        document.getElementById("panel7").style.display = "inline-block";
		document.getElementById("panelWrapper").style.width = "696px";
		allPanelSizeX = '672'
        break;
	case '8':
		vanishPanels();
		increaseSize('8');
		document.getElementById("panel1").style.display = "inline-block";
        document.getElementById("panel2").style.display = "inline-block";
        document.getElementById("panel3").style.display = "inline-block";
        document.getElementById("panel4").style.display = "inline-block";
        document.getElementById("panel5").style.display = "inline-block";
        document.getElementById("panel6").style.display = "inline-block";
        document.getElementById("panel7").style.display = "inline-block";
        document.getElementById("panel8").style.display = "inline-block";
		document.getElementById("panelWrapper").style.width = "796px";
		allPanelSizeX = '768'
        break;
	case '9':
	
		vanishPanels();
		increaseSize('9');
		document.getElementById("panel1").style.display = "inline-block";
        document.getElementById("panel2").style.display = "inline-block";
        document.getElementById("panel3").style.display = "inline-block";
        document.getElementById("panel4").style.display = "inline-block";
        document.getElementById("panel5").style.display = "inline-block";
        document.getElementById("panel6").style.display = "inline-block";
        document.getElementById("panel7").style.display = "inline-block";
        document.getElementById("panel8").style.display = "inline-block";
        document.getElementById("panel9").style.display = "inline-block";
		document.getElementById("panelWrapper").style.width = "896px";
		allPanelSizeX = '864'
        break;
	case '10':
		vanishPanels();
		increaseSize('10');
		document.getElementById("panel1").style.display = "inline-block";
        document.getElementById("panel2").style.display = "inline-block";
        document.getElementById("panel3").style.display = "inline-block";
        document.getElementById("panel4").style.display = "inline-block";
        document.getElementById("panel5").style.display = "inline-block";
        document.getElementById("panel6").style.display = "inline-block";
        document.getElementById("panel7").style.display = "inline-block";
        document.getElementById("panel8").style.display = "inline-block";
        document.getElementById("panel9").style.display = "inline-block";
        document.getElementById("panel10").style.display = "inline-block";
		document.getElementById("panelWrapper").style.width = "996px";
		allPanelSizeX = '960'
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
