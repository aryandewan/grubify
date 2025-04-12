"use client"

import React from 'react'
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ReviewWrapper = ({children}) => {
    useGSAP(() => {
        const ctx = gsap.context(() => {
            const reviewTL = gsap.timeline({
                scrollTrigger: {
                    trigger: "#review",
                    start: "top center",
                    toggleActions: 'play none none none',
                    once: true,
                }
            })

            reviewTL.to(".upper-review", {opacity: 1, y: 0, ease: "power1.out"})
                .to(".upper-author", {opacity: 1, y: 0, ease: "power1.out"})
        })

        return () => ctx.revert()
    }, [])

    return (
        <>{children}</>
    )
}
export default ReviewWrapper
