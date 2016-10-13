var firstbox = $("#content1");
console.log(firstbox);
firstbox[0].className = "bigBox";



function changeHeight (event) {
  var target = $(event.target);
  var currentBox;
  var lastBox;
  var nextBox;
  // console.log(target);
    if (target[0].id === "h1") {
      currentBox = $("#content1");
      nextBox = $("#content2");
      lastBox = $("#content3");
    };
    if (target[0].id === "h2") {
      currentBox = $("#content2");
      lastBox = $("#content1");
      nextBox = $("#content3");
    };
    if (target[0].id === "h3") {
      currentBox = $("#content3");
      lastBox = $("#content1");
      nextBox = $("#content2");
    };
    currentBox.toggleClass("bigBox");
    lastBox.addClass("boxcontent");
    nextBox.addClass("boxcontent");
    currentBox.toggleClass("boxcontent");
};

function changeColor (event) {
  var target = $(event.target);
  target.toggleClass("headHover");
};


var head = $("header");
head.click(changeHeight);
head.hover(changeColor);
