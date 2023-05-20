import type { NextPage } from 'next';
import Head from 'next/head';
import Thought from '../components/thought';
import { ThoughtProps } from '../components/thought';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
    // keep track of a list of thoughts of type Thought as the state
    // ThoughtProps is thought: {id, createdAt, content}
    const [thoughts, setThoughts] = useState<ThoughtProps['thought'][]>([]);
    // useEffect is a hook that runs when the component is mounted
    // obtaining data from /api/thought, returned json with properties
    // id, createdAt, and content
    useEffect(() => {
        fetch('/api/thought')
            .then((response) => response.json())
            .then((data) => {
                setThoughts(data);
            });
    }, []);


    return (
        <div className="bg-white min-h-screen">
            <Head>
                <title>Sid&apos;s Stream</title>
                <meta name="description" content="Sid's Stream" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container mx-auto py-8">
                <div className="flex w-full justify-center">
                    <div className="w-1/2">
                        <h1 className="text-4xl font-bold text-black mb-6">Sid&apos;s Stream</h1>
                    </div>
                </div>
                {thoughts.slice().reverse().map((thought, index) => (
                    <Thought key={thoughts.length - index - 1} thought={thought} />
                ))}
            </div>
        </div>
    );
};

export default Home;

