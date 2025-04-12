import React from 'react'

export const Button = ({text, type, onClick, containerClass}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`cursor-pointer border-t-4 border-b-4 border-[#a8742f] text-white px-6 py-3 hover:bg-[#141414] hover:border-l-4 hover:border-r-4 font-light ${containerClass}`}
        >
            {text}
        </button>
    )
}
