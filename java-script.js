function show() {
  if (document.getElementById("icons").style.display == "none") {
    document.getElementById("icons").style.display = "flex";
    document.getElementById("icons").style.flexDirection = "column";
  } else {
    document.getElementById("icons").style.display = "none";
  }
}
// console.log(window.outerWidth);
//size of screen
window.onresize = function () {
  if (window.outerWidth >= 425) {
    // console.log(window.outerWidth);
    document.getElementById("icons").style.display = "flex";
    document.getElementById("icons").style.flexDirection = "column";
  }
  if (window.outerWidth >= 1027) {
    document.getElementById("icons").style.flexDirection = "row";
  }
};

//

//https://tobiasahlin.com/moving-letters/
// Wrap every letter in a span
var textWrapper = document.querySelector(".ml3");
var textWrapper2 = document.querySelector(".ml2");

textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml3 .letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i + 1),
  })
  .add({
    targets: ".ml3",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 3000,
  });
//
// Wrap every letter in a span
var textWrapper = document.querySelector(".ml2");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml2 .letter",
    scale: [1, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 150 * (i + 1),
  })
  .add({
    targets: ".ml2",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 3000,
  });
//

// Wrap every letter in a span
var textWrapper = document.querySelector(".ml7 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml7 .letter",
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i,
  })
  .add({
    targets: ".ml7",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 5000,
  });
