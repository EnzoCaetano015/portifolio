export interface CardProjectProps {
    title: string;
    description: string;
    image: string;
    link: {
        url: string;
        github: string;
    };
    technologies: string[];
}