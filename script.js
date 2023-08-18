let curentItem = "";
let curentItemId = "";
// ------------------create new  item --------------------------
let classCounter = 0;
document.getElementById("create-item").addEventListener("click", function (e) {
  let mainTextAreaContainer = document.getElementById("text-area-id");
  let childCounter = mainTextAreaContainer.childElementCount;
  let idCounter = `new-item-${childCounter}`;
  let newDiv = document.createElement("div");
  newDiv.setAttribute("class", idCounter);
  newDiv.setAttribute("contenteditable", true);
  newDiv.setAttribute("id", idCounter);
  newDiv.style.borderBottom = "1px solid gray";
  newDiv.style.minHeight = "28px";
  newDiv.style.marginBottom = "2px";
  newDiv.style.paddingLeft = "5px";
  newDiv.style.paddingRight = "5px";
  newDiv.style.outline = "0px";
  newDiv.innerText = "";
  textarea.appendChild(newDiv);
  newDiv.addEventListener("click", function (event) {
    curentItem = event.target.className;
    curentItemId = event.target.id;
  });
  // cursorFoucs(idCounter);
  classCounter += 1;
});
function cursorFoucs(focus) {
  document.getElementById(focus).focus();
}
// text decoration container ---------------
const bold = document.getElementById("bold-id");
const italic = document.getElementById("italic-id");
const underline = document.getElementById("underline-id");
const highlight = document.getElementById("highlight-id");

// text align container ---------------
const leftAlign = document.getElementById("left-id");
const centerAlign = document.getElementById("center-id");
const rightAlign = document.getElementById("right-id");
const justifyAlign = document.getElementById("justify-id");

// font decoration container ---------------
const fontSize = document.getElementById("font-size-id");
const fontCase = document.getElementById("case-id");
const fontColor = document.getElementById("color-id");

// text area container -----------
const textarea = document.getElementById("text-area-id");

/*------------------------------------------------------------------------------------------
 ----------------------------text decoratin function part ---------------------------------
------------------------------------------------------------------------------------------*/
let boldCounter = 0;
bold.addEventListener("click", function (e) {
  boldCounter += 1;
  if (boldCounter % 2 !== 0) {
    document.getElementsByClassName(curentItem)[0].style.fontWeight = "bold";
  } else {
    document.getElementsByClassName(curentItem)[0].style.fontWeight = "";
  }
}); //bold end--------------
let italicCounter = 0;
italic.addEventListener("click", function () {
  italicCounter += 1;
  if (italicCounter % 2 !== 0) {
    document.getElementsByClassName(curentItem)[0].style.fontStyle = "italic";
  } else {
    document.getElementsByClassName(curentItem)[0].style.fontStyle = "normal";
  }
}); //italic end----
let underlineCounter = 0;
underline.addEventListener("click", function () {
  underlineCounter += 1;
  if (underlineCounter % 2 !== 0) {
    document.getElementsByClassName(curentItem)[0].style.textDecoration =
      "underline 2px";
  } else {
    document.getElementsByClassName(curentItem)[0].style.textDecoration = "";
  }
}); //underline end ----------

let backgroundCounter = 0;
highlight.addEventListener("click", function () {
  backgroundCounter += 1;
  if (backgroundCounter % 2 !== 0) {
    document.getElementsByClassName(curentItem)[0].style.backgroundColor =
      "#EBE76C";
  } else {
    document.getElementsByClassName(curentItem)[0].style.backgroundColor = "";
  }
}); //background color end ----------

/*------------------------------------------------------------------------------------------
 ----------------------------text align function part ---------------------------------
------------------------------------------------------------------------------------------*/
let leftAlignCounter = 0;
leftAlign.addEventListener("click", function () {
  leftAlignCounter += 1;
  if (leftAlignCounter % 2 !== 0) {
    document.getElementsByClassName(curentItem)[0].style.textAlign = "left";
  } else {
    document.getElementsByClassName(curentItem)[0].style.textAlign = "";
  }
}); //text align left end -----
let centerAlignCounter = 0;
centerAlign.addEventListener("click", function () {
  centerAlignCounter += 1;
  if (centerAlignCounter % 2 !== 0) {
    document.getElementsByClassName(curentItem)[0].style.textAlign = "center";
  } else {
    document.getElementsByClassName(curentItem)[0].style.textAlign = "";
  }
}); //text align center end ---
let rightAlignCounter = 0;
rightAlign.addEventListener("click", function () {
  rightAlignCounter += 1;
  if (rightAlignCounter % 2 !== 0) {
    document.getElementsByClassName(curentItem)[0].style.textAlign = "right";
  } else {
    document.getElementsByClassName(curentItem)[0].style.textAlign = "";
  }
}); //text align right end ---
let justifyAlignCounter = 0;
justifyAlign.addEventListener("click", function () {
  justifyAlignCounter += 1;
  if (justifyAlignCounter % 2 !== 0) {
    document.getElementsByClassName(curentItem)[0].style.textAlign = "justify";
  } else {
    document.getElementsByClassName(curentItem)[0].style.textAlign = "";
  }
}); //text align justify end ---

