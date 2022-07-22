let grandient = document.querySelector(".gradient-wrapper");
let parent = document.querySelector(".color-picker-wrapper");
let colorCount = 1;
let colors = [];
// let gradientValue = "linear-gradient(to right"

function elements(){
    //color
    let color = document.createElement("div");
    color.classList.add("colors");
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

    //selecting color event           // value of text and color needs to be changed in colors 
    colorInp.addEventListener("mouseout", ()=>{
        textInp.value = colorInp.value;  
    });

    // gradientValue = gradientValue.concat(","+colorInp.value);       //issue

    //push color in colors array
    colors.push(color);

    colorCount++;
    return color;
}

parent.append(elements());
parent.append(elements());

let addColorBtn = document.querySelector(".add-more-color-wrapper");
addColorBtn.addEventListener("click",()=>{
    parent.append(elements());
});
let rmvColorBtn = document.querySelector(".remove-color-wrapper");
rmvColorBtn.addEventListener("click",()=>{
    parent.pop();                       // not working
});

let applyBtn = document.querySelector(".apply-btn");
applyBtn.addEventListener("mousedown", ()=>{
    applyBtn.style.padding = "6px 14px";
})
applyBtn.addEventListener("mouseup", ()=>{
    applyBtn.style.padding = "8px 16px";
})
// applyBtn.addEventListener("click", ()=>{
//     grandient.style.background = gradientValue+")";
//     console.log(gradientValue+")");
// })




