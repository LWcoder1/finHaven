import './styles.css';

function combine(obj1, ...manyargs) {
  for (let obj of manyargs) {
    obj1.appendChild(obj);
  }
}

// Delete with implementation
const navBar = document.createElement("div");
const body = document.createElement("div");
const footer = document.createElement("div");

combine(document.body, navBar, body, footer);
navBar.setAttribute("id", "navBar");
body.setAttribute("id", "bodyContent");
footer.setAttribute("id", "footer");

function main() {
  //children of navBar
  const logoImg = document.createElement('img');
  logoImg.className = "logoImg";
  logoImg.src = "../src/img/shark.jpeg";

  const logoName = document.createElement('h1');
  logoName.className = "logoName";
  logoName.textContent = "FinHaven";

  const btnContainer = document.createElement('div')
  btnContainer.id = "btnContainer";

  const loginBtn = document.createElement('button');
  loginBtn.className = "loginBtn";
  loginBtn.textContent = "Log in";

  const homeBtn = document.createElement('button');
  homeBtn.className = "homeBtn";
  homeBtn.textContent = "Home";

  const simBtn = document.createElement('button');
  simBtn.className = "simBtn";
  simBtn.textContent = "Simulation";

  const aboutBtn = document.createElement('button');
  aboutBtn.className = "aboutBtn";
  aboutBtn.textContent = "About Us";

  const bodyMainDiv = document.createElement('div');
  bodyMainDiv.className = "bodyMainDiv";

  const bodyDivUL = document.createElement('div');
  bodyDivUL.className = "bodyDiv";

  const bodyDivUR = document.createElement('div');
  bodyDivUR.className = "bodyDiv";

  const bodyDivBL = document.createElement('div');
  bodyDivBL.className = "bodyDiv";

  const bodyDivBR = document.createElement('div');
  bodyDivBR.className = "bodyDiv";

  const infoParaHeaderUL = document.createElement('h2');
  const infoParaUL = document.createElement('p');
  infoParaHeaderUL.textContent = "Lorem ipsum schieun gradieun";
  infoParaUL.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const infoParaHeaderBR = document.createElement('h2');
  const infoParaBR = document.createElement('p');
  infoParaHeaderBR.textContent = "Lorem ipsum schieun gradieun";
  infoParaBR.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const infoImgUR = document.createElement('img');
  infoImgUR.className = "infoImg";
  infoImgUR.src = "../src/img/shark.jpeg";

  const infoImgBL = document.createElement('img');
  infoImgBL.className = "infoImg";
  infoImgBL.src = "../src/img/shark.jpeg";

  combine(navBar, logoImg, logoName, btnContainer, loginBtn);
  combine(btnContainer, homeBtn, simBtn, aboutBtn);
  combine(body, bodyMainDiv);
  combine(bodyMainDiv, bodyDivUL, bodyDivUR, bodyDivBL, bodyDivBR);
  combine(bodyDivUL, infoParaHeaderUL, infoParaUL);
  combine(bodyDivBR, infoParaHeaderBR, infoParaBR);
  combine(bodyDivUR, infoImgUR);
  combine(bodyDivBL, infoImgBL);

}

function aboutUsPage() {
    const ourTeam = document.createElement("div");
    ourTeam.classList.add("ourTeam");
    const contactInfo = document.createElement("div");
    const ourMission = document.createElement("div");

    // ourTeamH1

    const ourTeamH1 = document.createElement("h1");
    ourTeamH1.textContent = "Our Team";
    ourTeam.appendChild(ourTeamH1);

    const ourTeamLarryDiv = document.createElement("div");
    const ourTeamLarryImg = document.createElement("div");
    const ourTeamLarryIntro = document.createElement("div");
    combine(ourTeamLarryDiv, ourTeamLarryImg, ourTeamLarryIntro);

    const ourTeamLianDiv = document.createElement("div");
    const ourTeamLianImg = document.createElement("div");
    const ourTeamLianIntro = document.createElement("div")
    combine(ourTeamLianDiv, ourTeamLianImg, ourTeamLianIntro);

    combine(ourTeam, ourTeamLarryDiv, ourTeamLianDiv);

    // contactInfo

    const contactInfoH1 = document.createElement("h1");
    contactInfoH1.textContent = "Contact Info";
    contactInfo.appendChild(contactInfoH1);

    const ourMissionH1 = document.createElement("h1");
    ourMissionH1.textContent = "Our Mission";
    ourMission.appendChild(ourMissionH1); 

    combine(body, ourTeam, contactInfo, ourMission);
    console.log("testing");
}

main();


