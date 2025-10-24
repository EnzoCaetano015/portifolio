import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { formSchema, FormSchemaType } from "./Home.schemas"
import { useTheme } from "next-themes"
import { toast } from "sonner"
import { useState } from "react"

export const useHome = () => {
    const [loading, setLoading] = useState(false)

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

    return { form, theme, setTheme, handleEnviarEmail, loading, setLoading }
}
