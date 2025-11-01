let btn = document.getElementById('btnscroll');

window.onscroll = function(){
    if(scrollY >= 550){
        btn.style.display = 'block';
    }else{
        btn.style.display = 'none'; 
    }
}
btn.onclick = function(){
    scroll({
        top:0,
        left:0,
        behavior:'smooth'
    })
}