function combine(obj1, ...manyargs) {
    for (let obj of manyargs) {
      obj1.appendChild(obj);
  }
}

function homeDiv() {
    const homeDiv = document.createElement('div');
    homeDiv.className = "homeDiv";

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

    combine(homeDiv, bodyDivUL, bodyDivUR, bodyDivBL, bodyDivBR);
    combine(bodyDivUL, infoParaHeaderUL, infoParaUL);
    combine(bodyDivBR, infoParaHeaderBR, infoParaBR);
    combine(bodyDivUR, infoImgUR);
    combine(bodyDivBL, infoImgBL);

    console.log("hi")
    return homeDiv;

}

module.exports = homeDiv;