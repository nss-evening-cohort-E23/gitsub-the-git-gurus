// //profile data
const user = [
  {
    id: 1,
    imageUrl:
      "https://www.sunglassesid.com/sites/default/files/upload/sighting/sunglasses-ali-wong-beef-pool.jpg",
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
    projDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    projName: "lorem ipsum",
    projStatus: true,
    projDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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

const repo = [
  {
    id: 1,
    repoName: "Korean Curry",
    repoDesc:
      "Kung pao pepper figs cranberry spritzer eating together blueberries bananas samosa coconut rice sparkling pomegranate punch soy milk naga viper paprika simmer Mexican fiesta.",
    repoStar: true,
  },
  {
    id: 2,
    repoName: "Banh Mi",
    repoDesc:
      "Street style Thai basil tacos casserole citrusy almonds springtime strawberry mushroom risotto soba noodles coconut milk pinch of yum summer fruit salad ginger tofu mediterranean banana bread chili pepper sleepy morning tea refreshing cucumber splash dessert sweet potato black bean burrito lemongrass salad sweet potato walnut mushroom tart alfalfa sprouts strawberry mango smoothie raspberry fizz miso dressing.",
    repoStar: false,
  },
  {
    id: 3,
    repoName: "Hot Dog",
    repoDesc:
      "Blood orange smash onion mangos Bolivian rainbow pepper soup udon noodles dragon fruit lemon red lentil soup lemon tahini dressing coriander sriracha pecans.",
    repoStar: false,
  },
  {
    id: 4,
    repoName: "Sushi",
    repoDesc:
      "Jalapeño seeds Italian linguine puttanesca Caribbean red habanero summer vine tomatoes kimchi overflowing berries cumin broccoli creamy cauliflower alfredo sauce cocoa chilies cilantro lime vinaigrette.",
    repoStar: true,
  },
  {
    id: 4,
    repoName: "Eggplant",
    repoDesc:
      "Bulgarian carrot apple vinaigrette pesto chocolate peanut butter dip blueberry chia seed jam red lentil curry peach strawberry mango cashew strawberries cinnamon toast banana bread Thai super chili spicy summertime peanut butter creamiest smoked tofu butternut mix with lemon lime minty crumbled lentils sandwiches pasta almond milk peanut butter crunch.",
    repoStar: false,
  },
  {
    id: 5,
    repoName: "Tiramisu",
    repoDesc:
      "Asian pear black bean wraps zesty tofu pad thai guacamole raspberries matcha vegan crispy coconut grains falafel bites mint Malaysian vitamin glow frosted gingerbread bites picnic.",
    repoStar: true,
  },
  {
    id: 6,
    repoName: "Falafel",
    repoDesc:
      "Avocado basil pesto fruit smash golden cayenne pepper tabasco pepper dill avocado Indian spiced lemonade zest cremini mushrooms shaved almonds portobello mushrooms lemon basil walnut pesto tart.",
    repoStar: false,
  },
];

// render to DOM
const renderToDom = (divID, htmlToRender) => {
  const selectedDiv = document.querySelector(divID);
  selectedDiv.innerHTML = htmlToRender;
};

// profile card render to DOM
const profileCard = () => {
  let domString = `<div class="profile-card" style="width: 19rem;">
  <img src="${user[0].imageUrl}" class="card-img-top" alt="Amy Lau Photo">
  <div class="card-body">
    <h5 class="card-title">${user[0].userName}</h5>
    <p class="card-text">${user[0].userBio}</p>
  </div>
  <div class="sm-links">
    <a href="${user[0].socialMedia[0].url}" class="card-link">${user[0].socialMedia[0].smName}</a>
    <a href="${user[0].socialMedia[1].url}" class="card-link">${user[0].socialMedia[1].smName}</a>
    <a href="${user[0].socialMedia[2].url}" class="card-link">${user[0].socialMedia[2].smName}</a>
    <a href="${user[0].socialMedia[3].url}" class="card-link">${user[0].socialMedia[3].smName}</a>
  </div>
</div>`;
  renderToDom("#profileCard", domString);
};

// Overview - Pinned Repos to render to Dom

// 1. Create a container that holds pinned repos
// 2. Create an array of objects that will hold title and description data of pinned repos
// 3. Create cards that will display the information on the DOM
// 4. Loop/Iterate through the cards
// ** WILL NEED DELETE FUNCTIONALITY **

//Target the div which will hold the array of pinned repos

// OVERVIEW - PINNED REPOS
const pinnedRepo = document.querySelector("#pinnedRepo");

const reposOnDom = (array) => {
  let pinnedRepoString = "";
  for (const item of array) {
    pinnedRepoString += `
    <div class="card" style="width: 40rem height: 10rem;">
      <div class="card-header">${item.repoName}</div>
      <div class="card-body">
        <div class="pinned-card-body">
          <p class="card-text">${item.repoDesc}</p>
          <button class="btn" id="star--${repo.id}">⭐</button>
        </div>
      </div>
    </div>`;
  }
  renderToDom("#pinnedRepo", pinnedRepoString);
};

//render full repo list to DOM (repos page)
const repoListOnDom = (array) => {
  let domString = "";
  for (const repo of array) {
    domString += `<div class="card" id="repo-card" style="width: 40rem height: 10rem;">
    <div class="card-header">${repo.repoName}</div>
    <div class="card-body">
      <div id="repo-card-body">
        <p class="card-text">${repo.repoDesc}</p>
        <button class="btn" id="star--${repo.id}">⭐</button>
      </div>
    </div>
  </div>`;
  }

  renderToDom("#repoList", domString);
};

//render package search bar to DOM
const packageSearch = () => {
  domString = `
  <div class="input-group mb-3" id="packageSearch">
  <input type="text" class="form-control" id="searchInput" placeholder="Search Package Name...">
</div>`;
  renderToDom("#packageSearch", domString);
};

// render package cards to DOM
const packageCards = (array) => {
  let domString = "";
  for (package of array) {
    domString += `<div class="card" style="width: 40rem height: 10rem;">
    <div class="card-header">${package.packageName}</div>
    <div class="card-body">
      <div class="package-card-body">
        <p class="card-text">${package.packageDesc}</p>
        <button class="btn btn-danger" id="delete--${package.id}">Delete</button>
      </div>
    </div>
  </div>`;
  }
  renderToDom("#packagesContainer", domString);
};

const projectsList = (array) => {
  let domString = "";
  for (const project of array) {
    domString += `<div class="card">
    <div class="project-card-header"> ${project.projName} 
    <i class="bi bi-three-dots" id="dots"></i>
    </div>
    <div class="card-body">
      <div class="project-card-body">
        <p class="card-text">${project.projDesc}</p>
        <div class="updated">
        <small class="text"><i class="bi bi-clock"></i> Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  </div>`;
  }
  renderToDom("#projectsList", domString);
};

// Create a form - variables for form event listeners
const addProject = document.querySelector("#addProject");
const addRepo = document.querySelector("#repoForm");
const addPackage = document.querySelector("#packagesForm");
const addPinnedRepo = document.querySelector("#addPinnedRepo");

// Project Form Renders to DOM
const newPinnedRepo = () => {
  let formString = `<div class="card">
  <div class="card-body">
    <h1 class="card-title">Create New Pinned Repo</h1>
   <form id = "pinnedRepoForm"> <div class="mb-3">
  
   <label for="floatingInput" class="form-label"> Pinned Repo Name</label>
   <input type="text" class="form-control" id="projectName" placeholder="Pinned Repo Name" required>
 </div>
 <div class="mb-3">
   <label for="projectDesc" class="form-label">Description</label>
   <input type="text" class="form-control" id="projectDesc" placeholder="Repo Description" required>
 </div>
 <button class="btn btn-success" id="addRepo">Pin Repository</button>

 </form>
  </div>
</div>`;
  renderToDom("#addPinnedRepo", formString);
};

// OVERVIEW - CREATE FORM FUNCTIONALITY THAT ADDS TO PINNED REPOS

// repo form render to DOM
const repoForm = () => {
  let formString = `<div class="card">
  <div class="card-body">
    <h1 class="card-title">Create Repository</h1>
   <form id="repoFormId"> <div class="mb-3">
  
   <label for="repoName" class="form-label">Repository Name</label>
   <input type="text" class="form-control" id="repoName" required>
 </div>
 <div class="mb-3">
   <label for="repoDesc" class="form-label">Description</label>
   <textarea class="form-control" id="repoDesc" rows="3"></textarea>
 </div>  
     <button class="btn btn-success" id="addNewRepo">Create Repository</button>
 </form>


  </div>
</div>`;
  renderToDom("#repoForm", formString);
};

// pakage form render to dom
const packageForm = () => {
  let formString = `<div class="card">
  <div class="card-body">
    <h1 class="card-title">Create Package</h1>
   <form id = "packForm"> 
  <div class="mb-3">
  <label for="floatingInput" class="form-label">Package Name</label>
   <input type="text" class="form-control" id="packageName" placeholder="Package Name" required>
 </div>
 <div class="mb-3">
   <label for="packageDesc" class="form-label">Description</label>
   <input type="text" class="form-control" id="packageDesc" placeholder="Package Description" required>
 </div>  
 <button class="btn btn-success" id="addPackage">Create Package</button>
 </form>
  </div>
</div>`;
  renderToDom("#packagesForm", formString);
};

const newProject = () => {
  let formString = `<div class="card">
  <div class="card-body">
    <h1 class="card-title">Create Project</h1>
   <form> <div class="mb-3">
  
   <label for="floatingInput" class="form-label">Project Name</label>
   <input type="text" class="form-control" id="projName" placeholder="Project Name" required>
 </div>
 <div class="mb-3">
   <label for="projectDesc" class="form-label">Description</label>
   <textarea class="form-control" id="projectDescription" rows="3"></textarea>
 </div> 
 <button class="btn btn-success" id="addProject">Create Project</button>
  </form>
  </div>
</div>`;
  renderToDom("#addProject", formString);
};

const app = () => {
  document.addEventListener(
    "DOMContentLoaded",
    function () {
      profileCard();
      newPinnedRepo();
      reposOnDom(repo);
      const pinnedRepoForm = document.getElementById("pinnedRepoForm");
      const addPinnedRepo = (event) => {
        event.preventDefault();
        const newPinnedRepoObj = {
          id: repo.length + 1,
          repoName: document.getElementById("projectName").value,
          repoDesc: document.getElementById("projectDesc").value,
          repoStar: true,
        };

        repo.push(newPinnedRepoObj);
        reposOnDom(repo);
        pinnedRepoForm.reset();
      };

      pinnedRepoForm.addEventListener("submit", addPinnedRepo);
    },
    false
  );
  if (document.URL.includes("index.html")) {
    profileCard();
    newPinnedRepo();
    reposOnDom(repo);
    const pinnedRepoForm = document.getElementById("pinnedRepoForm");
    const addPinnedRepo = (event) => {
      event.preventDefault();
      const newPinnedRepoObj = {
        id: repo.length + 1,
        repoName: document.getElementById("projectName").value,
        repoDesc: document.getElementById("projectDesc").value,
        repoStar: true,
      };

      repo.push(newPinnedRepoObj);
      reposOnDom(repo);
      pinnedRepoForm.reset();
    };

    pinnedRepoForm.addEventListener("submit", addPinnedRepo);
  }
  if (document.URL.includes("repos.html")) {
    repoForm();
    profileCard();
    repoListOnDom(repo);

    //create a new repository
    const repoFormId = document.getElementById("repoFormId");

    const createRepository = (e) => {
      e.preventDefault();

      const newRepoObj = {
        id: repo.length + 1,
        repoName: document.getElementById("repoName").value,
        repoDesc: document.getElementById("repoDesc").value,
      };

      repo.unshift(newRepoObj);
      repoListOnDom(repo);
      repoFormId.reset();
    };
    //search for a repository (repos.html)
    const repoSearch = (event) => {
      const eventLC = event.target.value.toLowerCase();
      const searchResult = repo.filter(
        (item) =>
          item.repoName.toLowerCase().includes(eventLC) ||
          item.repoDesc.toLowerCase().includes(eventLC)
      );

      repoListOnDom(searchResult);
    };
    //target search input and listen for keyup to search
    document
      .querySelector("#searchInput")
      .addEventListener("keyup", repoSearch);

    //add an event listener to the form submit button and pass in callback function
    repoFormId.addEventListener("submit", createRepository);
  }
  if (document.URL.includes("packages.html")) {
    window.onload = () => {
      packageCards(packageSet);
      packageSearch();
      packageForm();
      profileCard();

      const packForm = document.getElementById("packForm");
      const newPackage = (e) => {
        e.preventDefault();
        const newPackageObj = {
          id: packageSet.length + 1,
          packageName: document.getElementById("packageName").value,
          packageDesc: document.getElementById("packageDesc").value,
        };
        packageSet.push(newPackageObj);
        packageCards(packageSet);
        packForm.reset();
      };
      packForm.addEventListener("submit", newPackage);

      // delete function
      const deletePackage = document.getElementById("packagesContainer");

      deletePackage.addEventListener("click", (e) => {
        const [, id] = e.target.id.split("--");
        const packIndex = packageSet.findIndex(
          (package) => package.id === Number(id)
        );
        packageSet.splice(packIndex, 1);
        packageCards(packageSet);
      });

      // package search function
      const searchPackage = (e) => {
        const eventLC = event.target.value.toLowerCase();
        const packageSearchResult = packageSet.filter(
          (item) =>
            item.packageName.toLowerCase().includes(eventLC) ||
            item.packageDesc.toLowerCase().includes(eventLC)
        );
        packageCards(packageSearchResult);
      };
      document
        .getElementById("packageSearch")
        .addEventListener("keyup", searchPackage);
    };
  }
  if (document.URL.includes("projects.html")) {
    profileCard();
    newProject();
    projectsList(projects);

    const createProject = (e) => {
      e.preventDefault();

      const newProjList = {
        id: projects.length + 1,
        projName: document.getElementById("projName").value,
        projDesc: document.getElementById("projectDescription").value,
      };
      projects.push(newProjList);
      projectsList(projects);
      createProject.reset();
    };
    addProject.addEventListener("submit", createProject);

    const search = (event) => {
      const eventLC = event.target.value.toLowerCase();
      const searchResult = projects.filter(
        (project) =>
          project.projName.toLowerCase().includes(eventLC) ||
          project.projDesc.toLowerCase().includes(eventLC)
      );
      projectsList(searchResult);
    };
    document.querySelector("#searchInput").addEventListener("keyup", search);
  }
};

app();
