"use client"

import React from 'react'
import RecipeCard from "@/components/RecipeCard";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Best = ({bestRecipes}) => {
    useGSAP(() => {
        const bestTL = gsap.timeline({
            scrollTrigger: {
                trigger: '#best',
                start: "top center",
                toggleActions: 'play none none none',
                once: true,
            },
        });

        bestTL.fromTo(".best-title",
            {
                opacity: 0,
                yPercent: 100
            },
            {
                opacity: 1,
                yPercent: 0,
                ease: "power1.in"
            }
        )

        bestTL.fromTo(".best-desc",
            {
                opacity: 0,
                yPercent: 100
            },
            {
                opacity: 1,
                yPercent: 0,
                ease: "power1.in"
            }
        )

        bestTL.fromTo(".best-card",
            {
                opacity: 0,
                yPercent: 100
            },
            {
                opacity: 1,
                yPercent: 0,
                ease: "power1.in",
                duration: 1,
                stagger: 0.2
            }
        )
    }, [])

    return (
        <section id="best" className="w-full min-h-dvh flex flex-col items-center justify-center gap-5">
            <h2 className="text-5xl lg:text-7xl text-center text-[#a8742f] best-title">OUR BEST RECIPES</h2>
            <p className="text-lg font-extralight text-center text-[#a8742f] best-desc">
                Unable to decide? Here are our BEST!
            </p>
            <div className="max-w-[90%] xl:max-w-[70%] h-[600px] grid grid-cols-1 lg:grid-cols-3 gap-10">
                {bestRecipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </section>
    )
}
export default Best
