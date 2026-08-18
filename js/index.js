// add footer with copyright

const footer = document.createElement("footer");
const body = document.querySelector("body");
body.appendChild(footer);

let today = new Date(); 
let thisYear = today.getFullYear();

let copyright = document.createElement("p");
copyright.innerHTML = `Mira Zhu &copy; ${thisYear}`;

footer.appendChild(copyright);

// add list of skills
const skills = ["Knitting", "Baking", "Adding numbers", "Making computational art"];

const skillsSection = document.querySelector("#Skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.classList.add("skills-item");
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}

