
let grandient = document.querySelector(".gradient-wrapper");
let parent = document.querySelector(".color-picker-wrapper");
let colorCount = 0;
function elements(){
    //color
    let color = document.createElement("div");
    color.classList.add("colors");
    color.setAttribute("id",`color${colorCount}`);
    //div
    let div = document.createElement("div");
    div.classList.add("colors");
    let divText = document.createTextNode("Color "+colorCount);
    div.appendChild(divText);
    //colorInp
    let colorInp = document.createElement("input");
    colorInp.setAttribute('type','color');
    colorInp.classList.add("color-btn");
    let colorInpId = `${colorCount}`;
    colorInp.setAttribute('id', colorInpId);
    //textInp
    let textInp = document.createElement("input");
    textInp.setAttribute('type','text');
    textInp.classList.add("color-input");
    let textInpId = `textInp${colorCount}`;
    textInp.setAttribute('id', textInpId);

    // append
    color.append(div);
    color.append(colorInp);
    color.append(textInp);

    colorInp.addEventListener("mouseout", ()=>{
        textInp.value = colorInp.value;  
    });

    return color;
}

colorCount++;
parent.append(elements());
console.log(colorCount);
colorCount++;
parent.append(elements());
console.log(colorCount);

let addColorBtn = document.querySelector(".add-more-color-wrapper");
addColorBtn.addEventListener("click",()=>{
    colorCount++;
    parent.append(elements());
});
let rmvColorBtn = document.querySelector(".remove-color-wrapper");
function removeColor(){
    let colorR = document.getElementById(`color${colorCount}`);
    console.log(colorR.id);
    parent.removeChild(colorR);
    colorCount--;
}
rmvColorBtn.addEventListener("click",()=> removeColor());

let applyBtn = document.querySelector(".apply-btn");
let resetBtn = document.querySelector(".reset-btn");

// apply button onclick event
applyBtn.addEventListener("click", ()=>{
    let currentCount = 1;
    let gradValue = "linear-gradient(to right";
    while(currentCount<=colorCount){
        let colorNum = document.getElementById(`${currentCount}`);
        gradValue=gradValue.concat(`,${colorNum.value}`);
        currentCount++;
    }
    gradValue = gradValue.concat(")");
    console.log(gradValue);
    grandient.style.background = gradValue; 

    //gtag
    gtag('event', 'applyBtnClicked');
})

// reset button onclick event
resetBtn.addEventListener("click", ()=>{
    while(colorCount >2){
        removeColor();
    } 
    while(colorCount>0){
        console.log("while k andar");
        let textId = document.getElementById(`textInp${colorCount}`);
        let colorId = document.getElementById(`${colorCount}`);
        textId.value = null;
        colorId.value = null;
        colorCount--;
    }
    colorCount = 2;
    grandient.style.background = "white";
})


//apply button css
applyBtn.addEventListener("mousedown", ()=>{
    applyBtn.style.padding = "6px 14px";
})
applyBtn.addEventListener("mouseup", ()=>{
    applyBtn.style.padding = "8px 16px";
})
//reset button css
resetBtn.addEventListener("mousedown", ()=>{
    resetBtn.style.padding = "6px 14px";
})
resetBtn.addEventListener("mouseup", ()=>{
    resetBtn.style.padding = "8px 16px";
})

// GTag
