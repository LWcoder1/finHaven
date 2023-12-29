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

  const bodyMainDiv = document.createElement('div');
  bodyMainDiv.className = "bodyMainDiv";

  combine(navBar, logoImg, logoName, btnContainer, loginBtn);
  combine(btnContainer, homeBtn, simBtn, aboutBtn);
  combine(body, bodyMainDiv);

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

  combine(bodyMainDiv, bodyDivUL, bodyDivUR, bodyDivBL, bodyDivBR);
  combine(bodyDivUL, infoParaHeaderUL, infoParaUL);
  combine(bodyDivBR, infoParaHeaderBR, infoParaBR);
  combine(bodyDivUR, infoImgUR);
  combine(bodyDivBL, infoImgBL);

}

function loginPage() {
  const loginPage = objectClassCreator("div", "loginPage");

  const loginDiv = objectClassCreator("div", "loginDiv");

  const signupDiv = objectClassCreator("div", "signupDiv");
  signupDiv.classList.add("hide");

  combine(body, loginPage);
  combine(loginPage, loginDiv, signupDiv);

  const loginForm = objectClassCreator("form", "loginForm");

  const loginTitle = objectTxtCreator("h1", "Login");

  const loginUsernameInput = document.createElement("input");
  loginUsernameInput.setAttribute("id", "loginUsername");
  loginUsernameInput.setAttribute("type", "text");
  loginUsernameInput.setAttribute("name", "loginUsername");
  loginUsernameInput.setAttribute("placeholder", "Username");

  const loginPasswordInput = document.createElement("input");
  loginPasswordInput.setAttribute("id", "loginPassword");
  loginPasswordInput.setAttribute("type", "password");
  loginPasswordInput.setAttribute("name", "loginPassword");
  loginPasswordInput.setAttribute("placeholder", "Password");

  const switchSignup = document.createElement("p");
  switchSignup.textContent = "Don't have an account? ";
  const switchSignupLink = document.createElement("span");
  switchSignupLink.setAttribute("class", "switchSignupLink");
  switchSignupLink.textContent = "Sign up";

  switchSignupLink.addEventListener("click", () => {
    loginDiv.classList.add("hide");
    signupDiv.classList.remove("hide");
  })

  const loginButton = objectClassCreator("button", "loginButton");
  loginButton.textContent = "Log in";
  loginButton.setAttribute("onclick", "login()");
  
  combine(switchSignup, switchSignupLink);
  combine(loginDiv, loginForm);
  combine(loginForm, loginTitle, loginUsernameInput, loginPasswordInput, switchSignup, loginButton);

  const signupForm = objectClassCreator("form", "signupForm");

  const signupTitle = objectTxtCreator("h1", "Sign up");

  const signupEmailInput = document.createElement("input");
  signupEmailInput.setAttribute("id", "signupEmail");
  signupEmailInput.setAttribute("type", "text");
  signupEmailInput.setAttribute("name", "signupEmail");
  signupEmailInput.setAttribute("placeholder", "Email Address");
  
  const signupPasswordInput = document.createElement("input");
  signupPasswordInput.setAttribute("id", "signupPassword");
  signupPasswordInput.setAttribute("name", "signupPassword");
  signupPasswordInput.setAttribute("type", "password");
  signupPasswordInput.setAttribute("placeholder", "Create Password");

  const signupPasswordConfirmInput = document.createElement("input");
  signupPasswordConfirmInput.setAttribute("id", "signupPasswordConfirm");
  signupPasswordConfirmInput.setAttribute("name", "signupPasswordConfirm");
  signupPasswordConfirmInput.setAttribute("type", "password");
  signupPasswordConfirmInput.setAttribute("placeholder", "Confirm Password");

  const switchLogin = document.createElement("p");
  switchLogin.textContent = "Already have an account? ";
  const switchLoginLink = document.createElement("span");
  switchLoginLink.setAttribute("class", "switchLoginLink");
  switchLoginLink.textContent = "Login";

  switchLoginLink.addEventListener("click", () => {
    signupDiv.classList.add("hide");
    loginDiv.classList.remove("hide");
  })

  const signupButton = objectClassCreator("button", "signupButton");
  signupButton.textContent = "Sign up";
  signupButton.setAttribute("onclick", "signup()");

  combine(switchLogin, switchLoginLink);
  combine(signupDiv, signupForm);
  combine(signupForm, signupTitle, signupEmailInput, signupPasswordInput, signupPasswordConfirmInput, switchLogin, signupButton);
}

