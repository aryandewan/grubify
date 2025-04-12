import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Hero = () =>  {
    return (
        <section
            className="relative min-h-screen bg-[#141414] flex flex-col items-center justify-center"
        >
            <div className="absolute inset-0 z-0 border-10 border-[#a8742f]">
                <Image
                    src="/images/food-1.jpg"
                    alt="Background"
                    fill
                    className="object-cover object-center opacity-70"
                    priority
                    quality={85}
                />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center gap-5">
                <div className="flex flex-col items-center justify-center text-white">
                    <h1
                        className="text-4xl md:text-8xl xl:text-[10rem] xl:leading-none font-bold md:mb-4 text-center"
                    >
                        Simple and
                    </h1>
                    <h1
                        className="text-4xl md:text-8xl xl:text-[10rem] xl:leading-none font-bold mb-4 text-center"
                    >
                        Tasty Recipes
                    </h1>
                </div>

                <p className="text-sm md:text-lg mb-6 text-white text-center">
                    Turn your ingredients into delicious meals!
                </p>
                <Link
                    href="/generator"
                    className="border-t-4 border-b-4 border-[#a8742f] text-white px-6 py-3 hover:bg-[#141414] hover:border-l-4 hover:border-r-4 font-light"
                >
                    Try the Generator
                </Link>
            </div>
        </section>
    );
}

export default Hero;