const submitButton = document.getElementById('submit-btn');
const userRatingValue = document.getElementById('user-rating-value');
let userRating = null;
submitButton.addEventListener('click', () => {
   if(userRating >= 1 && userRating <= 5){
    document.getElementById('rating-state').style.display = "none";
    document.getElementById('thank-you-state').style.display = "flex";
    userRatingValue.innerHTML =  userRating;
   }
   else{
    alert('please select an option');
   }
})