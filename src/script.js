import './styles.css';

function combine(obj1, ...manyargs) {
    for (let obj of manyargs) {
      obj1.appendChild(obj);
  }
}

function objectTxtCreator(typeOfObj, txt) {
    let newObj = document.createElement(typeOfObj);
    newObj.textContent = txt;
    return newObj;
}

function objectClassCreator(typeOfObj, newClass) {
    let newObj = document.createElement(typeOfObj);
    newObj.classList.add(newClass);
    return newObj;
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


  combine(navBar, logoImg, logoName, btnContainer, loginBtn);
  combine(btnContainer, homeBtn, simBtn, aboutBtn);
}


function aboutUsPage() {
    const aboutUsPage = objectClassCreator("div", "aboutUsPage");

    const aboutUsOurTeamDiv = objectClassCreator("div", "ourTeamDiv");

    const aboutUsOurTeamH1 = objectTxtCreator("h1", "Our Team")

    const aboutUsOurTeamDivWrapper = objectClassCreator("div", "ourTeamDivWrapper");
    

    const aboutUsOurTeamLarryImg = document.createElement("img");
    aboutUsOurTeamLarryImg.src = "/Users/liangquanwu/teamProjects/finHaven/src/img/snakeImg.png";
    const aboutUsOurTeanLianImg = document.createElement("img");
    aboutUsOurTeanLianImg.src = "/Users/liangquanwu/teamProjects/finHaven/src/img/snakeImg.png";

    const aboutUsOurTeamLarryDiv = document.createElement("div");
    const aboutUsOurTeamLarryDivH1 = objectTxtCreator("h1", "Larry Wu")
    const aboutUsOurTeamLarryDivP = objectTxtCreator("p", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque metus eros, condimentum sit amet augue vel, dictum porta justo. Proin dui enim, finibus quis volutpat id, bibendum sed dolor. Phasellus in libero elit. Duis condimentum imperdiet dignissim. Morbi justo massa, accumsan sit amet pellentesque ut, suscipit at ante. Vivamus varius quam vel finibus condimentum. Nunc posuere quam risus. Phasellus cursus consequat nulla sed pulvinar.");
    combine(aboutUsOurTeamLarryDiv, aboutUsOurTeamLarryDivH1, aboutUsOurTeamLarryDivP);

    const aboutUsOurTeamLianDiv = document.createElement("div");
    const aboutUsOurTeamLianDivH1 = objectTxtCreator("h1", "Lian Jung")
    const aboutUsOurTeamLianDivP = objectTxtCreator("p", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque metus eros, condimentum sit amet augue vel, dictum porta justo. Proin dui enim, finibus quis volutpat id, bibendum sed dolor. Phasellus in libero elit. Duis condimentum imperdiet dignissim. Morbi justo massa, accumsan sit amet pellentesque ut, suscipit at ante. Vivamus varius quam vel finibus condimentum. Nunc posuere quam risus. Phasellus cursus consequat nulla sed pulvinar.");
    combine(aboutUsOurTeamLianDiv,aboutUsOurTeamLianDivH1, aboutUsOurTeamLianDivP);

    combine(aboutUsOurTeamDivWrapper, aboutUsOurTeamLarryImg, aboutUsOurTeamLarryDiv, aboutUsOurTeanLianImg, aboutUsOurTeamLianDiv);
    combine(aboutUsOurTeamDiv, aboutUsOurTeamH1, aboutUsOurTeamDivWrapper);


    const aboutUsContactInfoDiv = document.createElement("div");
    const aboutUsOurMissionDiv = document.createElement("div");

    combine(aboutUsPage, aboutUsOurTeamDiv, aboutUsContactInfoDiv, aboutUsOurMissionDiv);
    combine(body, aboutUsPage);

}

main();
aboutUsPage();


