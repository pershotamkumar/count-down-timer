let enddate = " 20 July 2024 10:00 AM";
document.querySelector("#head").innerText=enddate


let inputs=document.querySelectorAll("input")

function clock(){
    let end= new Date(enddate)
    let now=new Date()
    let diff = (end-now)/1000;

        if(diff <0) return;

    //convert number into days
    inputs[0].value=Math.floor(diff / 3600 / 24)
    //convert into hours
    inputs[1].value=Math.floor(diff / 3600 )% 24 
  
    //conert into mins
    inputs[2].value=Math.floor(diff / 60 ) % 60
    //convert into seconds
    inputs[3].value=Math.floor(diff) % 60
    console.log(now)
    console.log(end)
}


setInterval(() => {
    clock()
}, 1000);