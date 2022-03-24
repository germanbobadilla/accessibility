function outputUpdate(vol) {
  document.querySelector('#volume').value = vol;
}

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var updateSlider = function (newValue) {
    var handle = document.getElementById("day-handle");
    handle.setAttribute("aria-valuenow", newValue.toString());
    handle.setAttribute("aria-valuetext", dayNames[newValue]);
};
