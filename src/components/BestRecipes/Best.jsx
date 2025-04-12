import React from 'react'
import RecipeCard from "@/components/RecipeCard";
import BestWrapper from "@/components/BestRecipes/BestWrapper";
import Image from "next/image";

const Best = ({bestRecipes}) => {
    return (
        <BestWrapper>
            <section id="best" className="relative w-full min-h-dvh flex flex-col items-center justify-center gap-5 py-10 xl:py-0">
                <div className="absolute inset-0 z-0 bg-[#141414]">
                    <Image
                        src="/images/table.jpg"
                        alt="Background"
                        fill
                        className="object-cover object-center opacity-100 mix-blend-overlay"
                        priority
                        quality={85}
                    />
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center gap-5">
                    <h2 className="text-5xl lg:text-7xl text-center text-[#a8742f] best-title">OUR BEST RECIPES</h2>
                    <p className="text-lg font-extralight text-center text-[#a8742f] best-desc">
                        Unable to decide? He're our BEST!
                    </p>
                    <div className="max-w-[90%] xl:max-w-[70%] h-[600px] grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {bestRecipes.map(recipe => (
                            <RecipeCard key={recipe.id} recipe={recipe} />
                        ))}
                    </div>
                </div>
            </section>
        </BestWrapper>
    )
}
export default Best
