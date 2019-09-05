/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// const data = axios.get("https://api.github.com/users/tolaked");

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

// followersArray.forEach(element => element);
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/

axios
  .get(`https://api.github.com/users/tolaked`)
  .then(response => {
    // Remember response is an object, response.data is an array.
    let page = createComponent(response.data);
    container.appendChild(page);
  })
  .catch(error => {
    console.log("Error:", error);
  });

function createComponent(obj) {
  let newDiv = document.createElement("div");
  newDiv.classList.add("card");
  let profileImage = document.createElement("img");
  profileImage.setAttribute("src", obj.avatar_url);
  let secondDiv = document.createElement("div");
  secondDiv.classList.add("card-info");
  let heading = document.createElement("h3");
  heading.classList.add("name");
  heading.textContent = obj.name;
  let paragraph = document.createElement("p");
  paragraph.classList.add("username");
  paragraph.textContent = obj.login;
  let paragraph2 = document.createElement("p");
  paragraph2.textContent = `Location: ${obj.location}`;
  let profile = document.createElement("p");
  profile.textContent = "Profile";
  let link = document.createElement("a");
  link.setAttribute("href", obj.html_url);
  link.textContent = obj.html_url;
  profile.appendChild(link);
  let followers = document.createElement("p");
  followers.textContent = `Followers: ${obj.followers}`;
  let Following = document.createElement("p");
  Following.textContent = `Followers: ${obj.following}`;
  let Bio = document.createElement("p");
  Bio.textContent = `Bio: ${obj.bio}`;

  let allElements = [
    heading,
    paragraph,
    paragraph2,
    profile,
    link,
    followers,
    Following,
    Bio
  ];

  allElements.map(element => secondDiv.appendChild(element));
  newDiv.appendChild(profileImage);
  newDiv.appendChild(secondDiv);

  return newDiv;
}
const container = document.querySelector(".cards");

const followersArray = [
  "beejay1293",
  "abidex4yemi",
  "mikeattara",
  "tobslob",
  "surifoll"
];

function followersData(username) {
  return axios.get(`https://api.github.com/users/${username}`);
}

followersArray.forEach(element => {
  followersData(element).then(res => {
    const card = createComponent(res.data);
    container.appendChild(card);
  });
});

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
