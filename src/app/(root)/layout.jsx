import React from 'react'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
    return (
        <main className="flex flex-col items-center justify-center">
            <Header containerClass={`fixed`}/>
            {children}
            <Footer />
        </main>
    );
}