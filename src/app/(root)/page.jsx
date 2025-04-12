import React from 'react'
import Hero from "@/components/Hero";
import Best from "@/components/BestRecipes/Best";
import Rotm from "@/components/RecipeOfTheMonth/RotmContent";
import Review from "@/components/Reviews/Review";
import Cta from "@/components/CTA/CTA";

const bestRecipes = [
    {
        id: 'chicken-curry',
        title: 'Spicy Chicken Curry',
        img: "/images/food-3.jpg",
        ingredients: ['chicken', 'curry powder', 'rice']
    },
    {
        id: 'garlic-pasta',
        title: 'Garlic Butter Pasta',
        img: "/images/food-4.jpg",
        ingredients: ['pasta', 'garlic', 'butter']
    },
    {
        id: 'veggie-stirfry',
        title: 'Veggie Stir Fry',
        img: "/images/food-5.jpg",
        ingredients: ['broccoli', 'carrots', 'soy sauce'] },
];

const recipeOfTheMonth = {
    id: 'lemon-salmon',
    title: 'Lemon Herb Salmon',
    src: "/images/food-2.jpg",
    ingredients: ['Salmon', 'Lemon', 'Herbs'],
    description: "Lemon herb salmon is a light, flavorful dish featuring salmon fillets baked or grilled with a zesty mix of lemon juice, garlic, and fresh herbs like dill or parsley. Perfectly tender with a bright, aromatic finish."
};

const testimonials = [
    {
        name: 'Sarah M.',
        image: '/images/chef-4.jpg',
        quote: 'This generator saved my dinner plans! So easy to use.'
    },
    {
        name: 'John D.',
        image: '/images/chef-2.jpg',
        quote: 'I love the creative recipes it comes up with!'
    },
    {
        name: 'Emily R.',
        image: '/images/chef-3.jpg',
        quote: 'Perfect for using up whatever is in my fridge.'
    },
];
const Home = () => {
    return (
        <main className="min-h-screen text-black bg-[#141414] w-full gap-0 overflow-x-hidden">
            <Hero/>
            <Rotm recipeOfTheMonth={recipeOfTheMonth}/>
            <Best bestRecipes={bestRecipes} />
            <Review testimonials={testimonials} />
           <Cta/>
        </main>
    );
}

export default Home;