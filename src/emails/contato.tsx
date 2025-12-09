import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Tailwind,
    Text,
} from "@react-email/components"

type ContatoEmailProps = {
    name: string
    email: string
    subject: string
    message: string
}

export default function ContatoEmail({ name, email, subject, message }: ContatoEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>Novo contato pelo caetanodev.com</Preview>
            <Tailwind
                config={{
                    theme: {
                        extend: {
                            colors: {
                                night: "#0b1224",
                                slate: "#0f172a",
                                ink: "#111827",
                                glow: "#0ea5e9",
                                lilac: "#6366f1",
                                stone: "#1f2937",
                            },
                        },
                    },
                }}
            >
                <Body className="m-0 bg-night p-6 font-sans text-white">
                    <Container className="mx-auto my-4 w-full max-w-[680px] overflow-hidden rounded-2xl border border-stone bg-gradient-to-br from-slate to-ink shadow-2xl">
                        <Section className="border-b border-stone bg-gradient-to-r from-glow to-lilac px-6 py-5 text-night">
                            <Heading className="mt-1 text-[40px] text-slate-50 leading-tight">
                                Nova mensagem
                            </Heading>
                        </Section>

                        <Section className="px-6 py-6">
                            <table className="w-full border-collapse text-left text-white">
                                <tbody>
                                    <tr>
                                        <td className="w-1/2 align-top pr-2">
                                            <div className="rounded-xl border border-stone bg-ink px-4 py-3">
                                                <Text className="mb-1 text-[12px] uppercase tracking-[0.1em] text-gray-200">
                                                    Nome
                                                </Text>
                                                <Text className="m-0 text-[16px] font-semibold text-slate-50">
                                                    {name}
                                                </Text>
                                            </div>
                                        </td>
                                        <td className="w-1/2 align-top pl-2">
                                            <div className="rounded-xl border border-stone bg-ink px-4 py-3">
                                                <Text className="mb-1 text-[12px] uppercase tracking-[0.1em] text-gray-200">
                                                    Email
                                                </Text>
                                                <Text className="m-0 text-[16px] font-semibold text-slate-50">
                                                    {email}
                                                </Text>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            colSpan={2}
                                            className="pt-4"
                                        >
                                            <div className="rounded-xl border border-stone bg-ink px-4 py-3">
                                                <Text className="mb-1 text-[12px] uppercase tracking-[0.1em] text-gray-200">
                                                    Assunto
                                                </Text>
                                                <Text className="m-0 text-[16px] font-semibold text-slate-50">
                                                    {subject}
                                                </Text>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            colSpan={2}
                                            className="pt-4"
                                        >
                                            <div className="rounded-xl border border-stone bg-ink px-4 py-3">
                                                <Text className="mb-2 text-[12px] uppercase tracking-[0.1em] text-gray-200">
                                                    Mensagem
                                                </Text>
                                                <Text className="whitespace-pre-wrap text-[15px] leading-relaxed text-blue-50">
                                                    {message}
                                                </Text>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </Section>

                        <Hr className="mx-6 my-0 border-stone" />

                        <Section className="px-6 py-4">
                            <Text className="m-0 text-[13px] leading-relaxed text-slate-200">
                                Para responder, basta responder este email — o campo Reply-To está
                                definido como {email}.
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}
