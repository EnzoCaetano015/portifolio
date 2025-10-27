"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { skills } from "./Home.utils"
import { Timeline } from "@/components/Timeline/timeline"
import { CardProject } from "@/components/CardProject/cardProject"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useHome } from "./Home.hook"
import { Textarea } from "@/components/ui/textarea"
import { Languages, Lightbulb, LightbulbOff } from "lucide-react"
import clsx from "clsx"
import { Spinner } from "@/components/ui/spinner"

export default function HomePage() {
    const {
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
    } = useHome()

    return (
        <div className="relative flex flex-col md:flex-row min-h-screen">
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        className="absolute top-8 right-8 md:left-8 md:right-auto z-50"
                        size={"icon-lg"}
                        onClick={handleToggleLanguage}
                    >
                        <Languages />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    {t("languages." + (locale === "pt-br" ? "en" : "pt-br"))}
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        className="absolute top-8 right-8 md:left-25 md:right-auto z-50 rounded-full border"
                        size={"icon-lg"}
                    >
                        {theme === "light" ? <LightbulbOff /> : <Lightbulb />}
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    {t("temaToggle." + (theme === "light" ? "dark" : "light"))}
                </TooltipContent>
            </Tooltip>

            <main className="w-full md:w-2/5 md:fixed md:left-0 md:top-0 h-screen flex flex-col gap-4 justify-center items-center md:items-start p-8 md:p-12 text-center md:text-left">
                <div className="flex-1 flex flex-col justify-center gap-4">
                    <div className="space-y-2">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                            Enzo Caetano
                        </h1>
                        <p className="text-xl lg:text-2xl text-primary font-mono">
                            {t("apresentação.profissão")}
                        </p>
                    </div>

                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md text-pretty mx-auto md:mx-0">
                        {frase}
                    </p>
                </div>

                <div className="flex flex-row gap-4 justify-center">
                    {socials.map(({ icon: Icon, tooltip, link }) => (
                        <Tooltip key={tooltip}>
                            <TooltipTrigger asChild>
                                <a href={link}>
                                    <Button
                                        variant="outline"
                                        size="icon-lg"
                                    >
                                        <Icon />
                                    </Button>
                                </a>
                            </TooltipTrigger>
                            <TooltipContent>{tooltip}</TooltipContent>
                        </Tooltip>
                    ))}
                </div>
            </main>

            <div className="pointer-events-none fixed top-0 right-0 hidden md:block w-[60%] h-15 md:h-10 bg-gradient-to-b from-background/90 to-transparent backdrop-blur-sm z-20 mr-5" />

            <section className="md:ml-[40%] flex-1 p-8 overflow-y-auto h-auto h-screen flex flex-col gap-16 md:text-left">
                <section className="flex flex-col gap-8 max-w-3xl md:p-8">
                    <h2 className="text-4xl font-bold text-balance">{t("apresentação.frases.0")}</h2>

                    <div className="flex flex-col gap-4">
                        <p className="text-pretty ">{t("apresentação.descrição.p1")}</p>

                        <p className="text-pretty">{t("apresentação.descrição.p2")}</p>

                        <p className="text-pretty">{t("apresentação.descrição.p3")}</p>

                        <p className="text-pretty">{t("apresentação.descrição.p4")}</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-mono text-muted-foreground mb-4 tracking-wider ">
                            {t("apresentação.tecnologias")}
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            {skills.map((skill) => (
                                <Badge
                                    key={skill}
                                    className={clsx(
                                        "px-2 py-0.5 text-base font-medium rounded-md transition-colors cursor-pointer",
                                        theme === "light"
                                            ? "bg-gray-100 text-gray-900 hover:bg-gray-900 hover:text-white hover:scale-105"
                                            : "bg-gray-800 text-gray-100 hover:bg-white hover:text-black hover:scale-105"
                                    )}
                                >
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="flex flex-col gap-8 max-w-3xl md:p-8 mt-10">
                    <h2 className="text-4xl font-bold text-balance text-center lg:text-start">
                        {t("empregos.titulo")}
                    </h2>

                    <Timeline
                        items={timelineItems}
                        theme={theme}
                    />
                </section>

                <section className="flex flex-col gap-8 max-w-3xl p-8  mt-10">
                    <h2 className="text-4xl font-bold text-balance text-center lg:text-start">
                        {t("projetos.titulo")}
                    </h2>

                    <div className="flex flex-col gap-4">
                        {projects.map((project) => (
                            <CardProject
                                theme={theme}
                                key={project.title}
                                {...project}
                            />
                        ))}
                    </div>
                </section>

                <section
                    className="flex flex-col gap-8 max-w-3xl md:p-8 lg:mt-10 lg:mb-10"
                    id="email"
                >
                    <h2 className="text-4xl font-bold text-balance ">{t("contato.titulo")}</h2>

                    <p className="text-pretty">{t("contato.descrição")}</p>

                    <Form {...form}>
                        <form
                            onSubmit={handleEnviarEmail}
                            className="flex flex-col gap-4"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormDescription>
                                                {t("contato.form.inputsLabels.nome")}
                                            </FormDescription>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="text"
                                                    placeholder={t("contato.form.placeholder.nome")}
                                                    className="flex-1"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormDescription>
                                                {t("contato.form.inputsLabels.email")}
                                            </FormDescription>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="email"
                                                    placeholder={t("contato.form.placeholder.email")}
                                                    className="flex-1"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="flex flex-col gap-4">
                                <FormField
                                    control={form.control}
                                    name="subject"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormDescription>
                                                {t("contato.form.inputsLabels.assunto")}
                                            </FormDescription>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="text"
                                                    placeholder={t("contato.form.placeholder.assunto")}
                                                    className="flex-1"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormDescription>
                                                {t("contato.form.inputsLabels.mensagem")}
                                            </FormDescription>
                                            <FormControl>
                                                <Textarea
                                                    {...field}
                                                    placeholder={t("contato.form.placeholder.mensagem")}
                                                    className="flex-1"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="flex flex-row">
                                <Button
                                    type="submit"
                                    className="w-full md:w-auto"
                                    disabled={loading}
                                >
                                    {loading && <Spinner />} {t("contato.form.botaoEnviar")}
                                </Button>
                            </div>
                        </form>
                    </Form>
                </section>
            </section>
            <div className="pointer-events-none fixed bottom-0 right-0 hidden md:block w-[60%] h-15 md:h-10 bg-gradient-to-t from-background/90 to-transparent backdrop-blur-sm z-20 mr-5" />
        </div>
    )
}
