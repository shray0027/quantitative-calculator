// cpsp
const form1 = document.querySelector(".cpsp-1");

form1.addEventListener('submit',(e)=>{
    e.preventDefault();
    const a =  Array.from(document.querySelectorAll(".cpsp-1 input")).reduce((acc,input)=>({
            ...acc,[input.name]:input.value
    }),{});
    const {cp ,gain} = a;
    const ans = (gain*100)/cp;
    document.querySelector(".cpsp-1-ans").innerHTML=ans;
})

const form2 = document.querySelector(".cpsp-2");

form2.addEventListener('submit',(e)=>{
    e.preventDefault();
    const a =  Array.from(document.querySelectorAll(".cpsp-2 input")).reduce((acc,input)=>({
            ...acc,[input.name]:input.value
    }),{});
    const {cp ,loss} = a;
    const ans = (loss*100)/cp;
    document.querySelector(".cpsp-2-ans").innerHTML=ans;
})

const form3 = document.querySelector(".cpsp-3");

form3.addEventListener('submit',(e)=>{
    e.preventDefault();
    const a =  Array.from(document.querySelectorAll(".cpsp-3 input")).reduce((acc,input)=>({
            ...acc,[input.name]:input.value
    }),{});
    const {sp ,gain} = a;
    const ans = (100*sp)/(100+gain);
    document.querySelector(".cpsp-3-ans").innerHTML=ans;
})