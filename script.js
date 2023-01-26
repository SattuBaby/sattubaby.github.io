function myFunction() {
    var dots = document.getElementById("check");
    var moreText = document.getElementById("more");
    var btn = document.getElementById("readMore");
    var langText = document.getElementById("languages");
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btn.innerHTML = "Read More ↯"; 
      moreText.style.display = "none";
      langText.style.display= "none"
    } else {
      dots.style.display = "none";
      btn.innerHTML = "Read Less ᐱ"; 
      moreText.style.display = "inline";
      langText.style.display = "inline";
    }
  }