

function toggleFunction(){
     document.querySelector('.toggle-div').classList.toggle("active");
}

window.onscroll=()=>{
    document.querySelector('.toggle-div').classList.remove("active");
}