let modal = document.getElementById("modal_box");
var bod = document.getElementById("body");
var close_icon = document.getElementsByClassName("close_icon");
var btn = document.getElementsByClassName("btn");

function showModal(){
    setTimeout(()=>{
        modal.style.display = "block";
    }, 3000)
}

close_icon[0].addEventListener("click", ()=>{
    modal.style.display = "none";
});
btn[0].addEventListener("click",()=>{
    modal.style.display = "none";
});
    
bod.onload = showModal();