var page = {
  mobile: true
}

function setupPage() {
  if (window.innerWidth > 600 && page.mobile) {
    var e1 = document.getElementById("rowEl1");
    var e2 = document.getElementById("rowEl2");
    var e1Clone = e1.innerHTML;
    var e2Clone = e2.innerHTML;
    e1.innerHTML = e2Clone;
    e2.innerHTML = e1Clone;
    page.mobile = false;
  } else if (window.innerWidth < 600 && !page.mobile) {
    var e1 = document.getElementById("rowEl1");
    var e2 = document.getElementById("rowEl2");
    var e1Clone = e1.innerHTML;
    var e2Clone = e2.innerHTML;
    e1.innerHTML = e2Clone;
    e2.innerHTML = e1Clone;
    page.mobile = true;
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
