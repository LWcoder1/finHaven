import './styles.css';
const homeDiv = require("/Users/liangquanwu/teamProjects/finHaven/src/modules/home.js");
const aboutUs = require("/Users/liangquanwu/teamProjects/finHaven/src/modules/aboutUs.js");
const login = require("/Users/liangquanwu/teamProjects/finHaven/src/modules/logIn.Js");
const simulation = require("/Users/liangquanwu/teamProjects/finHaven/src/modules/simulator.js");

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

const bodyMainDiv = document.createElement('div');
bodyMainDiv.className = "bodyMainDiv";

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
  loginBtn.addEventListener("click",()=> {
    bodyMainDiv.textContent = "";
    bodyMainDiv.appendChild(login());

  })
  const homeBtn = document.createElement('button');
  homeBtn.className = "homeBtn";
  homeBtn.textContent = "Home";
  homeBtn.addEventListener("click",()=> {
    bodyMainDiv.textContent = "";
    bodyMainDiv.appendChild(homeDiv());

  })

  const simBtn = document.createElement('button');
  simBtn.className = "simBtn";
  simBtn.textContent = "Simulation";
  simBtn.addEventListener("click",()=> {
    bodyMainDiv.textContent = "";
    bodyMainDiv.appendChild(simulation());

  })

  const aboutBtn = document.createElement('button');
  aboutBtn.className = "aboutBtn";
  aboutBtn.textContent = "About Us";
  aboutBtn.addEventListener("click",()=> {
    bodyMainDiv.textContent = "";
    bodyMainDiv.appendChild(aboutUs());

  })

  combine(navBar, logoImg, logoName, btnContainer, loginBtn);
  combine(btnContainer, homeBtn, simBtn, aboutBtn);
  combine(body, bodyMainDiv);

}

main();
bodyMainDiv.appendChild(homeDiv());



