 var page = {
  mobile: true
}

function setupPage() {
  if (window.innerWidth > 600 && !page.mobile) {
    page.mobile = true;
  } else if (window.innerWidth < 600 && page.mobile) {
    page.mobile = false;
  }
  var p = document.getElementById("placeholder");
  if (!page.mobile) {
    var p = document.getElementById("placeholder");
    var n = document.getElementById("nav-bar");
    p.style.height = n.offsetHeight + "px";
    p.hidden = false;
  } else {
    p.hidden = true;
  }
}

setInterval(setupPage, 10);
