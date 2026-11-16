"use client"
import ArrowAnimation from "@/components/ArrowAnimation"
import Button from "@/components/Button"
import { GENERAL_INFO } from "@/lib/data"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import Image from "next/image"
import React, { useState, useEffect } from "react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null)
    const imageRef = React.useRef<HTMLDivElement>(null)
    const [preloaderComplete, setPreloaderComplete] = useState(false)

    // Wait for preloader to complete
    useEffect(() => {
        // Add a listener for when preloader is done
        const timer = setTimeout(() => {
            setPreloaderComplete(true)
        }, 3000) // Adjust this time to match your preloader duration

        return () => clearTimeout(timer)
    }, [])

    // move the content a little up on scroll
    useGSAP(
        () => {
            if (!preloaderComplete) return

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "bottom 70%",
                    end: "bottom 10%",
                    scrub: 1,
                },
            })

            tl.fromTo(".banner-slide-up-and-fade", { y: 0 }, { y: -150, opacity: 0, stagger: 0.02 })

            // Image parallax effect
            gsap.fromTo(
                imageRef.current,
                { y: 0 },
                {
                    y: -50,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    },
                },
            )
        },
        { scope: containerRef, dependencies: [preloaderComplete] },
    )

    return (
        <section className="relative overflow-hidden  z-0" id="banner">
            <ArrowAnimation />
            

            {/* Decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/[0.06] blur-3xl pointer-events-none"></div>
            

            <div className="absolute inset-0 bg-grid-fade opacity-60 pointer-events-none z-0"></div>

            <div
                className="container min-h-[100svh] pt-28 pb-16 md:py-0 grid md:grid-cols-2 gap-12 md:gap-8 items-center relative z-10"
                ref={containerRef}
            >
                {/* Portrait */}
                <div className="order-2 md:order-1 flex items-center justify-center relative" ref={imageRef}>
                    <div
                        className={`relative w-full max-w-[420px] banner-slide-up-and-fade transition-opacity duration-500 ${preloaderComplete ? "opacity-100" : "opacity-0"}`}
                    >
                        <div className="absolute -inset-6 rounded-[2rem] bg-primary/20 blur-3xl opacity-40" aria-hidden="true"></div>
                        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0a0a0a] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
                            {preloaderComplete && (
                                <Image
                                    src="/haseeb-portrait.webp"
                                    alt="Haseeb Ur Rehman, full-stack developer"
                                    fill
                                    sizes="(max-width: 768px) 90vw, 420px"
                                    className="object-cover object-top"
                                    priority
                                />
                            )}
                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div>
                            <div className="absolute left-5 right-5 bottom-5 flex items-end justify-between gap-3">
                                <div>
                                    <p className="font-anton text-2xl leading-none">Haseeb Ur Rehman</p>
                                    <p className="mt-1.5 text-sm text-muted-foreground">Islamabad, Pakistan · remote</p>
                                </div>
                                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/60 backdrop-blur px-3 py-1.5">
                                    <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                                    <span className="text-xs font-medium whitespace-nowrap">Available for work</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div
                    className={`order-1 md:order-2 flex flex-col justify-center items-start max-w-[560px] transition-opacity duration-500 ${preloaderComplete ? "opacity-100" : "opacity-0"}`}
                >
                    <p className="banner-slide-up-and-fade mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-background-light/60 px-3.5 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        Next.js · React Native · PostgreSQL
                    </p>
                    <h1 className="banner-title banner-slide-up-and-fade leading-[.92] text-6xl sm:text-[84px] font-anton">
                        <span className="text-primary">Full-Stack</span>
                        <br /> DEVELOPER
                    </h1>
                    <p className="banner-description banner-slide-up-and-fade mt-6 text-lg text-muted-foreground text-balance">
                        Hi! I&apos;m <span className="font-medium text-foreground">Haseeb</span>. I build web and mobile
                        products end to end, from the database schema to the App Store release, with a focus on
                        security, performance and clean interfaces.
                    </p>

                    <div className="grid grid-cols-3 gap-6 mt-9 banner-slide-up-and-fade w-full border-t border-border pt-7">
                        <div>
                            <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">3+</h5>
                            <p className="text-muted-foreground text-sm">Years of experience</p>
                        </div>
                        <div>
                            <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">15+</h5>
                            <p className="text-muted-foreground text-sm">Projects delivered</p>
                        </div>
                        <div>
                            <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">5</h5>
                            <p className="text-muted-foreground text-sm">Apps on App Store &amp; Google Play</p>
                        </div>
                    </div>

                    <div className="mt-9 flex flex-wrap gap-3 banner-slide-up-and-fade">
                        <Button
                            as="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={GENERAL_INFO.upworkProfile}
                            variant="primary"
                            className="banner-button"
                        >
                            Hire Me
                        </Button>
                        <a
                            href="#selected-projects"
                            className="inline-flex h-12 items-center rounded-full border border-border px-6 text-sm font-medium uppercase tracking-wide hover:border-primary hover:text-primary transition-colors"
                        >
                            View projects
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
