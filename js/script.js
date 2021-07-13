document.addEventListener(
  "DOMContentLoaded",
  function(event){
    alert('The page is loaded and the script ran!')
    var message = document.getElementById('message')
    message.innerText = 'The script ran!'
  }
);
