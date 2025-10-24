import clsx from "clsx"
import { Badge } from "../ui/badge"
import { TimelineProps } from "./timeline.types"

export const Timeline = ({ items, theme }: TimelineProps) => {
    const currentYear = new Date().getFullYear()

    return (
        <>
            {items.map((item, index) => {
                const isFirst = index === 0
                const displayDate = isFirst ? `${currentYear} - Present` : item.date ?? ""

                return (
                    <div
                        key={index}
                        className="mb-8 last:mb-0"
                    >
                        <div
                            className={clsx(
                                "flex flex-col lg:flex-row lg:gap-20 gap-4",
                                "items-center text-center lg:items-start lg:text-left"
                            )}
                        >
                            <div className="md:w-40 flex-shrink-0">
                                <p className="font-mono">{displayDate}</p>
                            </div>

                            <div className="flex flex-col gap-4">
                                <span>
                                    {item.position} · {item.company}
                                </span>

                                {item.description && (
                                    <p className="text-sm md:text-base">{item.description}</p>
                                )}

                                {item.technologies && (
                                 <div className="flex flex-row flex-wrap gap-2 justify-center lg:justify-start">
                                        {item.technologies.map((tech) => (
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
                                )}
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
