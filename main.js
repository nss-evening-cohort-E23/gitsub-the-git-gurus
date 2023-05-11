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

const projects = [
  {
    id: 1,
    projName: "KoyoHaus-Info",
    projStatus: true,
    projDesc: "update webpage about me, info, etc",
  },
  {
    id: 2,
    projName: "Accident Lawsuit Go-fund",
    projStatus: true,
    projDesc: "filter out/delete negative comments on ring camera videos",
  },
  {
    id: 3,
    projName: "Forster's merge launch",
    projStatus: true,
    projDesc: "review merge launch final touches",
  },
  {
    id: 4,
    projName: "lorem ipsum",
    projStatus: true,
    projDesc: "lorem ipsum",
  },
  {
    id: 5,
    projName: "lorem ipsum",
    projStatus: true,
    projDesc: "lorem ipsum",
  },
];

const packageSet = [
  {
    id: 1,
    packageIcon:
      "https://pics.freeicons.io/uploads/icons/png/1504087701656419435-512.png",
    packageName: "mpn",
    packageDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Mattis aliquam faucibus purus in.",
  },
  {
    id: 2,
    packageIcon:
      "https://pics.freeicons.io/uploads/icons/png/19278535441626676447-512.png",
    packageName: "bocker",
    packageDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Mattis aliquam faucibus purus in.",
  },
  {
    id: 3,
    packageIcon:
      "https://pics.freeicons.io/uploads/icons/png/5753257571656419435-512.png",
    packageName: "nuGGet",
    packageDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Mattis aliquam faucibus purus in.",
  },
  {
    id: 4,
    packageIcon:
      "https://pics.freeicons.io/uploads/icons/png/10105125721601550891-512.png",
    packageName: "sapphireStones",
    packageDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Mattis aliquam faucibus purus in.",
  },
  {
    id: 5,
    packageIcon:
      "https://pics.freeicons.io/uploads/icons/png/21319291521582692251-512.png",
    packageName: "Haven",
    packageDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Mattis aliquam faucibus purus in.",
  },
];

//repo form render to DOM
const repoFormOnDom = () => {
  let domString = `<form id="repo-form">
  <div class="mb-3">
    <label for="repo-name-input" class="form-label">Repository Name</label>
    <input type="text" class="form-control" id="repo-name-input" required>
  </div>
  <div class="mb-3">
  <label for="name-input" class="form-label">Description (optional)</label>
  <input type="text" class="form-control" id="name-input">
</div>
  <button type="submit" id="sort-btn" class="btn btn-primary">Create repository</button>
</form>`;

  renderToDom("#repoForm", domString);
};

repoFormOnDom();
