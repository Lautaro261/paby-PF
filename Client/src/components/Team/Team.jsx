import React from "react"
import './Team.css'

const teamMembers = [
    {
        image: "",
        name: "Andres Felipe Garcia Castro",
        linkedin: "https://www.linkedin.com/in/andr%C3%A9s-felipe-garcia-castro-afgc96",
        gitHub: ""
    },
    {
        image: "",
        name: "Jorge Andres Escobar Vidal",
        linkedin: "https://www.linkedin.com/in/andres-escobar-044504251",
        gitHub: ""
    },
    {
        image: "",
        name: "Nahuel Lautaro Torres Loretto",
        linkedin: "https://www.linkedin.com/in/nahuel-lautaro-torres-loretto-511085235/",
        gitHub: "https://github.com/Lautaro261"
    },
    {
        image: "",
        name: "Jose Armando Gomez Sanchez",
        linkedin: "https://www.linkedin.com/in/armando-gomez-2b1a1424a/",
        gitHub: ""
    },
    {
        image: "",
        name: "Juan Diego  Florez Lora",
        linkedin: "https://www.linkedin.com/in/juan-diego-florez-lora-9a689211b",
        gitHub: ""
    },
    {
        image: "",
        name: "Marco Polo Bejarano Maluquish",
        linkedin: "https://www.linkedin.com/in/marco-bejarano/",
        gitHub: "https://github.com/marcobejarano"
    },
    {
        image: "",
        name: "Camila Angeles Oyene",
        linkedin: "https://www.linkedin.com/in/camila-oyene-129505175/",
        gitHub: "https://github.com/CamilaOyene"
    },
    {
        image: "",
        name: "Juan Patricio Gutierrez Guzman",
        linkedin: "https://www.linkedin.com/in/juan-gutiérrez-developer/",
        gitHub: ""
    }
]

export default function Team() {
    return (
        <div className="conteiner-members">
                {
                    teamMembers.map((member) => (
                        <div key={member.name} className="member-card">
                            <img src={member.image} alt={member.name} />
                            <h3>{member.name}</h3>
                            <div className="social-links">
                                <a href={member.linkedin} target="_blank"><i class="fab fa-linkedin"></i>LinkedIn</a>
                                <a href={member.gitHub} target="_blank"><i class="fab fa-github"></i>GitHub</a>
                            </div>
                        </div>
                    ))
                }
        </div>
    )
}









