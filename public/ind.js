// We select the SVG into the page
var svg = document.querySelector("svg");

// If browser supports pointer events
if (window.PointerEvent) {
  svg.addEventListener("pointerdown", onPointerDown); // Pointer is pressed
  svg.addEventListener("pointerup", onPointerUp); // Releasing the pointer
  svg.addEventListener("pointerleave", onPointerUp); // Pointer gets out of the SVG area
  svg.addEventListener("pointermove", onPointerMove); // Pointer is moving
} else {
  // Add all mouse events listeners fallback
  svg.addEventListener("mousedown", onPointerDown); // Pressing the mouse
  svg.addEventListener("mouseup", onPointerUp); // Releasing the mouse
  svg.addEventListener("mouseleave", onPointerUp); // Mouse gets out of the SVG area
  svg.addEventListener("mousemove", onPointerMove); // Mouse is moving

  // Add all touch events listeners fallback
  svg.addEventListener("touchstart", onPointerDown); // Finger is touching the screen
  svg.addEventListener("touchend", onPointerUp); // Finger is no longer touching the screen
  svg.addEventListener("touchmove", onPointerMove); // Finger is moving
}

// Create an SVG point that contains x & y values
var point = svg.createSVGPoint();
// This function returns an object with X & Y values from the pointer event
function getPointFromEvent(event) {
  // If even is triggered by a touch event, we get the position of the first finger
  if (event.targetTouches) {
    point.x = event.targetTouches[0].clientX;
    point.y = event.targetTouches[0].clientY;
  } else {
    point.x = event.clientX;
    point.y = event.clientY;
  }

  // We get the current transformation matrix of the SVG and we inverse it
  var invertedSVGMatrix = svg.getScreenCTM().inverse();

  return point.matrixTransform(invertedSVGMatrix);
}

// This variable will be used later for move events to check if pointer is down or not
var isPointerDown = false;

// This variable will contain the original coordinates when the user start pressing the mouse or touching the screen
var pointerOrigin;

// Function called by the event listeners when user start pressing/touching
function onPointerDown(event) {
  isPointerDown = true; // We set the pointer as down

  // We get the pointer position on click/touchdown so we can get the value once the user starts to drag
  pointerOrigin = getPointFromEvent(event);
}

// We save the original values from the viewBox
var viewBox = svg.viewBox.baseVal;

// Function called by the event listeners when user start moving/dragging
function onPointerMove(event) {
  // Only run this function if the pointer is down
  if (!isPointerDown) {
    return;
  }
  // This prevent user to do a selection on the page
  event.preventDefault();

  // Get the pointer position as an SVG Point
  var pointerPosition = getPointFromEvent(event);

  // Update the viewBox variable with the distance from origin and current position
  // We don't need to take care of a ratio because this is handled in the getPointFromEvent function
  viewBox.x -= pointerPosition.x - pointerOrigin.x;
  viewBox.y -= pointerPosition.y - pointerOrigin.y;
}

function onPointerUp() {
  // The pointer is no longer considered as down
  isPointerDown = false;
}

// $(document).ready(function () {
//   const $cont = $(".cont");
//   const $slider = $(".slider");
//   const $nav = $(".nav");
//   const winW = $(window).width();
//   const animSpd = 750; // Change also in CSS
//   const distOfLetGo = winW * 0.2;
//   let curSlide = 1;
//   let animation = false;
//   let autoScrollVar = true;
//   let diff = 0;
//   let count = 1;
//   var tim;

//   // Generating slides
//   let arrCities = [
//     "Uttrakhand",
//     "Hardiwar",
//     "Rishikesh",
//     "Udaipur",
//     "Rajasthan",
//   ]; // Change number of slides in CSS also
//   let numOfCities = arrCities.length;
//   let arrCitiesDivided = [];

//   arrCities.map((city) => {
//     let length = city.length;
//     let letters = Math.floor(length / 4);
//     let exp = new RegExp(".{1," + letters + "}", "g");

//     arrCitiesDivided.push(city.match(exp));
//   });

//   let generateSlide = function (city) {
//     let frag1 = $(document.createDocumentFragment());
//     let frag2 = $(document.createDocumentFragment());
//     const numSlide = arrCities.indexOf(arrCities[city]) + 1;
//     const firstLetter = arrCitiesDivided[city][0].charAt(0);

//     const $slide =
//       $(`<div data-target="${numSlide}" class="slide slide--${numSlide}">
// 							<div class="slide__darkbg slide--${numSlide}__darkbg"></div>
// 							<div class="slide__text-wrapper slide--${numSlide}__text-wrapper"></div>
// 						</div>`);

//     const letter = $(`<div class="slide__letter slide--${numSlide}__letter">
// 							${firstLetter}
// 						</div>`);

