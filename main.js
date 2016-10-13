var firstbox = $("#content1");
firstbox.addClass("bigbox")

var head = $("header");
head.click(changeHeight);
head.hover(changeColor);

function changeHeight (event) {
  var target = $(event.target);
  var currentBox;
  var lastBox;
  var nextBox;
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
    currentBox.addClass("bigbox");
    lastBox.removeClass("bigbox")
    lastBox.addClass("boxcontent")
    nextBox.removeClass("bigbox");
    nextBox.addClass("boxcontent")
};

function changeColor (event) {
  var target = $(event.target);
  target.toggleClass("headHover");
};
