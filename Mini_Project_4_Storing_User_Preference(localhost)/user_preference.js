//Selection
 var selectFontSize = document.getElementById("selectFontSize");
 var selectBgColor = document.getElementById("selectBgColor");
 var buttonElement = document.getElementById("btn");
 var mainElement = document.querySelector("main");

 //change font size
const changeFontsize = (event) =>{
    var selectedFontSize = event.target.value;
    mainElement.style.fontSize = selectedFontSize;
    localStorage.setItem("fontSize",selectedFontSize);
}
//change background color
const changeBgColor = (event) =>{
    var selectedBgColor = event.target.value;
    mainElement.style.background = selectedBgColor;
    localStorage.setItem("bgColor",selectedBgColor);
}
//Clear Localhost
const buttonClicked = () =>{
    localStorage.removeItem("fontSize");
    localStorage.removeItem("bgColor");
    setValues("14px","aqua");

}
//add event listener
selectFontSize.addEventListener("change",changeFontsize);
selectBgColor.addEventListener("change",changeBgColor);
buttonElement.addEventListener("click",buttonClicked);
//load local storage value
const setValues = (fontSize,bgColor) =>{
    selectFontSize.value = fontSize;
    selectBgColor.value = bgColor;
    mainElement.style.fontSize = fontSize;
    mainElement.style.background = bgColor;
}
const initialSetup = () =>{
    const fontSize =localStorage.getItem("fontSize");
    const bgColor = localStorage.getItem("bgColor");
    if(fontSize && bgColor){
        setValues(fontSize,bgColor);
    }
    if(!fontSize && !bgColor){
        setValues("14px","aqua");
    }
    if(fontSize && !bgColor){
        setValues(fontSize,"aqua");
    }
    if(!fontSize && bgColor){
        setValues("14px",bgColor);
    }
}
initialSetup();