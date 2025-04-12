import { NextResponse } from "next/server";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const ingredients = searchParams.get("ingredients");

    if (!ingredients) {
        return NextResponse.json({ error: "Ingredients are required" }, { status: 400 });
    }

    const apiKey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=6&apiKey=${apiKey}`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch recipes" }, { status: 500 });
    }
}