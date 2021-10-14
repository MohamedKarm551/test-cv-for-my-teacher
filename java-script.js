 function show() {
     if (document.getElementById("icons").style.display == "none") {
         document.getElementById("icons").style.display = "flex";
         document.getElementById("icons").style.flexDirection = "column";
     } else {
         document.getElementById("icons").style.display = "none";
     }
 }