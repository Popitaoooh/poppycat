var imagesArray = ["jb1.png","cc1.png","jb2.png","jb3.png","cc2.png","cc3.png","cc4.png"];

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
