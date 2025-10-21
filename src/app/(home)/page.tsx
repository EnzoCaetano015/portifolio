"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { projects, skills, socials, timelineItems } from "./Home.utils"
import { Timeline } from "@/components/Timeline/timeline"
import { CardProject } from "@/components/CardProject/cardProject"
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useHome } from "./Home.hook"
import { Textarea } from "@/components/ui/textarea"

export default function HomePage() {
    const { form } = useHome()

    return (
        <div>
            <main className="fixed left-0 top-0 h-screen w-1/3 p-8 flex flex-col gap-4 justify-center">
                <div className="">
                    <h1>Enzo Caetano</h1>
                    <p>Full Stack Developer</p>
                </div>

                <p>
                    I craft pixel-perfect digital experiences that blend thoughtful design with robust
                    engineering.
                </p>

                <div className="flex flex-row gap-4">
                    {socials.map(({ icon: Icon, tooltip }) => (
                        <Tooltip key={tooltip}>
                            <TooltipTrigger>
                                <Button
                                    variant="outline"
                                    size="icon"
                                >
                                    <Icon />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>{tooltip}</TooltipContent>
                        </Tooltip>
                    ))}
                </div>
            </main>
            <section className="ml-[33.333%] flex-1 p-8 overflow-y-auto h-screen flex flex-col gap-16">
                <section className="flex flex-col gap-8 max-w-3xl">
                    <h2>Building the web, one pixel at a time</h2>

                    <div className="flex flex-col gap-4">
                        <p>
                            I&apos;m a full-stack developer passionate about creating accessible,
                            pixel-perfect user interfaces that blend thoughtful design with robust
                            engineering. My favorite work lies at the intersection of design and
                            development, creating experiences that not only look great but are
                            meticulously built for performance and usability.
                        </p>

                        <p>
                            With a keen eye for detail and a commitment to quality, I strive to bring
                            designs to life with precision, ensuring every element is perfectly aligned
                            and every interaction is seamless. Whether it&apos;s crafting responsive
                            layouts or optimizing front-end performance, I am dedicated to delivering
                            exceptional digital experiences that resonate with users.
                        </p>

                        <p>
                            Let&apos;s collaborate to build web applications that are not only visually
                            stunning but also functionally robust, creating a lasting impact on users
                            through thoughtful design and meticulous development.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3>TECHNOLOGIES</h3>
                        <div className="grid grid-cols-6 gap-4">
                            {skills.map((skill) => (
                                <Badge
                                    key={skill}
                                    variant="outline"
                                >
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="flex flex-col gap-8 max-w-3xl">
                    <h2>Where I&apos;ve Worked</h2>

                    <Timeline items={timelineItems} />
                </section>

                <section className="flex flex-col gap-8 max-w-3xl">
                    <h2>Projects</h2>

                    <div className="flex flex-col gap-4">
                        {projects.map((project) => (
                            <CardProject
                                key={project.title}
                                {...project}
                            />
                        ))}
                    </div>
                </section>

                <section className="flex flex-col gap-8 max-w-3xl">
                    <h2>Let&apos;s work together</h2>

                    <p>
                        I&apos;m always interested in hearing about new projects and opportunities.
                        Whether you have a question or just want to say hi, feel free to reach out!
                    </p>

                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(() => {})}
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

                            <Button type="submit">Send Message</Button>
                            </div>
                        </form>
                    </Form>
                </section>
            </section>
        </div>
    )
}
