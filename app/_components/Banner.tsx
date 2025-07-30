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
            <div className="absolute inset-0  z-0 pointer-events-none bg-gradient-to-r from-background/80 via-background/50 to-background z-0"></div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-primary/10 blur-3xl"></div>

            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 grid md:grid-cols-2 gap-8 items-center relative z-10"
                ref={containerRef}
            >
                {/* Image Section - Left */}
                <div className="order-2 md:order-1 h-full flex items-center justify-center relative" ref={imageRef}>
                    <div
                        className={`relative w-full max-w-[450px] aspect-[3/4] overflow-hidden rounded-2xl banner-slide-up-and-fade transition-opacity duration-500 ${preloaderComplete ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent mix-blend-overlay z-10"></div>
                        {preloaderComplete && (
                            <Image
                                src="/haseeb1.jpeg"
                                alt="Haseeb - Frontend Developer"
                                fill
                                className="object-cover object-center"
                                priority
                            />
                        )}
                    </div>

                    {/* Floating badge */}
                    <div
                        className={`absolute -bottom-4 -right-4 md:bottom-8 md:right-8 bg-background border border-border p-4 rounded-xl shadow-lg banner-slide-up-and-fade transition-opacity duration-500 ${preloaderComplete ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <div className="flex gap-3 items-center">
                            <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-sm font-medium">Available for work</span>
                        </div>
                    </div>
                </div>

                {/* Content Section - Right */}
                <div
                    className={`order-1 md:order-2 flex flex-col justify-center items-start max-w-[544px] transition-opacity duration-500 ${preloaderComplete ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <h1 className="banner-title banner-slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton">
                        <span className="text-primary">Software</span>
                        <br /> <span className="ml-4">DEVELOPER</span>
                    </h1>
                    <p className="banner-description banner-slide-up-and-fade mt-6 text-lg text-muted-foreground">
                        Hi! I&apos;m <span className="font-medium text-foreground">Haseeb</span>. A creative Software Developer with
                        3+ years of experience in building high-performance, scalable, and responsive web solutions.
                    </p>

                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-6 mt-8 banner-slide-up-and-fade w-full">
                        <div className="banner-slide-up-and-fade">
                            <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">3+</h5>
                            <p className="text-muted-foreground text-sm">Years of Experience</p>
                        </div>
                        <div className="banner-slide-up-and-fade">
                            <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">15+</h5>
                            <p className="text-muted-foreground text-sm">Completed Projects</p>
                        </div>
                        <div className="banner-slide-up-and-fade">
                            <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">10K+</h5>
                            <p className="text-muted-foreground text-sm">Hours Worked</p>
                        </div>
                    </div>

                    <Button
                        as="link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={GENERAL_INFO.upworkProfile}
                        variant="primary"
                        className="mt-9 banner-button banner-slide-up-and-fade"
                    >
                        Hire Me
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Banner
