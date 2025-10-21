type TimelineItem = {
    date?: string
    position: string
    company: string
    description: string
    technologies: string[]
}

export interface TimelineProps {
    items: TimelineItem[]
}
