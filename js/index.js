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

// add message handling
const messageForm = document.getElementsByName("leave_message")[0];
const submitButton = messageForm.querySelector("button");

messageForm.addEventListener("submit", function(e) {
    // prevent automatic page refresh upon submit 
    e.preventDefault();

    // get submitted values and log to console
    let name = e.target.usersName.value;
    let email = e.target.usersEmail.value;
    let message = e.target.usersMessage.value;
    console.log(name);
    console.log(email);
    console.log(message);

    // add submitted email and message to message list, with remove button
    const messageSection = document.querySelector("#Messages");
    const messageList = messageSection.querySelector("ul");

    // show message section if there is a message added
    messageSection.style.display = "block";

    //create new message element and remove button
    let newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a><span>: ${message} </span>`
    newMessage.classList.add("message-item");

    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.setAttribute("type", "button");

    removeButton.addEventListener("click", function(e) {
        const entry = removeButton.parentNode;
        entry.remove();

        // if number of messages is zero after remove, hide section
        let messages = messageSection.querySelectorAll("li");
        let numMessages = messages.length;
        if (numMessages === 0) {
            messageSection.style.display = "none";
        }
    })

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    // reset form 
    messageForm.reset();
})

/*
const messageSection = document.querySelector("#Messages");
const messageList = messageSection.querySelector("ul");

let messages = messageSection.querySelectorAll("li");
let numMessages = messages.length;

if (numMessages === 0) {
    messageSection.style.display = "none";
} 
    */