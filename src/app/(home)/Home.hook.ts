import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { formSchema } from "./Home.schemas"
import { useTheme } from "next-themes"

export const useHome = () => {
  const form = useForm({
    resolver: zodResolver(formSchema)
  })

  const { theme, setTheme } = useTheme()

  return { form, theme, setTheme }
}