"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { getRecipeFromMistral } from '@/app/api/recipes/route';

// Predefined recipes with ingredients
const recipes = {
    'chicken-curry': { title: 'Spicy Chicken Curry', ingredients: ['chicken', 'curry powder', 'rice'] },
    'garlic-pasta': { title: 'Garlic Butter Pasta', ingredients: ['pasta', 'garlic', 'butter'] },
    'veggie-stirfry': { title: 'Veggie Stir Fry', ingredients: ['broccoli', 'carrots', 'soy sauce'] },
    'lemon-salmon': { title: 'Lemon Herb Salmon', ingredients: ['salmon', 'lemon', 'herbs'] },
};

export default function RecipePage() {
    const params = useParams();
    const { id } = params;
    const [recipe, setRecipe] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchRecipe() {
            const selectedRecipe = recipes[id] || { title: 'Recipe Not Found', ingredients: [] };
            try {
                const recipeMarkdown = await getRecipeFromMistral(selectedRecipe.ingredients);
                setRecipe(recipeMarkdown);
            } catch (err) {
                setError('Failed to generate recipe: ' + err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchRecipe();
    }, [id]);

    const selectedRecipe = recipes[id] || { title: 'Recipe Not Found', ingredients: [] };

    return (
        <div className="min-h-screen flex flex-col items-center py-12">
            <div className="max-w-2xl w-full">
                <h1 className="text-3xl font-bold mb-6">{selectedRecipe.title}</h1>
                {loading && <p className="text-gray-700">Generating recipe...</p>}
                {error && <p className="text-red-500">{error}</p>}
                {recipe && !loading && (
                    <ReactMarkdown
                        components={{
                            h1: ({ node, ...props }) => <h1 className="text-xl font-bold mt-4 mb-2" {...props} />,
                            h2: ({ node, ...props }) => <h2 className="text-xl font-semibold mt-3 mb-2" {...props} />,
                            h3: ({ node, ...props }) => <h3 className="text-3xl font-bold mt-2 mb-1" {...props} />,
                            h4: ({ node, ...props }) => <h4 className="text-xl font-bold mt-2 mb-1" {...props} />,
                            p: ({ node, ...props }) => <p className="mb-4 text-2xl font-light" {...props} />,
                            ul: ({ node, ...props }) => <ul className="text-xl list-disc list-inside mb-4" {...props} />,
                            ol: ({ node, ...props }) => <ol className="text-xl list-decimal list-inside mb-4" {...props} />,
                            strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
                            em: ({ node, ...props }) => <em className="italic" {...props} />,
                        }}
                    >
                        {recipe}
                    </ReactMarkdown>
                )}
                <Link href="/" className="mt-6 inline-block text-blue-500 hover:underline">
                    Back to Home
                </Link>
            </div>
        </div>
    );
}