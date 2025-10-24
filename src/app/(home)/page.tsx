"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { projects, skills, socials, timelineItems } from "./Home.utils"
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
import { Lightbulb, LightbulbOff } from "lucide-react"
import clsx from "clsx"
import { Spinner } from "@/components/ui/spinner"

export default function HomePage() {
    const { form, theme, setTheme, handleEnviarEmail, loading } = useHome()

    return (
        <div className="relative flex flex-col md:flex-row min-h-screen">
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        className="absolute top-8 right-8 md:left-8 md:right-auto z-50 p-2 rounded-full border"
                        size={"icon-lg"}
                    >
                        {theme === "light" ? <LightbulbOff /> : <Lightbulb />}
                    </Button>
                </TooltipTrigger>
                <TooltipContent>Toggle to {theme === "light" ? "Dark" : "Light"} Mode</TooltipContent>
            </Tooltip>

            <main className="w-full md:w-2/5 md:fixed md:left-0 md:top-0 h-screen flex flex-col gap-4 justify-center items-center md:items-start p-8 md:p-12 text-center md:text-left">
                <div className="flex-1 flex flex-col justify-center gap-4">
                    <div className="space-y-2">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                            Enzo Caetano
                        </h1>
                        <p className="text-xl lg:text-2xl text-primary font-mono">
                            Full Stack Developer
                        </p>
                    </div>

                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md text-pretty mx-auto md:mx-0">
                        I craft pixel-perfect digital experiences that blend thoughtful design with
                        robust engineering.
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
                <section className="flex flex-col gap-8 max-w-3xl md:p-8 mt-10">
                    <h2 className="text-4xl font-bold text-balance">
                        Building the web, one pixel at a time
                    </h2>

                    <div className="flex flex-col gap-4">
                        <p className="text-pretty ">
                            I&apos;m a full-stack developer passionate about creating accessible,
                            pixel-perfect user interfaces that blend thoughtful design with robust
                            engineering. My favorite work lies at the intersection of design and
                            development, creating experiences that not only look great but are
                            meticulously built for performance and usability.
                        </p>

                        <p className="text-pretty">
                            With a keen eye for detail and a commitment to quality, I strive to bring
                            designs to life with precision, ensuring every element is perfectly aligned
                            and every interaction is seamless. Whether it&apos;s crafting responsive
                            layouts or optimizing front-end performance, I am dedicated to delivering
                            exceptional digital experiences that resonate with users.
                        </p>

                        <p className="text-pretty">
                            Let&apos;s collaborate to build web applications that are not only visually
                            stunning but also functionally robust, creating a lasting impact on users
                            through thoughtful design and meticulous development.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-mono text-muted-foreground mb-4 tracking-wider ">
                            TECHNOLOGIES
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
                        Where I&apos;ve Worked
                    </h2>

                    <Timeline
                        items={timelineItems}
                        theme={theme}
                    />
                </section>

                <section className="flex flex-col gap-8 max-w-3xl p-8  mt-10">
                    <h2 className="text-4xl font-bold text-balance text-center lg:text-start">
                        Projects
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

                <section className="flex flex-col gap-8 max-w-3xl md:p-8 lg:mt-10 lg:mb-10">
                    <h2 className="text-4xl font-bold text-balance ">Let&apos;s work together</h2>

                    <p className="text-pretty">
                        I&apos;m always interested in hearing about new projects and opportunities.
                        Whether you have a question or just want to say hi, feel free to reach out!
                    </p>

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
                                            <FormDescription>Name</FormDescription>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="text"
                                                    placeholder="Your Name"
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
                                            <FormDescription>Email</FormDescription>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="email"
                                                    placeholder="Your Email"
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
                                            <FormDescription>Subject</FormDescription>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="text"
                                                    placeholder="what's this about?"
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
                                            <FormDescription>Message</FormDescription>
                                            <FormControl>
                                                <Textarea
                                                    {...field}
                                                    placeholder="tell me more..."
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
                                    {loading && <Spinner />} Send Message
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
