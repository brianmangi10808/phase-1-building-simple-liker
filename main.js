// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function likeHeart(){
  //first select the like button
  let icon = event.target;
  
  //checking whether the heart is currently full or empty
  if (icon.innerHTML === EMPTY_HEART  ){
    //if empty it turns to full-heart
    icon.innerHTML = FULL_HEART

 // Select the element with the class "hidden"
const errorElement = document.querySelector('.hidden');

// Hide the element
errorElement.style.display = 'none';

  mimicServerCall()
  .then(response => {
    console.log(response);
  })
  .catch(error =>{
    console.log(error);

  })
} else {
  icon.innerHTML =EMPTY_HEART;
}
}
  
  const likeButtons = document.querySelectorAll('.like-glyph');
  likeButtons.forEach(button => {
    button.addEventListener('click', likeHeart);
  });




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
