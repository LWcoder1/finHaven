import './styles.css';

function combine(obj1, ...manyargs) {
    for (let obj of manyargs) {
      obj1.appendChild(obj);
    }
}

const navBar = document.createElement('div');
navBar.id = "navBar";
const bodyContent = document.createElement('div');
bodyContent.id = "bodyContent";
const footer = document.createElement('div');
footer.id = "footer";

//children of navBar
const logoImg = document.createElement('img');
logoImg.className = "logoImg";
const logoName = document.createElement('h1');
logoName.className = "logoName";
logoName.textContent = "FinHaven";
const btnContainer = document.createElement('div')
btnContainer.id = "btnContainer";
const loginBtn = document.createElement('button');
loginBtn.className = "loginBtn";
loginBtn.textContent = "Log in";

//children of btnContainer (navBar --> btnContainer)
const homeBtn = document.createElement('button');
homeBtn.className = "homeBtn";
homeBtn.textContent = "Home";
const simBtn = document.createElement('button');
simBtn.className = "simBtn";
simBtn.textContent = "Simulation";
const aboutBtn = document.createElement('button');
aboutBtn.className = "aboutBtn";
aboutBtn.textContent = "About Us";


document.body.appendChild(navBar);
combine(navBar, logoImg, logoName, btnContainer, loginBtn);
combine(btnContainer, homeBtn, simBtn, aboutBtn);
document.body.appendChild(bodyContent);
document.body.appendChild(footer);
