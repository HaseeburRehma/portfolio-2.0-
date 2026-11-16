import TransitionLink from '@/components/TransitionLink';
import { IProject } from '@/types';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

interface Props {
    index: number;
    project: IProject;
    onMouseEnter: (_slug: string) => void;
}

const Project = ({ index, project, onMouseEnter }: Props) => {
    return (
        <TransitionLink
            href={`/projects/${project.slug}`}
            className="project-item group block md:py-7 md:border-b md:border-border first:md:border-t md:group-hover/projects:opacity-35 md:hover:!opacity-100 transition-opacity duration-300"
            onMouseEnter={() => onMouseEnter(project.slug)}
        >
            {/* Mobile: inline image */}
            <div className="md:hidden relative mb-5 aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-background-light">
                <Image
                    src={project.thumbnail}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="100vw"
                    className="object-cover object-top"
                    loading="lazy"
                />
            </div>

            <div className="flex items-start gap-3 md:gap-6">
                <div className="font-anton text-muted-foreground pt-1.5 md:pt-3 text-sm md:text-base">
                    _{(index + 1).toString().padStart(2, '0')}.
                </div>

                <div className="flex-1 min-w-0">
                    <h4 className="font-anton leading-[0.95] text-4xl xs:text-5xl md:text-[52px] lg:text-[56px] flex items-center gap-4 transition-all duration-700 bg-gradient-to-r from-primary to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left">
                        {project.title}
                        <ArrowUpRight
                            className="shrink-0 text-primary opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500"
                            size={40}
                            strokeWidth={1.5}
                        />
                    </h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {project.techStack.slice(0, 4).map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-border px-2.5 py-1 text-[11px] uppercase tracking-wider text-muted-foreground group-hover:border-primary/40 transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="hidden lg:flex flex-col items-end gap-1 pt-3 text-right">
                    <span className="text-sm text-foreground/80">{project.category}</span>
                    <span className="font-anton text-muted-foreground">{project.year}</span>
                </div>
            </div>
        </TransitionLink>
    );
};

export default Project;
