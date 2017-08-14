

const test2 = () => console.log(`in a.js : ${indexOne}`);

test1();
test2();

var textField = document.querySelector("#clickFiled");
textField.addEventListener("click", ()=>{
    console.log("clicked");
    document.getElementById("result").innerHTML='<p>clicked</p>';
});