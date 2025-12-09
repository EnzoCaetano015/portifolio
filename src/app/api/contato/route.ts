import { NextResponse } from "next/server"

import { formSchema } from "@/app/[locale]/(home)/Home.schemas"
import ContatoEmail from "@/emails/contato"
import { resend } from "@/lib/resend"

export async function POST(req: Request) {
    const body = await req.json().catch(() => null)

    const parsed = formSchema.safeParse(body)
    if (!parsed.success) {
        return NextResponse.json(
            { message: "Invalid payload", issues: parsed.error.issues },
            { status: 400 }
        )
    }

    const { name, email, subject, message } = parsed.data

    try {
        const { error } = await resend.emails.send({
            from: "Portfolio <contato@caetanodev.com>",
            to: "peracioenzo@gmail.com",
            replyTo: email,
            subject: `Assunto: ${subject}`,
            react: ContatoEmail({ name, email, subject, message }),
            text: `Nome: ${name}\nEmail: ${email}\nAssunto: ${subject}\n\nMensagem:\n${message}`,
            headers: {
                "X-Contact-Source": "portfolio",
            },
        })

        if (error) {
            console.error("Resend error:", error)
            return NextResponse.json({ message: "Failed to send email" }, { status: 500 })
        }

        return NextResponse.json({ message: "Email sent" })
    } catch (error) {
        console.error("Unexpected error sending email:", error)
        return NextResponse.json({ message: "Failed to send email" }, { status: 500 })
    }
}
