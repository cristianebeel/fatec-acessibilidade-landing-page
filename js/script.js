window.addEventListener("scroll", function() {
  if (pageYOffset >= 250) {
    document.querySelector("#navbar").style.backgroundColor = "#9400d3";
  } else {
    document.querySelector("#navbar").style.backgroundColor = "transparent";
  }
});