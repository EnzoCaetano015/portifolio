import { Badge } from "../ui/badge"
import { TimelineProps } from "./timeline.types"

export const Timeline = ({ items }: TimelineProps) => {
    const currentYear = new Date().getFullYear()

    return (
        <>
            {items.map((item, index) => {
                const isFirst = index === 0
                const displayDate = isFirst ? `${currentYear} - Present` : item.date ?? ""

                return (
                    <div
                        key={index}
                        className="flex flex-row gap-8"
                    >
                        <div className="w-40 flex-shrink-0">
                            <p>{displayDate}</p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <span>
                                {item.position} · {item.company}
                            </span>

                            {item.description && <p>{item.description}</p>}

                            {item.technologies && (
                                <div className="flex flex-row gap-2 flex-wrap">
                                    {item.technologies.map((tech) => (
                                        <Badge key={tech}>{tech}</Badge>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )
            })}
        </>
    )
}
