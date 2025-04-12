import React from 'react'
import ReactMarkdown from "react-markdown";

const Recipe = ({recipe}) => {
    return (
        <div className="mt-6 w-full">
            <h1 className="text-3xl font-bold mb-6">Recipe</h1>
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
        </div>
    )
}
export default Recipe
