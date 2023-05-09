//profile data
const user = [
  {
    id: 1,
    imageUrl: "https://www.animationmagazine.net/wordpress/wp-content/uploads/ali-wong-post.jpg",
    userName: "Amy Lau",
    userBio: "Small business owner who operates a plant-selling business called Kōyōhaus. Recently involved in a road rage incident.",
    socialMedia: [
      {
        smName: "Twitter",
        url: "https://twitter.com"
      },
      {
        smName: "LinkedIn",
        url: "https://linkedin.com"
      },
      {
        smName: "Instagram",
        url: "https://instagram.com"
      },
      {
        smName: "TikTok",
        url: "https://tiktok.com"
      }
    ],
  }
];

// render to DOM
const renderToDom = (divID, htmlToRender) => {
  const selectedDiv = document.querySelector(divID);
  selectedDiv.innerHTML = htmlToRender;
};

// profile card render to DOM
const profileCard = () => {
  let domString = `<div class="card" style="width: 18rem;">
  <img src="${user[0].imageUrl}" class="card-img-top" alt="Amy Lau Photo">
  <div class="card-body">
    <h5 class="card-title">${user[0].userName}</h5>
    <p class="card-text">${user[0].userBio}</p>
  </div>
  <div class="card-body">
    <a href="${user[0].socialMedia[0].url}" class="card-link">${user[0].socialMedia[0].smName}</a>
    <a href="${user[0].socialMedia[1].url}" class="card-link">${user[0].socialMedia[1].smName}</a>
    <a href="${user[0].socialMedia[2].url}" class="card-link">${user[0].socialMedia[2].smName}</a>
    <a href="${user[0].socialMedia[3].url}" class="card-link">${user[0].socialMedia[3].smName}</a>
  </div>
</div>`;
renderToDom('#profileCard', domString);
}
profileCard();
