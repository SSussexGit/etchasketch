m = 4; 

function reset(dim){

	var drawing = $("#drawing");

	drawing.empty();
  
  for(var i = 0; i < dim; i++){ 
  	drawing.append("<div class='row'></div>"); 
  }
  
  var rows = $(".row");
  
  rows.css({"height": (100/dim).toString() + "%"});
  
  for(var j = 0; j < dim; j++){ 
  	rows.append("<div class='box''></div>"); 
  }		
  
  var boxes = $(".box");
  
  boxes.css({"width": (100/dim).toString() + "%"});
  
  boxes.mouseenter(function() {
  	$(this).css("background-color", "yellow"); 
  });
};

function main() {
	reset(dim);
  
  $('#button').click(function(){ 
  	dim = prompt("Enter Pixels Per Row (less than 100)", "4");
    while(dim >= 100 || dim < 1){
    	dim = prompt("Enter Pixels Per Row (Must be less than 100)", "4");
    }
    reset(dim);
  });

}

$(document).ready(main()); 
