"use client"

import React, {useState} from 'react'
import {getRecipeFromMistral} from "@/app/api/recipes/route";
import {Button} from "@/components/Button";
import Recipe from "@/components/Recipe";

const Chef = () => {
    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe] = useState("");
    const [error, setError] = useState(false);

    const ingredientsList = ingredients.map((ingredient, index) => (
        <li key={index} className="text-xl text-black">{ingredient}</li>
    ))

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }

    const handleSubmit = (formData) => {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <section className="min-h-screen w-full bg-white flex items-center justify-center">
            <div className="min-h-screen bg-white text-black flex flex-col items-center p-4 w-1/2">
            <h1 className="text-3xl font-bold mb-6">Recipe Generator</h1>

            <form action={handleSubmit} className="w-full mb-8 flex gap-5">
                <input
                    type="text"
                    name="ingredient"
                    autoComplete="off"
                    required
                    placeholder="Enter ingredients (e.g., chicken, rice)"
                    className="w-2/3 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button type={`submit`} text={`Add Ingredients +`} containerClass={`w-1/3`}/>
            </form>

            {error && <p className="text-red-500">{error}</p>}

            <ul className="mb-5 self-start w-1/2 list-disc list-inside">
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
