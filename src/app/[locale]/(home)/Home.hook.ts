import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { formSchema, FormSchemaType } from "./Home.schemas"
import { useTheme } from "next-themes"
import { toast } from "sonner"
import { useEffect, useState } from "react"
import { useLocale, useTranslations } from "next-intl"
import { getFrases, getProjects, getSocials, getTimelineItems } from "./Home.utils"
import { usePathname, useRouter } from "next/navigation"

export const useHome = () => {
    const [loading, setLoading] = useState(false)
    const [frase, setFrase] = useState("")

    const t = useTranslations()

    const socials = getSocials(t)
    const timelineItems = getTimelineItems(t)
    const projects = getProjects(t)

    const router = useRouter()
    const pathname = usePathname()
    const locale = useLocale()

    const handleToggleLanguage = () => {
        const newLocale = locale === "pt-br" ? "en" : "pt-br"
        router.replace(`/${newLocale}${pathname.replace(/^\/(pt-br|en)/, "")}`)
    }

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    })

    const handleEnviarEmail = form.handleSubmit(async (data: FormSchemaType) => {
        try {
            setLoading(true)

            const response = await fetch("/api/contato", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                throw new Error("Falha ao enviar email")
            }

            toast.success(t("contato.form.toast.success"))
            form.reset()
        } catch (error) {
            console.error("Erro ao enviar email", error)
            toast.error(t("contato.form.toast.error"))
        } finally {
            setLoading(false)
        }
    })

    const { theme, setTheme } = useTheme()

    useEffect(() => {
        const frasesTraduzidas = getFrases(t)
        const aleatoria = frasesTraduzidas[Math.floor(Math.random() * frasesTraduzidas.length)]
        setFrase(aleatoria)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        form,
        theme,
        setTheme,
        handleEnviarEmail,
        loading,
        frase,
        t,
        socials,
        timelineItems,
        projects,
        handleToggleLanguage,
        locale,
    }
}
