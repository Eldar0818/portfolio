const menuCard = document.getElementById("menu-card")
const openMenuBtn = document.getElementById("open-menu-btn")
const closeMenuBtn = document.getElementById("close-menu-btn")

openMenuBtn.addEventListener('click', () => {
    menuCard.classList.add("active")
})

closeMenuBtn.addEventListener('click', () => {
    menuCard.classList.remove("active")
})

window.addEventListener('resize', () => {
    if(window.innerWidth > 568){
        menuCard.classList.remove("active")
    }
})

const skillWrapper = document.getElementById("skill-wrapper")

const skills = [
    {id: 1, title: "HTML/CSS"},
    {id: 2, title: "JAVASCRIPT"},
    {id: 3, title: "TYPESCRIPT"},
    {id: 4, title: "REACT (+TYPESCRIPT)"},
    {id: 5, title: "NEXT (+TYPESCRIPT)"},
    {id: 6, title: "REDUX"},
    {id: 7, title: "STYLED-COMPONENTS"},
    {id: 8, title: "MATERIAL UI"},
    {id: 9, title: "BOOTSTRAP"},
    {id: 10, title: "NODE.JS"},
    {id: 11, title: "EXPRESS.JS"},
    {id: 12, title: "MONGODB"},
    {id: 13, title: "POSTGRESQL"},
]

function displaySkills(){
    let output = ""
    skills.map(skill => {
        output += `
            <div class="skill-box">
                <p>${skill.title}</p>
            </div>
        `
    })

    skillWrapper.innerHTML = output
}

displaySkills()

function handleEmail() {
    let params = {
        name: document.getElementById("yourName").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("tellMe").value
    }

    const serviceId = "service_cnvx1xc"
    const templateId = "template_gllw90n"

    emailjs.send(serviceId, templateId, params)
            .then(() => {
                alert("Email send successfuly")
                document.getElementById("yourName").value = ""
                document.getElementById("subject").value = ""
                document.getElementById("tellMe").value = ""
            })
            .catch(err=> alert(err))
}

const contactForm = document.getElementById("contact-form")

contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
    handleEmail()
})