/*------------------------------------------------------------------------------------------
 ----------------------------font size , color, case  function part ---------------------------------
------------------------------------------------------------------------------------------*/

fontSize.addEventListener("keyup", function () {
  let inputFontVaue = fontSize.value;
  document.getElementsByClassName(curentItem)[0].style.fontSize =
    inputFontVaue + "px";
}); //text size one ---------
fontSize.addEventListener("click", function () {
  let inputFontVaue = fontSize.value;
  document.getElementsByClassName(curentItem)[0].style.fontSize =
    inputFontVaue + "px";
}); //text size two  ---------
let fontCaseCounter = 0;
fontCase.addEventListener("click", function () {
  fontCaseCounter += 1;
  if (fontCaseCounter % 3 == 0) {
    document.getElementsByClassName(curentItem)[0].style.textTransform =
      "lowercase";
  } else if (fontCaseCounter % 2 !== 0) {
    document.getElementsByClassName(curentItem)[0].style.textTransform =
      "capitalize";
  } else if (fontCaseCounter % 2 === 0) {
    document.getElementsByClassName(curentItem)[0].style.textTransform =
      "uppercase";
  } else {
    document.getElementsByClassName(curentItem)[0].style.textTransform = "";
  }
}); //text case end ----------

fontColor.addEventListener("change", function (e) {
  let inputFontVaueColor = fontColor.value;
  document.getElementsByClassName(curentItem)[0].style.color =
    inputFontVaueColor;
}); // text color end ------
// ------------------------- copy icon --------------------------------
// document.getElementById("copy").addEventListener("click", () => {
//   console.log(textarea.innerText);
// });

/*------------------------------------------------------------------------------------------
 ----------------------------text-area-container function part ---------------------------------
------------------------------------------------------------------------------------------*/
// ------------------------------- delete item ------------------------
let deleteCounte = 0;
document.getElementById("delete").addEventListener("click", function (e) {
  deleteCounte += 1;
  if (deleteCounte % 2 !== 0) {
    document.getElementsByClassName(curentItem)[0].style.display = "none";
  } else {
    document.getElementsByClassName(curentItem)[0].style.display = "block";
  }
});

// ------------------------------- delete border ------------------------
let borderCounter = 0;
document
  .getElementById("border-remove")
  .addEventListener("click", function (e) {
    borderCounter += 1;
    if (borderCounter % 2 !== 0) {
      document.getElementsByClassName(curentItem)[0].style.border = "0px";
    } else {
      document.getElementsByClassName(curentItem)[0].style.borderBottom =
        "1px solid gray";
    }
  });

// ------------------------------- create list item  ------------------------
let mainTextAreaContainer = document.getElementById("text-area-id");
mainTextAreaContainer.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    alert(`
    Please do not press the Enter Button.
    Here Enter Button not working.
    `);
    return;
  }
});

document.getElementById("list-create").addEventListener("click", function () {
  let mainTextAreaContainer = document.getElementById("text-area-id");
  let childCounter = mainTextAreaContainer.childElementCount;
  let idCounter = `new-item-${childCounter}`;
  let li = document.createElement("li");
  li.setAttribute("class", idCounter);
  li.setAttribute("contenteditable", true);
  li.setAttribute("id", idCounter);
  li.style.borderBottom = "1px solid gray";
  li.style.minHeight = "28px";
  li.style.marginBottom = "2px";
  li.style.paddingLeft = "5px";
  li.style.paddingRight = "5px";
  li.style.outline = "0px";
  li.innerText = "";
  textarea.appendChild(li);

  li.addEventListener("click", function (event) {
    curentItem = event.target.className;
    curentItemId = event.target.id;
  });

  // cursorFoucs(idCounter);
  classCounter += 1;
});
