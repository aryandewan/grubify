import React from 'react'
import Image from "next/image";
import ReviewWrapper from "@/components/Reviews/ReviewWrapper";

const Review = ({testimonials}) => {
    return (
        <ReviewWrapper>
            <section id="review" className="py-10 w-full xl:h-dvh flex flex-col items-center justify-start gap-5 lg:py-0">
                <div className="h-[200px] xl:h-1/2 flex items-center justify-center w-full relative">
                    <Image
                        src="/images/chef.jpeg"
                        alt="chef"
                        width="1000"
                        height="1000"
                        className="object-cover object-bottom w-full h-full absolute z-0"
                        quality="100"
                    />
                    <div className="absolute top-0 left-0 z-10 w-full h-full bg-black opacity-60"/>
                    <div className="h-full w-full flex flex-col gap-5 items-center justify-center relative z-10 text-white">
                        <p className="text-xs xl:text-5xl translate-y-[100%] opacity-0 upper-review">
                            "A modern method that will make your mouth water"
                        </p>
                        <h1 className="text-sm xl:text-2xl font-light upper-author opacity-0 translate-y-[100%]">Patrick Bossman - Head Chef XYZ</h1>
                    </div>
                </div>
                <div className="h-1/2 w-full flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center xl:flex-row gap-5 w-4/5 xl:w-1/2 h-full">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="text-center w-full xl:w-1/3 h-full space-y-4">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    width="1000"
                                    height="1000"
                                    className="object-cover object-center w-full h-[75%]"
                                />
                                <div className="flex flex-col items-start justify-center text-white gap-4">
                                    <p className="font-semibold text-3xl text-[#a8742f]">{testimonial.name}</p>
                                    <p className="text-left font-light">{testimonial.quote}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </ReviewWrapper>
    )
}
export default Review
