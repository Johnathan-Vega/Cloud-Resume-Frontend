function countFunction() {
  displayCount = document.getElementById('countscript');
  apiUrl = 'https://4xhcs260a5.execute-api.us-east-1.amazonaws.com/serverless_lambda_stage/visitor/count'
  fetch(apiUrl).then((response) =>
      response.json().then((data) => displayCount.innerHTML = data.CountAmount));
}
window.onload = countFunction();
