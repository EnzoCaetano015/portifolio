import { Github, Instagram, Linkedin, Mail } from "lucide-react"
import { useTranslations } from "next-intl"
import type { WheelEvent } from "react"

type TFunction = ReturnType<typeof useTranslations>

export const skills = [
    "React",
    "TypeScript",
    "Next.js",
    ".NET",
    "C#",
    "Python",
    "FastAPI",
    "PHP",
    "Laravel",
    "Node.js",
    "SQL",
    "MySQL",
    "SQL Server",
    "Oracle",
    "Docker",
    "Git",
    "Azure DevOps",
    "Streamlit",
    "Scikit-learn",
    "IA Aplicada",
    "APIs REST",
    "Microserviços",
]

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
            ".NET",
            "C#",
            "SQL Server",
            "APIs REST",
            "Microserviços",
            "Jobs Automatizados",
            "Azure DevOps",
            "Insuremo",
            "ARAP",
            "BCP",
            "Sinistro",
            "Seguros",
            "Regras de Negócio",
        ],
    },
    {
        position: t("empregos.agenciam.cargo"),
        company: "Agência M",
        description: t("empregos.agenciam.descrição"),
        technologies: [
            "PHP",
            "WordPress",
            "React Native",
            "Flutter",
            "Dart",
            "APIs",
            "Figma",
            "Android Studio",
            "Mobile",
            "Sistemas Legados",
            "UI Mobile",
            "Git",
        ],
        date: "2025",
    },
    {
        position: t("empregos.seteDeSetembro.cargo"),
        company: "Metalúrgica Sete de Setembro",
        description: t("empregos.seteDeSetembro.descrição"),
        technologies: [
            "Infraestrutura TI",
            "Windows Server",
            "SharePoint",
            "Active Directory",
            "Redes",
            "VPN",
            "Hardware",
            "Impressoras",
            "Servidor Local",
            "Suporte Técnico",
            "Organização Interna",
        ],
        date: "2024",
    },
]

export const getProjects = (t: TFunction) => [
    {
        title: "DashowBoard",
        description: t("projetos.dashowboard.descricao"),
        image: "dashowboard.png",
        link: {
            url: null,
            github: "https://github.com/EnzoCaetano015/DashowBoard",
            outro: null,
        },
        technologies: [
            "Tauri",
            "React",
            "TypeScript",
            "Rust",
            "SQLite",
            "GitHub API",
            "Vercel",
            "Railway",
            "Supabase",
            "Monitoramento",
            "Open Source",
            "Desktop App",
        ],
    },
    {
        title: "Archbase",
        description: t("projetos.archbase.descricao"),
        image: "archbase-card.png",
        link: {
            url: null,
            github: "https://github.com/EnzoCaetano015/Archbase",
            outro: null,
        },
        technologies: [
            "Go",
            "CLI",
            "Arquitetura de Software",
            "MCP",
            "Agentes de IA",
            "YAML",
            "Open Source",
        ],
    },
    {
        title: "Bifrost",
        description: t("projetos.bifrost.descricao"),
        image: "bifrost-card.png",
        link: {
            url: null,
            github: null,
            outro: null,
        },
        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "shadcn/ui",
            "TanStack Query",
            "Supabase",
            "Cloudinary",
            "Pagar.me",
        ],
        inDevelopment: true,
    },
    {
        title: "MiMiMi",
        description: t("projetos.mimimi.descricao"),
        image: "mimimi.png",
        link: {
            url: "https://mimimi.app.br/",
            github: null,
            outro: "https://www.reporterdiario.com.br/noticia/3586133/",
        },
        technologies: [
            "TypeScript",
            "Vite",
            "Python",
            "FastAPI",
            "MySQL",
            "NLP",
            "IA Aplicada",
            "Análise de Sentimentos",
            "Gemini API",
            "Docker",
        ],
    },
    {
        title: "App FETEPS",
        description: t("projetos.feteps.descricao"),
        image: "feteps.png",
        link: {
            url: null,
            github: "https://github.com/EnzoCaetano015/FetepsAPP",
            outro: null,
        },
        technologies: [
            "Flutter",
            "Dart",
            "Mobile App",
            "Provider",
            "Shared Preferences",
            "DiceBear API",
            "Android",
            "UI/UX",
        ],
    },
]

export const forwardWheelToElementScroll = (
    event: WheelEvent<HTMLElement>,
    scrollElement: HTMLElement | null
) => {
    if (!scrollElement) return

    let deltaY = event.deltaY

    if (event.deltaMode === 1) {
        deltaY *= 16
    } else if (event.deltaMode === 2) {
        deltaY *= window.innerHeight
    }

    event.preventDefault()
    scrollElement.scrollTop += deltaY
}

