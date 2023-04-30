import React from "react"
import './Team.css'
import Andy from '../../imgs/imgsAboutUs/Andy.jpg'
import Marco from '../../imgs/imgsAboutUs/marco.jpeg'
import Armando from '../../imgs/imgsAboutUs/Armando.jfif'
import Jorge from '../../imgs/imgsAboutUs/Jorge.jfif'
import JuanDiego from '../../imgs/imgsAboutUs/JuanDiego.jfif'
import JuanPa from '../../imgs/imgsAboutUs/JuanPa.jfif'
import Nahuel from '../../imgs/imgsAboutUs/Nahuel.jfif'
import Camila from '../../imgs/imgsAboutUs/Camila.jpg'

const teamMembers = [
    {
        image: Andy,
        name: "Andres Felipe Garcia Castro",
        linkedin: "https://www.linkedin.com/in/andr%C3%A9s-felipe-garcia-castro-afgc96",
        gitHub: "https://github.com/AndresGarcia96"
    },
    {
        image: Jorge,
        name: "Jorge Andres Escobar Vidal",
        linkedin: "https://www.linkedin.com/in/andres-escobar-044504251",
        gitHub: "https://github.com/Tatsumi0720?tab=repositories"
    },
    {
        image: Nahuel,
        name: "Nahuel Lautaro Torres Loretto",
        linkedin: "https://www.linkedin.com/in/nahuel-lautaro-torres-loretto-511085235/",
        gitHub: "https://github.com/Lautaro261"
    },
    {
        image: Armando,
        name: "Jose Armando Gomez Sanchez",
        linkedin: "https://www.linkedin.com/in/armando-gomez-2b1a1424a/",
        gitHub: "https://github.com/Armando1509",
    },
    {
        image: JuanDiego,
        name: "Juan Diego  Florez Lora",
        linkedin: "https://www.linkedin.com/in/juan-diego-florez-lora-9a689211b",
        gitHub: "https://github.com/J10GOF"
    },
    {
        image: Marco,
        name: "Marco Polo Bejarano Maluquish",
        linkedin: "https://www.linkedin.com/in/marco-bejarano/",
        gitHub: "https://github.com/marcobejarano"
    },
    {
        image: Camila,
        name: "Camila Angeles Oyene",
        linkedin: "https://www.linkedin.com/in/camila-oyene-129505175/",
        gitHub: "https://github.com/CamilaOyene"
    },
    {
        image: JuanPa,
        name: "Juan Patricio Gutierrez Guzman",
        linkedin: "https://www.linkedin.com/in/juan-gutiérrez-developer/",
        gitHub: "https://github.com/juangutierrezjp"
    }
]

export default function Team() {

    return (
        <div className="conteiner-members">
                {
                    teamMembers.map((member) => (
                        <div key={member.name} className="member-card">
                            <img src={member.image} alt={member.name} className="image" />
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