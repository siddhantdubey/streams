import prisma from '../../lib/prisma';

export default async function assetHandler(req, res) {
    const { method } = req;

    switch (method) {
        case "GET":
            try {
                const thoughts = await prisma.thought.findMany();
                res.status(200).json(thoughts);
            } catch (e) {
                console.error("Request error", e);
                res.status(500).json({ error: "Error fetching thoughts" });
            }
            break;
        default:
            res.setHeader("Allow", ["GET"]);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
}
