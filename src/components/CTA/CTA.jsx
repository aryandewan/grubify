import React from 'react'
import Link from "next/link";
import Image from "next/image";

const Cta = () => {
    return (
        <section className="relative bg-[#141414] flex flex-col items-center justify-center py-15 text-white">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/food-6.jpg"
                    alt="Background"
                    fill
                    className="object-cover object-center opacity-40"
                    priority
                />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center gap-5">
                <h2 className="text-3xl font-bold mb-4">Ready to Cook Something Amazing?</h2>
                <p className="text-lg mb-6 font-light">Use our generator or explore our curated recipes!</p>
                <div className="space-x-4">
                    <Link href="/generator" className="border-t-4 border-b-4 border-[#a8742f] text-white px-6 py-3 hover:bg-[#141414] hover:border-l-4 hover:border-r-4 font-light">
                        Start Generating
                    </Link>
                </div>
            </div>
        </section>
    )
}
export default Cta
