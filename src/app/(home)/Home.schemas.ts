import * as Z from "zod"

export const formSchema = Z.object({
    name: Z.string().min(2).max(100),
    email: Z.string().email(),
    subject: Z.string().min(2).max(200),
    message: Z.string().min(10).max(1000),
})
