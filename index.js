const id = document.querySelector("span");
const advice = document.querySelector("#advice");
const btn = document.querySelector("button")

btn.addEventListener("click", ()=>{
    fetch("https://api.adviceslip.com/advice")
    .then((res)=>{
        console.log("Resolved",res);

        return res.json();
    })
    .then((data)=>{
        console.log(data);
        // console.log(slip.id)
        id.innerHTML = data.slip.id;
        advice.innerHTML = data.slip.advice;
    })
    .catch((e)=>{
        console.log("Error!",e);
    });
    // axios.get("https://api.adviceslip.com/")
    // .then((res)=>{
    //     console.log("Response:",res);
    // })
    
})