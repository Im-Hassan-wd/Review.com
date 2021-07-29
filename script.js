const reviewPage = document.querySelector('section');
const news = document.querySelector('.tab');
const createReview = document.querySelector('.tab2');
const newsFeed = document.querySelector('#news_feed')

reviewPage.addEventListener('click', e => {
    if(e.target.innerHTML === 'News Feed'){
      news.classList.add('tab')
      e.target.parentElement.nextElementSibling.style.display = 'block';
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
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const description = form['description'].value;
  const reviewImage = form['review-image'].value;
  console.log(description, reviewImage);

  let newReview = `
      <div class="review">
        <div class="review-title">
          <div>
            <img src="img/linda-avatar.jpg" alt="" class="avatar">
            <h2>Linda Bryan</h2>
          </div>
          <img src="img/option.svg" alt="">
        </div>
        <div class="review-text">
          <p>${description}</p>
          <img src="${reviewImage}" alt="">
          <div class="about">
            <ul>
              <li>1 hour ago<span></span></li>
              <li>likes<span>2</span></li>
              <li>comments<span>7</span></li>
            </ul>
          </div>
        </div>
      </div>
    `;

    localStorage.setItem('review', newReview);
    newsFeed.innerHTML += localStorage.getItem('review');
});
