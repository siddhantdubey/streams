import type { NextPage } from 'next';
import Head from 'next/head';
import Thought from '../components/thought';

const Home: NextPage = () => {
    const thoughts = [
        {
            createdAt: '2023-05-01T09:30:00',
            content: 'This is my first thought wow!',
        },
        {
            createdAt: '2023-05-01T10:15:00',
            content: 'Another thought in my stream.',
        },
    ];

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
                {thoughts.map((thought, index) => (
                    <Thought key={index} thought={thought} />
                ))}
            </div>
        </div>
    );
};

export default Home;

