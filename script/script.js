const introduction__text = [
    "Hi, ",
    { tag: "span", class: "grey", text: "I’m" },
    "<br>",
    { tag: "span", class: "white", text: "Samuel" },
    " Čaniga"
];

const speed = Math.random() * 40 + 40;
let section = 0;
let letter = 0;
let element = null;

function introduction() {
    if (section === 0) {
        document.getElementById("introduction").classList.add("cursor")
    }
    
    if (section >= introduction__text.length) {
        document.getElementById("introduction").classList.remove("cursor")
        description();
        return;
    }

    if (typeof introduction__text[section] === "string") {
        if (introduction__text[section] === "<br>") {
            document.getElementById("introduction").innerHTML += "<br>";
            section++;
            setTimeout(introduction, speed);
        } else {
            if (letter < introduction__text[section].length) {
                document.getElementById("introduction").innerHTML += introduction__text[section].charAt(letter);
                letter++;
                setTimeout(introduction, speed);
            } else {
                letter = 0;
                section++;
                setTimeout(introduction, speed);
            }
        }
    } else if (typeof introduction__text[section] === "object") {
        if (!element) {
            element = document.createElement(introduction__text[section].tag);
            if (introduction__text[section].class) element.className = introduction__text[section].class;
            document.getElementById("introduction").appendChild(element);
        }

        if (letter < introduction__text[section].text.length) {
            element.textContent += introduction__text[section].text.charAt(letter);
            letter++;
            setTimeout(introduction, speed);
        } else {
            element = null;
            letter = 0;
            section++;
            setTimeout(introduction, speed);
        }
    }
}

const description__text = [
    "I’m a ",
    { tag: "span", class: "white", text: "passionate" },
    " ",
    { tag: "span", class: "orange", text: "multimedia" },
    " and ",
    "<br>",
    { tag: "span", class: "orange", text: "digital media graphics" },
    " ",
    { tag: "span", class: "white", text: "student" },
    " ",
    "<br>",
    "with a strong interest."
];
  
const iSpeed = Math.random() * 20 + 20;
let iSection = 0;
let iLetter = 0;
let iElement = null;

function description() {
    if (iSection === 0) {
        document.getElementById("description").classList.add("cursor")
    }
    
    if (iSection >= description__text.length) return;

    if (typeof description__text[iSection] === "string") {
        if (description__text[iSection] === "<br>") {
            document.getElementById("description").innerHTML += "<br>";
            iSection++;
            setTimeout(description, iSpeed);
        } else {
            if (iLetter < description__text[iSection].length) {
                document.getElementById("description").innerHTML += description__text[iSection].charAt(iLetter);
                iLetter++;
                setTimeout(description, iSpeed);
            } else {
                iLetter = 0;
                iSection++;
                setTimeout(description, iSpeed);
            }
        }
    } else if (typeof description__text[iSection] === "object") {
        if (!iElement) {
            iElement = document.createElement(description__text[iSection].tag);
            if (description__text[iSection].class) iElement.className = description__text[iSection].class;
            document.getElementById("description").appendChild(iElement);
        }

        if (iLetter < description__text[iSection].text.length) {
            iElement.textContent += description__text[iSection].text.charAt(iLetter);
            iLetter++;
            setTimeout(description, iSpeed);
        } else {
            iElement = null;
            iLetter = 0;
            iSection++;
            setTimeout(description, iSpeed);
        }
    }
}

window.onload = () => {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    introduction();
};

const boxLike = document.querySelector('.about__text__like');
const boxTools = document.querySelector('.about__text__tools');
const boxFuture = document.querySelector('.about__text__future');
const boxLine = document.querySelector('.about__text__line');
const boxLineDelay = document.querySelector('.about__text__line__delay');

  function aboutTextAnimaton() {
    const boxLikeTop = boxLike.getBoundingClientRect().top;
    const boxTriggerPoint = window.innerHeight * 0.5;

    if (boxLikeTop < boxTriggerPoint) {
        boxLike.classList.add('active');
        boxLine.classList.add('active');

        setTimeout(() => {
            boxTools.classList.add('active');
            boxLineDelay.classList.add('active');
        }, 500);
        
        setTimeout(() => {
            boxFuture.classList.add('active');
        }, 1000);
    }
  }


const windowHeight = window.innerHeight;
const documentHeight = document.documentElement.scrollHeight;

elementTools = document.querySelector('.tools');

function scrollToolsAnimation() {
    let scrollPositionTools = window.scrollY;
    if (scrollPositionTools / (documentHeight - windowHeight) > 0.4) {
        if (elementTools.classList.contains('active')) return;
        elementTools.classList.add('active');
    }
}


elementLearning = document.querySelector('.learning');

function scrollLearningAnimation() {
    let scrollPositionLearning = window.scrollY;
    if (scrollPositionLearning / (documentHeight - windowHeight) > 0.7) {
        elementLearning.classList.add('active');
    }
}
window.addEventListener('scroll', () => {
    scrollLearningAnimation();
    scrollToolsAnimation();
    aboutTextAnimaton();
})