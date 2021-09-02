// cpsp
const form1 = document.querySelector(".cpsp-1");

form1.addEventListener('submit',(e)=>{
    e.preventDefault();
    const a =  Array.from(document.querySelectorAll(".cpsp-1 input")).reduce((acc,input)=>({
            ...acc,[input.name]:input.value
    }),{});
    let {cp ,sp} = a;
    cp=parseInt(cp);
    sp=parseInt(sp);
    console.log((Math.abs(sp-cp)*100));
    const ans = (Math.abs(sp-cp)*100)/cp;
    document.querySelector(".cpsp-1-ans").innerHTML=ans;
})


const form2 = document.querySelector(".cpsp-2");

form2.addEventListener('submit',(e)=>{
    e.preventDefault();
    const a =  Array.from(document.querySelectorAll(".cpsp-2 input")).reduce((acc,input)=>({
            ...acc,[input.name]:input.value
    }),{});
    let {cp ,gain} = a;
    cp=parseInt(cp);
    gain=parseInt(gain);
    const ans = ((100+gain)*cp)/100;
    document.querySelector(".cpsp-2-ans").innerHTML=ans;
})

const form3 = document.querySelector(".cpsp-3");

form3.addEventListener('submit',(e)=>{
    e.preventDefault();
    const a =  Array.from(document.querySelectorAll(".cpsp-3 input")).reduce((acc,input)=>({
            ...acc,[input.name]:input.value
    }),{});
    let {sp ,gain} = a;
    sp=parseInt(sp);
    gain=parseInt(gain);
    const ans = (100*sp)/(100+gain);
    document.querySelector(".cpsp-3-ans").innerHTML=ans;
})

const form4 = document.querySelector(".cpsp-4");

form4.addEventListener('submit',(e)=>{
    e.preventDefault();
    const a =  Array.from(document.querySelectorAll(".cpsp-4 input")).reduce((acc,input)=>({
            ...acc,[input.name]:input.value
    }),{});
    let {cp ,gain} = a;
    cp=parseInt(cp);
    gain=parseInt(gain);
    const ans = ((100-gain)*cp)/100;
    document.querySelector(".cpsp-4-ans").innerHTML=ans;
})

const form5 = document.querySelector(".cpsp-5");

form5.addEventListener('submit',(e)=>{
    e.preventDefault();
    const a =  Array.from(document.querySelectorAll(".cpsp-5 input")).reduce((acc,input)=>({
            ...acc,[input.name]:input.value
    }),{});
    let {sp ,gain} = a;
    sp=parseInt(sp);
    gain=parseInt(gain);
    const ans = (100*sp)/(100-gain);
    document.querySelector(".cpsp-5-ans").innerHTML=ans;
})

const form6 = document.querySelector(".cpsp-6");

form6.addEventListener('submit',(e)=>{
    e.preventDefault();
    const a =  Array.from(document.querySelectorAll(".cpsp-6 input")).reduce((acc,input)=>({
            ...acc,[input.name]:input.value
    }),{});
    let {x ,y} = a;
    x=parseInt(x);
    y=parseInt(y);
    const ans = x+y+(x*y)/100;
    document.querySelector(".cpsp-6-ans").innerHTML=ans;
})

const form7 = document.querySelector(".cpsp-7");

form7.addEventListener('submit',(e)=>{
    e.preventDefault();
    const a =  Array.from(document.querySelectorAll(".cpsp-7 input")).reduce((acc,input)=>({
            ...acc,[input.name]:input.value
    }),{});
    let {x ,y} = a;
    x=parseInt(x);
    y=parseInt(y);
    const ans = x-y-(x*y)/100;
    document.querySelector(".cpsp-7-ans").innerHTML=ans;
})

const form8 = document.querySelector(".cpsp-8");

form8.addEventListener('submit',(e)=>{
    e.preventDefault();
    const a =  Array.from(document.querySelectorAll(".cpsp-8 input")).reduce((acc,input)=>({
            ...acc,[input.name]:input.value
    }),{});
    let {x ,y,z} = a;
    x=parseInt(x);
    y=parseInt(y);
    z=parseInt(z);
    const ans = (y*100)/(z-x);
    document.querySelector(".cpsp-8-ans").innerHTML=ans;
})

const form9 = document.querySelector(".cpsp-9");

form9.addEventListener('submit',(e)=>{
    e.preventDefault();
    const a =  Array.from(document.querySelectorAll(".cpsp-9 input")).reduce((acc,input)=>({
            ...acc,[input.name]:input.value
    }),{});
    let {x ,y} = a;
    x=parseInt(x);
    y=parseInt(y);
    const ans = (x-y)*100/y;
    document.querySelector(".cpsp-9-ans").innerHTML=ans;
})