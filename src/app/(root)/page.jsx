"use client";

import { useState } from "react";
import {getRecipeFromMistral} from '@/app/api/recipes/route'
import Recipe from "@/components/Recipe";
import {Button} from "@/components/Button";

export default function Home() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");
  const [error, setError] = useState(false);

  const ingredientsList = ingredients.map((ingredient, index) => (
      <h1 key={index} className="text-3xl font-bold mb-6 text-black">{ingredient}</h1>
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
      <div className="min-h-screen bg-gray-100 text-black flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-6">Recipe Generator</h1>

        <form action={handleSubmit} className="w-full max-w-md mb-8">
          <input
              type="text"
              name="ingredient"
              autoComplete="off"
              required
              placeholder="Enter ingredients (e.g., chicken, rice)"
              className="w-full p-3 rounded-lg border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button type={`submit`} text={`Add Ingredients`}/>
        </form>

        {error && <p className="text-red-500">{error}</p>}

        {ingredientsList}

        <Button type={`submit`} onClick={getRecipe} text={`Show Recipe`}/>

        {recipe && (
            <Recipe recipe={recipe} />
        )}
      </div>
  );
}