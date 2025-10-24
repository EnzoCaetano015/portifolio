import Image from "next/image"
import { Badge } from "../ui/badge"
import { CardProjectProps } from "./cardProject.types"
import { Button } from "../ui/button"
import clsx from "clsx"

export const CardProject = ({
    title,
    description,
    image,
    link,
    technologies,
    theme,
}: CardProjectProps) => {
    return (
        <div
            className="flex flex-col lg:flex-row gap-8 p-4 pl-0
        items-center text-center lg:items-start lg:text-left"
        >
            <Image
                width={205}
                height={105}
                src={image}
                alt={title}
                className="rounded-md object-cover h-32 w-48 lg:h-32 lg:w-48 opacity-50 hover:opacity-100 transition-opacity"
            />
            <div className="flex flex-col gap-4">
                <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-sm text-muted-foreground">{description}</p>
                </div>

                <div className="flex flex-row flex-wrap gap-2 justify-center lg:justify-start">
                    {technologies.map((tech) => (
                        <Badge
                            key={tech}
                            className={clsx(
                                "rounded-md transition-colors cursor-pointer",
                                theme === "light"
                                    ? "bg-gray-800 text-gray-100 hover:scale-105"
                                    : "bg-gray-100 text-gray-900 hover:scale-105"
                            )}
                        >
                            {tech}
                        </Badge>
                    ))}
                </div>

                <div className="flex flex-row gap-8 justify-center lg:justify-start">
                    <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            variant="link"
                            className="p-0"
                        >
                            View Project
                        </Button>
                    </a>
                    <a
                        href={link.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            variant="link"
                            className="p-0"
                        >
                            View Code
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    )
}
