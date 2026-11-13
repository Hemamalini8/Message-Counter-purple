var box=document.getElementById("box")
var text=document.getElementById("text")
text.addEventListener("focus",function(event){
    event.preventDefault()
    box.style.backgroundColor="#E5E7EB";
})
text.addEventListener("blur",function(){
    box.style.backgroundColor="#F5F3FF"
})
text.addEventListener("input",function(){
    var count=document.getElementById("count")
    var x=text.value.length
    var limit=document.getElementById("limit")
    if(x>200){
        text.value = text.value.slice(0, 200); 
        
        limit.classList.remove("hidden")
    }
    else{
        limit.classList.add("hidden")
        count.textContent=x+" typed / 200 max"
    }
    
})