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


function aboutUsPage() {
    const aboutUsPage = objectClassCreator("div", "aboutUsPage");

    const aboutUsOurTeamDiv = objectClassCreator("div", "ourTeamDiv");

    const aboutUsOurTeamH1 = objectTxtCreator("h1", "Our Team")

    const aboutUsOurTeamDivWrapper = objectClassCreator("div", "ourTeamDivWrapper");

    const aboutUsOurTeamLarryImg = document.createElement("img");
  
    aboutUsOurTeamLarryImg.src = "../src/img/snakeImg.png";
    const aboutUsOurTeamLianImg = document.createElement("img");
    aboutUsOurTeamLianImg.src = "../src/img/snakeImg.png";

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


    const sendEmailMsgWrap = objectClassCreator("div", "sendEmailMsgWrap");
    const sendEmailMsgTitle = objectTxtCreator("label", "Message:  ");
    const sendEmailMessage = document.createElement("textarea");
    combine(sendEmailMsgWrap, sendEmailMsgTitle, sendEmailMessage);


    const submitEmail = objectTxtCreator("button", "send");

    combine(aboutUsSendEmailDiv, aboutUsOurMissionDivTitle, sendEmailNameWrap, sendEmailEmailWrap, sendEmailMsgWrap, submitEmail);


    combine(aboutUsContactInfoDiv, aboutUsContactInfoDivH1, aboutUsSendEmailDiv);

    combine(aboutUsPage, aboutUsOurTeamDiv, aboutUsOurMissionDiv, aboutUsContactInfoDiv);

    return aboutUsPage;
}

module.exports = aboutUsPage;