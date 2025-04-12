"use client";

import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BestWrapper = ({ children }) => {

    useGSAP(() => {
        const bestTL = gsap.timeline({
            scrollTrigger: {
                trigger: "#best",
                start: "top center",
                toggleActions: "play none none none",
                once: true,
            },
        });

        bestTL
            .fromTo(".best-title", { opacity: 0, yPercent: 100 }, { opacity: 1, yPercent: 0, ease: "power2.out" })
            .fromTo(".best-desc", { opacity: 0, yPercent: 100 }, { opacity: 1, yPercent: 0, ease: "power2.out" }, "<0.2")
            .fromTo(".best-card", { opacity: 0, yPercent: 100 }, {
                opacity: 1,
                yPercent: 0,
                ease: "power2.out",
                stagger: 0.2,
                duration: 1
            });
    }, []);

    return <>{children}</>;
};

export default BestWrapper;