function aboutUsPage() {
    const aboutUsPage = objectClassCreator("div", "aboutUsPage");

    const aboutUsOurTeamDiv = objectClassCreator("div", "ourTeamDiv");

    const aboutUsOurTeamH1 = objectTxtCreator("h1", "Our Team")

    const aboutUsOurTeamDivWrapper = objectClassCreator("div", "ourTeamDivWrapper");

    const aboutUsOurTeamLarryImg = document.createElement("img");
  
    aboutUsOurTeamLarryImg.src = "../src/img/snakeImg.png";
    const aboutUsOurTeanLianImg = document.createElement("img");
    aboutUsOurTeanLianImg.src = "../src/img/snakeImg.png";

    const aboutUsOurTeamLarryWrapperDiv = document.createElement("div");
    const aboutUsOurTeamLarryDiv = document.createElement("div");
    const aboutUsOurTeamLarryDivH1 = objectTxtCreator("h2", "Larry Wu");
    const aboutUsOurTeamLarryDivP = objectTxtCreator("p", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque metus eros, condimentum sit amet augue vel, dictum porta justo. Proin dui enim, finibus quis volutpat id, bibendum sed dolor. Phasellus in libero elit. Duis condimentum imperdiet dignissim. Morbi justo massa, accumsan sit amet pellentesque ut, suscipit at ante. Vivamus varius quam vel finibus condimentum. Nunc posuere quam risus. Phasellus cursus consequat nulla sed pulvinar.");
    combine(aboutUsOurTeamLarryDiv, aboutUsOurTeamLarryDivH1, aboutUsOurTeamLarryDivP);
    combine(aboutUsOurTeamLarryWrapperDiv, aboutUsOurTeamLarryImg, aboutUsOurTeamLarryDiv);

    const aboutUsOurTeamLianWrapperDiv = document.createElement("div");
    const aboutUsOurTeamLianDiv = document.createElement("div");
    const aboutUsOurTeamLianDivH1 = objectTxtCreator("h2", "Lian Jung")
    const aboutUsOurTeamLianDivP = objectTxtCreator("p", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque metus eros, condimentum sit amet augue vel, dictum porta justo. Proin dui enim, finibus quis volutpat id, bibendum sed dolor. Phasellus in libero elit. Duis condimentum imperdiet dignissim. Morbi justo massa, accumsan sit amet pellentesque ut, suscipit at ante. Vivamus varius quam vel finibus condimentum. Nunc posuere quam risus. Phasellus cursus consequat nulla sed pulvinar.");
    combine(aboutUsOurTeamLianDiv,aboutUsOurTeamLianDivH1, aboutUsOurTeamLianDivP);
    combine(aboutUsOurTeamLianWrapperDiv, aboutUsOurTeamLianImg, aboutUsOurTeamLianDiv);


    combine(aboutUsOurTeamDivWrapper, aboutUsOurTeamLarryWrapperDiv, aboutUsOurTeamLianWrapperDiv);
    combine(aboutUsOurTeamDiv, aboutUsOurTeamH1, aboutUsOurTeamDivWrapper);



    const aboutUsOurMissionDiv = objectClassCreator("div", "ourMissionDiv");
    const aboutUsOurMissionDivH1 = objectTxtCreator("h1", "Our Mission");
    const aboutUsOurMissionDivMessage = objectTxtCreator("p", "Our mission at FinHaven is rooted in our personal experiences as beginning developers and college freshmen in Computer Science. Having navigated the challenges of the high school application process ourselves, we understand the importance of informed decisions in shaping one's academic journey. That's why we have dedicated ourselves to creating an innovative app that empowers students by providing a comprehensive understanding of the choices they face. FinHaven aims to be a valuable resource, offering insights and support to students as they embark on their educational paths, ensuring they make well-informed decisions that pave the way for success in their academic pursuits.")
    combine(aboutUsOurMissionDiv, aboutUsOurMissionDivH1, aboutUsOurMissionDivMessage);


    const aboutUsContactInfoDiv = objectClassCreator("div", "contactInfoDiv");
    const aboutUsContactInfoDivH1 = objectTxtCreator("h1", "Contact Information: ");

    const aboutUsSendEmailDiv = objectClassCreator("div", "sendEmailDiv")
    
    const aboutUsOurMissionDivTitle = objectTxtCreator("h3", "Email Us:");

    const sendEmailNameWrap = document.createElement("div");
    const sendEmailNameTitle = objectTxtCreator("label", "Name: ");
    const sendEmailName = document.createElement("input");
    combine(sendEmailNameWrap, sendEmailNameTitle, sendEmailName)

    const sendEmailEmailWrap = document.createElement("div");
    const sendEmailEmailTitle = objectTxtCreator("label", "Email: ");
    const sendEmailEmail = document.createElement("input");
    combine(sendEmailEmailWrap, sendEmailEmailTitle, sendEmailEmail);


    const sendEmailMsgWrap = document.createElement("div");
    const sendEmailMsgTitle = objectTxtCreator("label", "Message: ");
    const sendEmailMessage = document.createElement("textarea");
    combine(sendEmailMsgWrap, sendEmailMsgTitle, sendEmailMessage);


    const submitEmail = objectTxtCreator("button", "send");

    combine(aboutUsSendEmailDiv, aboutUsOurMissionDivTitle, sendEmailNameWrap, sendEmailEmailWrap, sendEmailMsgWrap, submitEmail);


    combine(aboutUsContactInfoDiv, aboutUsContactInfoDivH1, aboutUsSendEmailDiv);

    



    combine(aboutUsPage, aboutUsOurTeamDiv, aboutUsOurMissionDiv, aboutUsContactInfoDiv);
    combine(body, aboutUsPage);

}
main();
loginPage();
aboutUsPage();


