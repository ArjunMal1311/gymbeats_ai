import { auth } from "@clerk/nextjs/server";
import { db } from "./db";

export const fetchRecommendations = async () => {
    const { userId } = auth();

    if (!userId) {
        return null;
    }

    const data = await db.recommendation.findMany({
        where:{
            userId: userId
        }
    })

    return data
}