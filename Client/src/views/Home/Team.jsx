import React from "react"
import "../../styles/CSS/Team.css"

const teamMembers = [
    {
        image: "",
        name: "Andres Felipe Garcia Castro",
        linkedin: "",
        gitHub: ""
    },
    {
        image: "",
        name: "Jorge Andres Escobar Vidal",
        linkedin: "",
        gitHub: ""
    },
    {
        image: "",
        name: "Nahuel Lautaro Torres Loretto",
        linkedin: "",
        gitHub: ""
    },
    {
        image: "",
        name: "Jose Armando Gomez Sanchez",
        linkedin: "",
        gitHub: ""
    },
    {
        image: "",
        name: "Juan Diego  Florez Lora",
        linkedin: "",
        gitHub: ""
    },
    {
        image: "",
        name: "Marco Polo Bejarano Maluquish",
        linkedin: "",
        gitHub: ""
    },
    {
        image: "",
        name: "Camila Angeles Oyene",
        linkedin: "",
        gitHub: ""
    },
    {
        image: "",
        name: "Juan Patricio Gutierrez Guzman",
        linkedin: "",
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









