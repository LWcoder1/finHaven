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

function loginPage() {
    const loginPage = objectClassCreator("div", "loginPage");
  
    const loginDiv = objectClassCreator("div", "loginDiv");
  
    const signupDiv = objectClassCreator("div", "signupDiv");
    signupDiv.classList.add("hide");
  
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

    return loginPage;
}
  
module.exports = loginPage;