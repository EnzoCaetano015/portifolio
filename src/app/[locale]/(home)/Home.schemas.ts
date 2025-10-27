import * as Z from "zod"

export const formSchema = Z.object({
    name: Z.string({ error: "Name is required" }).min(2, "Name is required"),
    email: Z.string({ error: "Email is required" })
        .min(2, "Email is required")
        .email("Invalid email address"),
    subject: Z.string({ error: "Subject is required" }).min(2, "Subject is required"),
    message: Z.string({ error: "Message is required" }).min(5, "Message is required"),
})

export type FormSchemaType = Z.infer<typeof formSchema>
