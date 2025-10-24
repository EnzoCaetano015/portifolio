import { Github, Instagram, Linkedin, Mail } from "lucide-react"

export const skills = [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "Python",
    "Docker",
    "Nginx",
    "Flutter",
    "MySql",
    "Php",
    "Laravel",
    "Linux",
    "Git",
]

export const socials = [
    { icon: Github, tooltip: "Visit my GitHub", link: "https://github.com/EnzoCaetano015" },
    {
        icon: Linkedin,
        tooltip: "Visit my LinkedIn",
        link: "https://www.linkedin.com/in/enzo-caetano-814736290/",
    },
    { icon: Instagram, tooltip: "Visit my Instagram", link: "https://www.instagram.com/caetanokskj/" },
    { icon: Mail, tooltip: "Send me an Email", link: "" },
]

export const timelineItems = [
    {
        position: "Senior Developer",
        company: "Tech Solutions Inc.",
        description: "Developing scalable web applications.",
        technologies: ["React", "TypeScript", "Node.js"],
    },
    {
        position: "Full Stack Engineer",
        company: "NextGen Labs",
        description: "Leading the front-end team.",
        technologies: ["Next.js", "TailwindCSS"],
        date: "2020",
    },
    {
        position: "Full Stack Engineer",
        company: "NextGen Labs",
        description: "Leading the front-end team.",
        technologies: ["Next.js", "TailwindCSS"],
        date: "2020",
    },
]

export const projects = [
    {
        title: "Nexus Dashboard",
        description:
            "Admin dashboard built with React, TypeScript, and FastAPI for managing academic and corporate projects.",
        image: "/images/transferir.png",
        link: {
            url: "https://nexus.caetanodev.com",
            github: "https://github.com/caetanodev/nexus-dashboard",
        },
        technologies: ["React", "TypeScript", "FastAPI", "TailwindCSS"],
    },
    {
        title: "MiMiMi",
        description:
            "Admin dashboard built with React, TypeScript, and FastAPI for managing academic and corporate projects.",
        image: "/images/transferir.png",
        link: {
            url: "https://nexus.caetanodev.com",
            github: "https://github.com/caetanodev/nexus-dashboard",
        },
        technologies: ["React", "TypeScript", "FastAPI", "TailwindCSS"],
    },
    {
        title: "PacVentura",
        description:
            "Admin dashboard built with React, TypeScript, and FastAPI for managing academic and corporate projects.",
        image: "/images/transferir.png",
        link: {
            url: "https://nexus.caetanodev.com",
            github: "https://github.com/caetanodev/nexus-dashboard",
        },
        technologies: ["React", "TypeScript", "FastAPI", "TailwindCSS"],
    },
]
