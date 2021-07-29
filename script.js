const reviewPage = document.querySelector('section');
const news = document.querySelector('.tab');
const createReview = document.querySelector('.tab2');

reviewPage.addEventListener('click', e => {
    if(e.target.innerHTML === 'News Feed'){
      news.classList.add('tab')
      e.target.parentElement.nextElementSibling.style.display = 'flex';
      e.target.parentElement.nextElementSibling.nextElementSibling.style.display = 'none';
    }else{
      news.classList.remove('tab')
    }
    if(e.target.innerHTML === 'Create Review'){
      createReview.classList.add('tab');
      e.target.parentElement.nextElementSibling.style.display = 'none';
      e.target.parentElement.nextElementSibling.nextElementSibling.style.display = 'block';
    }else{
      createReview.classList.remove('tab')
    }

});

// add a new review
