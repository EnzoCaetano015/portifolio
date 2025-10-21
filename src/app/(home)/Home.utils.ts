import { Github, Linkedin, Mail } from "lucide-react"

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
    { icon: Github, tooltip: "Visit my GitHub" },
    { icon: Linkedin, tooltip: "Visit my LinkedIn" },
    { icon: Mail, tooltip: "Send me an Email" },
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
        image: "/images/nexus-dashboard.png",
        link: {
            url: "https://nexus.caetanodev.com",
            github: "https://github.com/caetanodev/nexus-dashboard",
        },
        technologies: ["React", "TypeScript", "FastAPI", "TailwindCSS"],
    },
    {
        title: "Mimimi AI",
        description:
            "Emotional analysis platform using AI to generate word clouds and track student well-being anonymously.",
        image: "/images/mimimi-ai.png",
        link: {
            url: "https://mimimi.caetanodev.com",
            github: "https://github.com/caetanodev/mimimi-ai",
        },
        technologies: ["Python", "FastAPI", "React", "Cloudinary"],
    },
    {
        title: "Pacventura",
        description:
            "Interactive storybook project featuring 3D characters and educational content for children.",
        image: "/images/pacventura.png",
        link: {
            url: "https://pacventura.com",
            github: "https://github.com/caetanodev/pacventura",
        },
        technologies: ["Next.js", "Three.js", "Styled-Components", "Node.js"],
    },
]
