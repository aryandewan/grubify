import React from "react";
import Link from "next/link";
import Image from "next/image";
import RotmWrapper from "@/components/RecipeOfTheMonth/RotmWrapper";

const Rotm = ({recipeOfTheMonth}) => {
    return (
        <RotmWrapper>
            <section
                id="month"
                className="w-full min-h-dvh lg:h-dvh flex flex-col-reverse xl:flex-row items-center justify-center overflow-hidden"
            >
                <div className="w-full xl:w-1/2 h-full">
                    <Image
                        src={recipeOfTheMonth.src}
                        alt={recipeOfTheMonth.title}
                        width="1000"
                        height="1000"
                        className="w-full object-cover object-center h-full"
                    />
                </div>
                <div className="w-full xl:w-1/2 text-white flex flex-col gap-5 items-center justify-center p-5 h-full">
                    <h2 className="text-2xl font-light small-header">RECIPE OF THE MONTH</h2>
                    <div className="text-center flex flex-col gap-5 items-center justify-center">
                        <h3 className="text-4xl xl:text-7xl font-semibold recipe-title">
                            {recipeOfTheMonth.title}
                        </h3>
                        <div className="flex flex-row gap-3 recipe-ing">
                            {recipeOfTheMonth.ingredients.map((ingredient, index) => (
                                <span key={index}>{ingredient}</span>
                            ))}
                        </div>
                        <p className="text-lg font-extralight text-justify w-full xl:w-1/2 recipe-desc">
                            {recipeOfTheMonth.description}
                        </p>
                        <Link
                            href={`/recipes/${recipeOfTheMonth.id}`}
                            className="recipe-btn border-t-5 border-b-5 border-[#a8742f] text-white px-6 py-3 hover:border-l-5 hover:border-r-5 font-light"
                        >
                            Generate Recipe
                        </Link>
                    </div>
                </div>
            </section>
        </RotmWrapper>
    );
};

export default Rotm;
