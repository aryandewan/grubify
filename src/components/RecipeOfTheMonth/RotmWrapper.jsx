"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RotmWrapper = ({ children }) => {

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#month',
                start: "top center",
                toggleActions: 'play none none none',
                once: true,
            },
        });

        tl.fromTo(".small-header", { opacity: 0, yPercent: 100 }, { opacity: 1, yPercent: 0, ease: "power2.out" })
            .fromTo(".recipe-title", { opacity: 0, yPercent: 100 }, { opacity: 1, yPercent: 0, ease: "power2.out" })
            .fromTo(".recipe-ing", { opacity: 0, yPercent: 100 }, { opacity: 1, yPercent: 0 })
            .fromTo(".recipe-desc", { opacity: 0, yPercent: 100 }, { opacity: 1, yPercent: 0 })
            .fromTo(".recipe-btn", { opacity: 0, yPercent: 100 }, { opacity: 1, yPercent: 0 });
    }, []);

    return (
        <>{children}</>
    );
};

export default RotmWrapper;
