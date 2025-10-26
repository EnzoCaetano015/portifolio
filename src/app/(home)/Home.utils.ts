import { Github, Instagram, Linkedin, Mail } from "lucide-react"

export const frases = [
    "Code with soul, projects with truth.",
    "Where technology meets care, impact is born.",
    "Innovate with purpose, build with empathy.",
]

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
    { icon: Mail, tooltip: "Send me an Email", link: "#email" },
]

export const timelineItems = [
    {
        position: "Full Stack Developer",
        company: "Tecnologia Unica",
        description:
            "Designed and developed a scalable insurance management platform covering all operational and business workflows of the insurance market. Built the front-end using React, TypeScript, and Vite for high performance and maintainability. Developed the back-end with .NET and C#, implementing a microservices architecture and BFF layer integrated with InsureMo APIs and services. Deployed and managed infrastructure on AWS, ensuring reliability and scalability. Coordinated team tasks and CI/CD pipelines through Azure DevOps to maintain efficient delivery and collaboration.",
        technologies: [
            "React",
            "TypeScript",
            "Node.js",
            "SQL Server",
            "Docker",
            "C#",
            ".Net",
            "Azure DevOps",
            "AWS",
            "Vite",
            "Git",
            "Figma",
            "microservices",
            "InsureMo",
            "insurance knowledge",
        ],
    },
    {
        position: "Full Stack Developer",
        company: "Agencia M",
        description:
            "Led front-end development and modernization of mobile and web platforms. Maintained and optimized a legacy WordPress and PHP system hosted on cPanel. Refactored an existing React Native application to improve performance and code quality, then developed a fully redesigned cross-platform version using Flutter in collaboration with Google APIs. Collaborated closely with the design team through Figma to ensure consistent UI/UX across Android and iOS.",
        technologies: [
            "React Native",
            "Flutter",
            "Google APIs",
            "Figma",
            "Android Studio",
            "iOS",
            "Android",
            "Php",
            "wordpress",
            "Cpanel",
        ],
        date: "2025",
    },
    {
        position: "Infrastructure Assistant",
        company: "Metalurgica Sete de Setembro",
        description:
            "Provided technical support and ensured the reliability of the company's IT infrastructure. Managed Windows Server environments, configured networks, and maintained both hardware and software systems. Oversaw user access control via Active Directory, optimized VPN connections for remote teams, and administered Office and SharePoint environments to improve collaboration and data security.",
        technologies: [
            "Windows Server",
            "Office admin",
            "computer network",
            "hardware maintenance",
            "software configuration",
            "SharePoint",
            "Active Directory",
            "VPN",
            "TOTVS Protheus",
        ],
        date: "2024",
    },
]

export const projects = [
    {
        title: "Nexus",
        description:
            "Nexus is a digital platform that connects student projects from ETECs and FATECs with companies and sponsors. It aims to give visibility and support to innovative ideas, promoting entrepreneurship in education. Through the platform, students can showcase their projects, and companies can offer funding, mentoring, or materials, creating a collaborative network between schools and the business sector.",
        image: "/images/nexus.png",
        link: {
            url: "https://nexus.caetanodev.com",
            github: "https://github.com/TCC-trabalho?tab=repositories",
            outro: null,
        },
        technologies: [
            "React",
            "Vite",
            "TypeScript",
            "Php",
            "Laravel",
            "Mercado Pago",
            "MySql",
            "Resend",
            "Pusher",
            "Docker",
            "Nginx",
            "VPS",
            "Ubuntu",
        ],
    },
    {
        title: "MiMiMi",
        description:
            "The MIMIMI Project uses artificial intelligence to support students' emotional well-being. Through a robot with a QR code, students anonymously share words about their feelings. These are analyzed to create word clouds that reveal emotional patterns in each class, helping schools detect early signs of distress and connect students with psychological support.",
        image: "/images/mimimi.png",
        link: {
            url: "https://mimimi.app.br/",
            github: null,
            outro: "https://drive.google.com/file/d/1RTvSzd51oUuAqPDRzIxWRqpY1AuquJsD/view?usp=sharing",
        },
        technologies: [
            "React",
            "Vite",
            "JavaScript",
            "Python",
            "FastAPI",
            "MySql",
            "Machine Learning",
            "Docker",
            "Nginx",
            "VPS",
            "Ubuntu",
        ],
    },
    {
        title: "App Feteps",
        description:
            "The FETEPS app is a mobile application developed to present, organize, and follow the projects showcased at the Technological Fair of Centro Paula Souza. It enables students, teachers, and evaluators to easily access project information, schedules, results, and certificates, providing a practical and modern experience.",
        image: "/images/feteps.jpeg",
        link: {
            url: null,
            github: "https://github.com/EnzoCaetano015/FetepsAPP",
            outro: null,
        },
        technologies: [
            "Flutter",
            "Jwt",
            "Figma",
            "Android",
            "Api integration",
            "Android Studio",
            "PWA",
            "APK",
        ],
    },
]
