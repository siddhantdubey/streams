import React from 'react';
import ReactMarkdown from 'react-markdown';

export interface ThoughtProps {
    thought: {
        id: string;
        createdAt: string;
        content: string;
    };
}

const Thought: React.FC<ThoughtProps> = ({ thought }) => {
    const date = new Date(thought.createdAt);

    const formattedDate = `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
    return (
        <div className="flex w-full justify-center">
            <div className="w-1/2">
                <div className="flex flex-row justify-start items-center mb-4">
                    <div className="text-gray-500 text-lg">{formattedDate}</div>
                    <div className="text-black text-lg ml-4">
                        <ReactMarkdown className="prose">
                            {thought.content}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Thought;
