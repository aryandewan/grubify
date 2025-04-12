 # Grubify

Welcome to the Grubify – a web application that lets you create mouthwatering recipes with just the ingredients you have on hand. Powered by AI and crafted with love using modern web technologies, this app is your new go-to kitchen companion.

___

# What does it do?

This website allows users to:

- 🥕 Input ingredients they currently have at home.

- 🤖 Generate a recipe using advanced AI models via HuggingFace.

- 📱 Browse a landing page featuring:

- ✅ Call-to-Action (CTA) sections to jump right into the generator.

- 🏆 Recipe of the Month – a spotlight dish to inspire your culinary adventure.

- 🔝 Best of the Generator – a selection of top fake-but-fun recipes (for flavor, not facts).

- 🌍 Reviews by Chefs – fictional feedback from renowned chefs across the globe, just for fun.

This isn't just a tool—it’s an interactive and engaging experience meant to spark creativity in your cooking journey.

___

# Tech Stack

- **Next.js**:	Server-side rendering, routing, app core
- **React.js**:	UI components, state management
- **Tailwind CSS**:	Styling with utility-first CSS
- **GSAP**:	Animations, especially scroll-based ones
- **HuggingFace API**:	AI model to generate recipes

___

# How it work's

- Navigate to the homepage.

- Click any of the CTAs to go to the recipe generator.

- Type in your ingredients (e.g., "chicken, onion, garlic").

- Click Generate Recipe.

- Watch the magic unfold—your personalized recipe appears in seconds.

The generator takes your input, sends it to the AI model on HuggingFace, and receives a custom recipe based on your ingredients.

___

# Feature Highlights

- ✨ Clean, minimal UI with responsive design

- 🧭 Smooth scrolling and pinning animations via GSAP

- 🔄 Instant AI feedback on your pantry’s potential

- 🎭 Creative fake content that mimics real-world interactions and feedback

- 📲 Mobile-friendly, built with Tailwind for full responsiveness

___

# API Integration

This app uses a HuggingFace model to generate recipes from text prompts.

If you plan to clone or fork this project:

- Create a HuggingFace account

- Get your API key

- Replace the placeholder in the .env.local or API utility file

___

# Future Enhancements

- Save and share recipes

- Rate AI-generated recipes

- Add dietary filters (vegan, gluten-free, etc.)

- Integrate real chef reviews or user feedback