import Image from "next/image"
import { Badge } from "../ui/badge"
import { CardProjectProps } from "./cardProject.types"
import { Button } from "../ui/button"

export const CardProject = ({ title, description, image, link, technologies }: CardProjectProps) => {
    return (
        <div className="flex flex-row gap-8 p-2">
            <Image
                width={205}
                height={105}
                src={image}
                alt={title}
                className="rounded-md object-cover h-32 w-48"
            />
            <div className="flex flex-col gap-4">
                <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-sm text-muted-foreground">{description}</p>
                </div>

                <div className="flex flex-row gap-2">
                    {technologies.map((tech) => (
                        <Badge
                            key={tech}
                            variant="outline"
                        >
                            {tech}
                        </Badge>
                    ))}
                </div>

                <div className="flex flex-row gap-8">
                    <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button variant="link" className="p-0">View Project</Button>
                    </a>
                    <a
                        href={link.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button variant="link" className="p-0">View Code</Button>
                    </a>
                </div>
            </div>
        </div>
    )
}
