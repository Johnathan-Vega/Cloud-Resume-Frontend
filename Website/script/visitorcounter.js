function visitorCounter() {
  visitCount = document.getElementById('countscript');
  apiURL = 'https://4xhcs260a5.execute-api.us-east-1.amazonaws.com/serverless_lambda_stage/visitor/count'
  fetch( apiURL ).then((response) =>
      response.json().then((data) => visitCounter.innerHTML = data.CountAmount)
  );
}

window.onload = visitorCounter();