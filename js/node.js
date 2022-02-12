let allInput = document.getElementById("allInput");
let inputValue = " ";
buttons = document.querySelectorAll("button");
for (let item of buttons) {
  item.addEventListener("click", function (e) {
    buttonText = e.target.innerText;
    console.log(buttonText);
    if (buttonText == "*") {
      inputValue += buttonText;
      allInput.value = inputValue;
    } else if (buttonText == "C") {
      inputValue = "";
      allInput.value = inputValue;
    } else if (buttonText == "=") {
      allInput.value = eval(inputValue);
    } else if (buttonText == "CE") {
      allInput.value = allInput.value.slice(0, -1);
    } else {
      inputValue += buttonText;
      allInput.value = inputValue;
    }
  });
}
