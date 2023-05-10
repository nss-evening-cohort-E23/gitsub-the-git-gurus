//profile data
const user = [
  {
    id: 1,
    imageUrl:
      "https://www.animationmagazine.net/wordpress/wp-content/uploads/ali-wong-post.jpg",
    userName: "Amy Lau",
    userBio:
      "Small business owner who operates a plant-selling business called Kōyōhaus. Recently involved in a road rage incident.",
    socialMedia: [
      {
        smName: "Twitter",
        url: "https://twitter.com",
      },
      {
        smName: "LinkedIn",
        url: "https://linkedin.com",
      },
      {
        smName: "Instagram",
        url: "https://instagram.com",
      },
      {
        smName: "TikTok",
        url: "https://tiktok.com",
      },
    ],
  },
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
  renderToDom("#profileCard", domString);
};
profileCard();

// Overview - Pinned Repos

// 1. Create a container that holds pinned repos
// 2. Create an array of objects that will hold title and description data of pinned repos
// 3. Create cards that will display the information on the DOM
// 4. Loop/Iterate through the cards
// ** WILL NEED DELETE FUNCTIONALITY **
const reposOnDom = () => {
  let pinnedRepoString = `<div class = "card">
  <h5 class="card-title">Pinned</h5>

  </div>`;
  renderToDom("#pinnedRepo", pinnedRepoString);
};
reposOnDom();

//Target the div which will hold the array of pinned repos
const pinnedRepo = document.querySelector("#pinnedRepo");

// Create a form
const addProject = document.querySelector("#addProject");

// Form Renders to DOM
const newProject = () => {
  let formString = `<div class="card">
  <div class="card-body">
    <h1 class="card-title">Create Project</h1>
    <h6 class="card-subtitle mb-2 text-body-secondary">subtext</h6>
   <form> <div class="mb-3">
  
   <label for="floatingInput" class="form-label">Project Name</label>
   <input type="text" class="form-control" id="projectName" placeholder="Project Name" required>
 </div>
 <div class="mb-3">
   <label for="projectDesc" class="form-label">Description</label>
   <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
 </div>  </form>

    <button class="btn btn-success" id="addRepo">Create repo</button>
  </div>
</div>`;
  renderToDom("#addProject", formString);
};
newProject();

// CREATE NEW PROJECT
