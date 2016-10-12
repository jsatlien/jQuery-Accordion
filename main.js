












function changeHeight (event) {
  var target = $(event.target);
  var currentBox;
  var previousBox;
  // console.log(target);
    if (target[0].id === "h1") {currentBox = $("#content1")};
    if (target[0].id === "h2") { currentBox = $("#content2")};
    if (target[0].id === "h3") { currentBox = $("#content3")};
    currentBox.toggleClass("bigBox");
    currentBox.toggleClass("boxcontent");
    // currentBox[0].innerHTML = "";
    console.log(currentBox);

};

function changeColor (event) {
  var target = $(event.target);
  target.toggleClass("headHover");
};


var head = $("header");
head.click(changeHeight);
head.hover(changeColor);
