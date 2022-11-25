function countFunction() {
  displayCount = document.getElementById('countscript');
  api = 'https://m80eo77nbg.execute-api.us-east-1.amazonaws.com/prod/visitor/count'
  fetch(api)
    .then((response) => response.json().then((data) => displayCount.innerHTML = data.CountAmount));
}
window.onload = countFunction();