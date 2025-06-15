import React from "react";
import "./style.css";


// get both pupils
const pupils = document.querySelectorAll(".eye .pupil");
window.addEventListener("mousemove", (e) => {
  pupils.forEach((pupil) => {
    // get x and y postion of cursor
    var rect = pupil.getBoundingClientRect();
    var x = (e.pageX - rect.left) / 30 + "px";
    var y = (e.pageY - rect.top) / 30 + "px";
    pupil.style.transform = "translate3d(" + x + "," + y + ", 0px)";
  });
});

export const Test = () => {
  return (
    <div class="eyes">
    <div class="eye">
    <div class="pupil"></div>
  </div>
  <div class="eye">
    <div class="pupil"></div>
  </div>
</div>
  );
};
