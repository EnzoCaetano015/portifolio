import { Github, Instagram, Linkedin, Mail } from "lucide-react"
import { useTranslations } from "next-intl"

type TFunction = ReturnType<typeof useTranslations>

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

export const getFrases = (t: TFunction) => t.raw("apresentação.frases")

export const getSocials = (t: TFunction) => [
    { icon: Github, tooltip: t("social.githubTooltip"), link: "https://github.com/EnzoCaetano015" },
    {
        icon: Linkedin,
        tooltip: t("social.linkedinTooltip"),
        link: "https://www.linkedin.com/in/enzo-caetano-814736290/",
    },
    {
        icon: Instagram,
        tooltip: t("social.instagramTooltip"),
        link: "https://www.instagram.com/caetanokskj/",
    },
    { icon: Mail, tooltip: t("social.emailTooltip"), link: "#email" },
]

export const getTimelineItems = (t: TFunction) => [
    {
        position: t("empregos.unica.cargo"),
        company: "Tecnologia Única",
        description: t("empregos.unica.descrição"),
        technologies: [
            "React",
            "TypeScript",
            "Node.js",
            "SQL Server",
            "Docker",
            "C#",
            ".NET",
            "Azure DevOps",
            "AWS",
            "Vite",
            "Git",
            "Figma",
            "Microsserviços",
            "InsureMo",
            "Gestão de Seguros",
        ],
    },
    {
        position: t("empregos.agenciam.cargo"),
        company: "Agência M",
        description: t("empregos.agenciam.descrição"),
        technologies: [
            "React Native",
            "Flutter",
            "Google APIs",
            "Figma",
            "Android Studio",
            "iOS",
            "Android",
            "PHP",
            "WordPress",
            "cPanel",
        ],
        date: "2025",
    },
    {
        position: t("empregos.seteDeSetembro.cargo"),
        company: "Metalúrgica Sete de Setembro",
        description: t("empregos.seteDeSetembro.descrição"),
        technologies: [
            "Windows Server",
            "Office Admin",
            "Redes de Computadores",
            "Manutenção de Hardware",
            "Configuração de Software",
            "SharePoint",
            "Active Directory",
            "VPN",
            "TOTVS Protheus",
        ],
        date: "2024",
    },
]

export const getProjects = (t: TFunction) => [
    {
        title: "Nexus",
        description: t("projetos.nexus.descricao"),
        image: "nexus.png",
        link: {
            url: "https://nexus.caetanodev.com",
            github: "https://github.com/TCC-trabalho?tab=repositories",
            outro: null,
        },
        technologies: [
            "React",
            "Vite",
            "TypeScript",
            "PHP",
            "Laravel",
            "Mercado Pago",
            "MySQL",
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
        description: t("projetos.mimimi.descricao"),
        image: "mimimi.png",
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
            "MySQL",
            "Machine Learning",
            "Docker",
            "Nginx",
            "VPS",
            "Ubuntu",
        ],
    },
    {
        title: "App FETEPS",
        description: t("projetos.feteps.descricao"),
        image: "feteps.jpeg",
        link: {
            url: null,
            github: "https://github.com/EnzoCaetano015/FetepsAPP",
            outro: null,
        },
        technologies: [
            "Flutter",
            "JWT",
            "Figma",
            "Android",
            "API Integration",
            "Android Studio",
            "PWA",
            "APK",
        ],
    },
]
