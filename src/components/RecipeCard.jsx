import React from 'react'
import Link from "next/link";
import Image from "next/image";

const RecipeCard = ({recipe}) => {
    return (
        <div className="shadow-md text-center relative group min-h-full best-card">
            <Image
                src={recipe.img}
                alt={recipe.title}
                width="1000"
                height="1000"
                className="w-full object-cover object-center h-full"
            />
            <div className="absolute top-0 left-0 z-10 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-200 ease-in-out pointer-events-auto max-xl:opacity-50" />
            <div className="absolute top-0 left-0 z-20 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out flex flex-col justify-center items-center px-4 text-center pointer-events-none group-hover:pointer-events-auto text-white gap-5 max-xl:opacity-100">
                <h3 className="text-2xl lg:text-4xl font-semibold">{recipe.title}</h3>
                <Link href={`/recipes/${recipe.id}`} className="border-t-5 border-b-5 border-[#a8742f] text-white px-6 py-3 hover:border-l-5 hover:border-r-5 hover:bg-[#141414] font-light">
                    Generate Recipe
                </Link>
            </div>
        </div>
    )
}
export default RecipeCard
