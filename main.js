function copyText(){
    var copyText = document.getElementById("myInput");
    copyText.select();
    document.execCommand("copy");
    document.getElementById("notification").style.opacity = "1";
    setTimeout(() =>{
    document.getElementById("notification").style.opacity = "0";

    },1000)

    var text = document.getElementById("notification");
    text.innerHTML = "Text Copied!";
    text.style.fontSize = "22px";
    text.style.color = "white";
}