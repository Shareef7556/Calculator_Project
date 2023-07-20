let btns=document.getElementsByClassName("btn")
let screens=document.getElementById("screen")
for (let i=0;i<btns.length;i++)
{
    btns[i].addEventListener("click",()=>
    {
        screens.value=screens.value+btns[i].innerText
    })
}
let equals=document.getElementById("equal")
equals.addEventListener("click",()=>
{
    screens.value=eval(screens.value)
})
let acq=document.getElementById("ac")
acq.addEventListener("click",()=>
{
    screens.value=" "
})
let ceq=document.getElementById("ce")
ceq.addEventListener("click",()=>
{
    screens.value=screens.value.slice(0,-1)
})