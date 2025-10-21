import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { formSchema } from "./Home.schemas"

export const useHome = () => {
  const form = useForm({
    resolver: zodResolver(formSchema)
  })

  return { form }
}