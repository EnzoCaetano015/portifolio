import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { formSchema, FormSchemaType } from "./Home.schemas"
import { useTheme } from "next-themes"
import { toast } from "sonner"
import { useEffect, useState } from "react"
import { frases } from "./Home.utils"

export const useHome = () => {
    const [loading, setLoading] = useState(false)
    const [frase, setFrase] = useState("")

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
            toast.success("Email sent successfully!")
            form.reset()
        } catch {
            toast.error("Failed to send email. Please try again later.")
        }
    })

    const { theme, setTheme } = useTheme()

    useEffect(() => {
        const aleatoria = frases[Math.floor(Math.random() * frases.length)]
        setFrase(aleatoria)
    }, [])

    return { form, theme, setTheme, handleEnviarEmail, loading, setLoading, frase }
}
