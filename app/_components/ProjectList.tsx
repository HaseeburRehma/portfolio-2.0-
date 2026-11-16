'use client';
import SectionTitle from '@/components/SectionTitle';
import { PROJECTS } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import Project from './Project';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const PREVIEW_W = 380; // px, desktop hover card width (16:10)
const RIGHT_GAP = 150; // px kept free for the category / year column

const ProjectList = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const previewRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState<string | null>(null);
    const [isDesktop, setIsDesktop] = useState(false);

    // Hover preview follows the cursor inside the list (desktop only).
    useGSAP(
        () => {
            const mq = window.matchMedia('(min-width: 768px) and (hover: hover)');
            const update = () => setIsDesktop(mq.matches);
            update();
            mq.addEventListener('change', update);

            const el = previewRef.current;
            const box = containerRef.current;
            if (!el || !box) return () => mq.removeEventListener('change', update);

            const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3' });
            const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3' });

            const onMove = (e: MouseEvent) => {
                const r = box.getBoundingClientRect();
                const w = el.offsetWidth;
                const h = el.offsetHeight;
                // pinned to the right of the list, beside the titles; follows the cursor vertically
                // with a slight horizontal drift for a sense of motion
                const drift = ((e.clientX - r.left) / r.width - 0.5) * 40;
                const x = Math.max(r.width - w - RIGHT_GAP + drift, 0);
                const y = Math.min(Math.max(e.clientY - r.top - h / 2, -h / 4), r.height - h * 0.75);
                xTo(x);
                yTo(y);
            };
            box.addEventListener('mousemove', onMove);
            return () => {
                box.removeEventListener('mousemove', onMove);
                mq.removeEventListener('change', update);
            };
        },
        { scope: containerRef },
    );

    // Section entrance
    useGSAP(
        () => {
            gsap.from(containerRef.current, {
                y: 120,
                opacity: 0,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'top 75%',
                    scrub: 1,
                },
            });
        },
        { scope: containerRef },
    );

    const activeProject = PROJECTS.find((p) => p.slug === active);

    return (
        <section className="pb-section" id="selected-projects">
            <div className="container">
                <SectionTitle title="SELECTED PROJECTS" />

                <div
                    className="group/projects relative"
                    ref={containerRef}
                    onMouseLeave={() => setActive(null)}
                >
                    {/* Desktop hover preview */}
                    <div
                        ref={previewRef}
                        aria-hidden="true"
                        className={cn(
                            'max-md:hidden pointer-events-none absolute left-0 top-0 z-20 transition-opacity duration-300 ease-out',
                            active && isDesktop ? 'opacity-100' : 'opacity-0',
                        )}
                        style={{ width: PREVIEW_W }}
                    >
                        <div
                            className={cn(
                                'relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-background-light shadow-[0_40px_90px_-25px_rgba(0,0,0,0.95)] ring-1 ring-primary/10 transition-transform duration-500 ease-out',
                                active && isDesktop ? 'scale-100' : 'scale-90',
                            )}
                        >
                            {PROJECTS.map((project) => (
                                <Image
                                    key={project.slug}
                                    src={project.thumbnail}
                                    alt=""
                                    fill
                                    sizes={`${PREVIEW_W}px`}
                                    className={cn(
                                        'object-cover object-top transition-all duration-500 ease-out',
                                        project.slug === active
                                            ? 'opacity-100 scale-100'
                                            : 'opacity-0 scale-[1.06]',
                                    )}
                                />
                            ))}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
                            {activeProject && (
                                <div className="absolute inset-x-4 bottom-3 flex items-center justify-between text-xs">
                                    <span className="rounded-full bg-black/60 backdrop-blur px-2.5 py-1 text-foreground">
                                        {activeProject.category}
                                    </span>
                                    <span className="text-white/80">{activeProject.year}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col max-md:gap-12">
                        {PROJECTS.map((project, index) => (
                            <Project
                                index={index}
                                project={project}
                                onMouseEnter={setActive}
                                key={project.slug}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectList;
