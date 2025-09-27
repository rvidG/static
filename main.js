function loadHTML(path, elementID) {
  fetch(path)
    .then(response => response.text())
    .then(data => {
      document.getElementById(elementID).innerHTML = data;
    })
    .catch(error => {
      console.error('Error loading HTML:', error);
    });
}

function loadCSS(path) {
  const link = document.createElement('link');
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = path;
  document.head.appendChild(link)
}

window.onload = function () {
  let device;
  if (window.innerWidth <= 768) {
    device = "mobile";
  } else {
    console.log("User is not on a mobile device");
    device = "pc";
  }
  loadCSS("/static/" + device + "/style.css");
  loadHTML("/templates/" + device + "/navbar.html", "navbar-container");
};
