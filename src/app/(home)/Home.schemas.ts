import * as Z from "zod"

export const formSchema = Z.object({
    name: Z.string({error: "Name is required"}),
    email: Z.string({error: "Email is required"}).email("Invalid email address"),
    subject: Z.string({error: "Subject is required"}),
    message: Z.string({error: "Message is required"}),
})

export type FormSchemaType = Z.infer<typeof formSchema>
