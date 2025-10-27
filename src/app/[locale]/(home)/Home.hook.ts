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
            // Simulate email sending
            setLoading(true)
            await new Promise((resolve) => setTimeout(resolve, 2000))
            setLoading(false)
            console.log("Email data:", data)
            toast.success(t("contato.form.toast.success"))
            form.reset()
        } catch {
            toast.error(t("contato.form.toast.error"))
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
