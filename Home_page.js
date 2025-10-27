window.addEventListener("scroll", function() {
  let bar = document.getElementById("bottomBar");

  if (window.scrollY > 100) {
    bar.style.bottom = "0";
  } else {
    bar.style.bottom = "-250px";
  }
});

