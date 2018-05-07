// JavaScript source code
var elem = new IkiSetir(".box");
elem.css({
        width: "800",
        height: "480",
       
    })
    
    var btnUp=document.querySelector(".up");

    btnUp.addEventListener("click",function(){
    	elem.slideUp(5000)
    	
    });

  
