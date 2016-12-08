
  //document.getElementById('files').addEventListener('change', handleFileSelect, false);

	function showMatrix(nr){

		switch(nr) {
    case '1':
		vanishPanels();
        document.getElementById("panel1").style.display = "block";
        break;
    case '2':
		vanishPanels();
		document.getElementById("panel1").style.display = "block";
        document.getElementById("panel2").style.display = "block";
        break;
	case '3':
		vanishPanels();
        document.getElementById("panel1").style.display = "block";
        document.getElementById("panel2").style.display = "block";
        document.getElementById("panel3").style.display = "block";
        break;
	case '4':
		vanishPanels();
		document.getElementById("panel1").style.display = "block";
        document.getElementById("panel2").style.display = "block";
        document.getElementById("panel3").style.display = "block";
        document.getElementById("panel4").style.display = "block";
        break;
	case '5':
		vanishPanels();
		document.getElementById("panel1").style.display = "block";
        document.getElementById("panel2").style.display = "block";
        document.getElementById("panel3").style.display = "block";
        document.getElementById("panel4").style.display = "block";
        document.getElementById("panel5").style.display = "block";
        break;
	case '6':
		vanishPanels();
		document.getElementById("panel1").style.display = "block";
        document.getElementById("panel2").style.display = "block";
        document.getElementById("panel3").style.display = "block";
        document.getElementById("panel4").style.display = "block";
        document.getElementById("panel5").style.display = "block";
        document.getElementById("panel6").style.display = "block";
        break;
	case '7':
		vanishPanels();
		document.getElementById("panel1").style.display = "block";
        document.getElementById("panel2").style.display = "block";
        document.getElementById("panel3").style.display = "block";
        document.getElementById("panel4").style.display = "block";
        document.getElementById("panel5").style.display = "block";
        document.getElementById("panel6").style.display = "block";
        document.getElementById("panel7").style.display = "block";
        break;
	case '8':
		vanishPanels();
		document.getElementById("panel1").style.display = "block";
        document.getElementById("panel2").style.display = "block";
        document.getElementById("panel3").style.display = "block";
        document.getElementById("panel4").style.display = "block";
        document.getElementById("panel5").style.display = "block";
        document.getElementById("panel6").style.display = "block";
        document.getElementById("panel7").style.display = "block";
        document.getElementById("panel8").style.display = "block";
        break;
	case '9':
		vanishPanels();
		document.getElementById("panel1").style.display = "block";
        document.getElementById("panel2").style.display = "block";
        document.getElementById("panel3").style.display = "block";
        document.getElementById("panel4").style.display = "block";
        document.getElementById("panel5").style.display = "block";
        document.getElementById("panel6").style.display = "block";
        document.getElementById("panel7").style.display = "block";
        document.getElementById("panel8").style.display = "block";
        document.getElementById("panel9").style.display = "block";
        break;
	case '10':
		vanishPanels();
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
