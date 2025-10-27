import Image from "next/image"
import { Badge } from "../ui/badge"
import { CardProjectProps } from "./cardProject.types"
import { Button } from "../ui/button"
import clsx from "clsx"
import { useTranslations } from "next-intl"
import { imageMap } from "./cardProject.utils"

export const CardProject = ({
    title,
    description,
    image,
    link,
    technologies,
    theme,
}: CardProjectProps) => {
    const t = useTranslations()

    return (
        <div
            className="flex flex-col lg:flex-row gap-10 p-4 pl-0
        items-center text-center justify-center lg:items-start lg:text-left"
        >
            <Image
                width={205}
                height={105}
                src={imageMap[image]}
                alt={title}
                className="rounded-md object-cover h-32 w-55 lg:mt-10 opacity-50 hover:opacity-100 transition-opacity"
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
                    {link.url && (
                        <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                variant="link"
                                className="p-0"
                            >
                                {t("projetos.botoes.verProjeto")}
                            </Button>
                        </a>
                    )}
                    {link.github && (
                        <a
                            href={link.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                variant="link"
                                className="p-0"
                            >
                                {t("projetos.botoes.verCodigo")}
                            </Button>
                        </a>
                    )}
                    {link.outro && (
                        <a
                            href={link.outro}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                variant="link"
                                className="p-0"
                            >
                                {t("projetos.botoes.verMais")}
                            </Button>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}
