function countFunction() {
  displayCount = document.getElementById('countscript');
  api = 'https://1u2se9e8ed.execute-api.us-east-1.amazonaws.com/prod/visitor/count'
  fetch(api)
    .then((response) => response.json().then((data) => displayCount.innerHTML = data.CountAmount));
}
window.onload = countFunction();