//     for (let i = 0, length = arrCitiesDivided[city].length; i < length; i++) {
//       const text = $(`<div class="slide__text slide__text--${i + 1}">
// 								${arrCitiesDivided[city][i]}
// 							</div>`);
//       frag1.append(text);
//     }

//     const navSlide = $(
//       `<li data-target="${numSlide}" class="nav__slide nav__slide--${numSlide}"></li>`
//     );
//     frag2.append(navSlide);
//     $nav.append(frag2);

//     $slide
//       .find(`.slide--${numSlide}__text-wrapper`)
//       .append(letter)
//       .append(frag1);
//     $slider.append($slide);

//     if (arrCities[city].length <= 4) {
//       $(".slide--" + numSlide)
//         .find(".slide__text")
//         .css("font-size", "12vw");
//     }
//   };

//   for (let i = 0, length = numOfCities; i < length; i++) {
//     generateSlide(i);
//   }

//   $(".nav__slide--1").addClass("nav-active");

//   // Navigation
//   function bullets(dir) {
//     $(".nav__slide--" + curSlide).removeClass("nav-active");
//     $(".nav__slide--" + dir).addClass("nav-active");
//   }

//   function timeout() {
//     animation = false;
//   }

//   function pagination(direction) {
//     animation = true;
//     diff = 0;
//     $slider.addClass("animation");
//     $slider.css({
//       transform: "translate3d(-" + (curSlide - direction) * 100 + "%, 0, 0)",
//     });

//     $slider.find(".slide__darkbg").css({
//       transform: "translate3d(" + (curSlide - direction) * 50 + "%, 0, 0)",
//     });

//     $slider.find(".slide__letter").css({
//       transform: "translate3d(0, 0, 0)",
//     });

//     $slider.find(".slide__text").css({
//       transform: "translate3d(0, 0, 0)",
//     });
//   }

//   function navigateRight() {
//     if (!autoScrollVar) return;
//     if (curSlide >= numOfCities) return;
//     pagination(0);
//     setTimeout(timeout, animSpd);
//     bullets(curSlide + 1);
//     curSlide++;
//   }

//   function navigateLeft() {
//     if (curSlide <= 1) return;
//     pagination(2);
//     setTimeout(timeout, animSpd);
//     bullets(curSlide - 1);
//     curSlide--;
//   }

//   function toDefault() {
//     pagination(1);
//     setTimeout(timeout, animSpd);
//   }

//   // Events
//   $(document).on("mousedown touchstart", ".slide", function (e) {
//     if (animation) return;
//     let target = +$(this).attr("data-target");
//     let startX = e.pageX || e.originalEvent.touches[0].pageX;
//     $slider.removeClass("animation");

//     $(document).on("mousemove touchmove", function (e) {
//       let x = e.pageX || e.originalEvent.touches[0].pageX;
//       diff = startX - x;
//       if ((target === 1 && diff < 0) || (target === numOfCities && diff > 0))
//         return;

//       $slider.css({
//         transform:
//           "translate3d(-" + ((curSlide - 1) * 100 + diff / 30) + "%, 0, 0)",
//       });

//       $slider.find(".slide__darkbg").css({
//         transform:
//           "translate3d(" + ((curSlide - 1) * 50 + diff / 60) + "%, 0, 0)",
//       });

//       $slider.find(".slide__letter").css({
//         transform: "translate3d(" + diff / 60 + "vw, 0, 0)",
//       });

//       $slider.find(".slide__text").css({
//         transform: "translate3d(" + diff / 15 + "px, 0, 0)",
//       });
//     });
//   });

//   $(document).on("mouseup touchend", function (e) {
//     $(document).off("mousemove touchmove");

//     if (animation) return;

//     if (diff >= distOfLetGo) {
//       navigateRight();
//     } else if (diff <= -distOfLetGo) {
//       navigateLeft();
//     } else {
//       toDefault();
//     }
//   });

//   $(document).on("click", ".nav__slide:not(.nav-active)", function () {
//     let target = +$(this).attr("data-target");
//     bullets(target);
//     curSlide = target;
//     pagination(1);
//   });

//   $(document).on("click", ".side-nav", function () {
//     let target = $(this).attr("data-target");

//     if (target === "right") navigateRight();
//     if (target === "left") navigateLeft();
//   });

//   $(document).on("keydown", function (e) {
//     if (e.which === 39) navigateRight();
//     if (e.which === 37) navigateLeft();
//   });

//   $(document).on("mousewheel DOMMouseScroll", function (e) {
//     if (animation) return;
//     let delta = e.originalEvent.wheelDelta;

//     if (delta > 0 || e.originalEvent.detail < 0) navigateLeft();
//     if (delta < 0 || e.originalEvent.detail > 0) navigateRight();
//   });

//   function start() {
//     tim = setInterval(navigateRight, 3000);
//   }

//   start();
// });
