let colorBtn1 = document.querySelector("#color-btn1");
let colorBtn2 = document.querySelector("#color-btn2");
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let apply = document.querySelector(".apply-btn");
let gradient = document.querySelector(".gradient-wrapper");
let applyBtn = document.querySelector(".apply-btn");

colorBtn1.addEventListener("mouseout", ()=>{
    input1.value = colorBtn1.value;

});
colorBtn2.addEventListener("mouseout", ()=>{
    input2.value = colorBtn2.value;
});
apply.addEventListener("click", ()=>{
    gradient.style.background = "linear-gradient(to right,"+input1.value+","+input2.value+")";
})
applyBtn.addEventListener("mousedown", ()=>{
    applyBtn.style.padding = "6px 14px";
})
applyBtn.addEventListener("mouseup", ()=>{
    applyBtn.style.padding = "8px 16px";
})
