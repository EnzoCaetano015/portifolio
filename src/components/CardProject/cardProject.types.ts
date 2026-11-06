export type ProjectStatus = "emDesenvolvimento" | "congelado" | "emManutencao";

export interface CardProjectProps {
    title: string;
    description: string;
    image: string;
    link: {
        url: string | null;
        github: string | null;
        outro: string | null;
    };
    technologies: string[];
    status?: ProjectStatus;
    theme?: string
}
