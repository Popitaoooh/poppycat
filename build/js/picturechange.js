var imagesArray = ["images/jbcc/jb1.png","images/jbcc/cc1.png","images/jbcc/jb2.png","images/jbcc/jb3.png","images/jbcc/cc2.png","images/jbcc/cc3.png","images/jbcc/cc4.png"];

window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        displayImage();
    }
}

function displayImage() {

    var num = Math.floor(Math.random() * imagesArray.length);
 
    document.canvas.src = imagesArray[num];
}