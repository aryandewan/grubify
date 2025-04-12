"use client"

import React, {useState} from 'react'
import {getRecipeFromMistral} from "@/app/api/recipes/route";
import {Button} from "@/components/Button";
import Recipe from "@/components/Recipe";
import { RxCross1 } from "react-icons/rx";

const Chef = () => {
    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe] = useState("");
    const [error, setError] = useState(false);

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }

    const handleSubmit = (formData) => {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    const handleRemove = (ingredientToRemove) => {
        setIngredients(prevIngredients =>
            prevIngredients.filter(ingredient => ingredient !== ingredientToRemove)
        )
    }

    const ingredientsList = ingredients.map((ingredient, index) => (
        <li key={index} className="text-xl flex items-center justify-between w-full">
            {ingredient}
            <RxCross1 className="cursor-pointer" onClick={() => {handleRemove(ingredient)}}/>
        </li>
    ))


    return (
        <section className="min-h-screen w-full bg-[#141414] flex items-center justify-center">
            <div className="min-h-screen text-[#a8742f] flex flex-col items-center p-4 w-full xl:w-1/2">
                <h1 className="text-3xl xl:text-5xl font-bold mb-6 text-white">Recipe Generator</h1>

                <form action={handleSubmit} className="w-full mb-8 flex gap-5 flex-col md:flex-row">
                    <input
                        type="text"
                        name="ingredient"
                        autoComplete="off"
                        required
                        placeholder="Enter ingredients (e.g., chicken, rice)"
                        className="w-full md:w-2/3 p-3 rounded-lg border border-[#a8742f] text-white focus:outline-none"
                    />
                    <Button type={`submit`} text={`Add Ingredients +`} containerClass={`md:w-1/3 w-full`}/>
                </form>

                {error && <p className="text-red-500">{error}</p>}

                <ul className="mb-5 self-start w-full list-disc list-inside">
                    {ingredientsList}
                </ul>


                <Button type={`submit`} onClick={getRecipe} text={`Show Recipe`} containerClass={`w-full`}/>

                {recipe && (
                    <Recipe recipe={recipe} />
                )}
            </div>
        </section>
    );
}
export default Chef
