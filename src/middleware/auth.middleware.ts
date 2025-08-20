import { Request, Response, NextFunction } from "express";
import { prismaClient } from "../application/database";
import { UserRequest } from "../type/user-request";

export const authMiddleware  = async (req: UserRequest, res: Response, next: NextFunction) => {
    const token = req.get('X-API-TOKEN');

    if (!token) {
        res.status(401).json({
            errors: "Unauthorized"
        });
        return;
    }

    try {
        const user = await prismaClient.user.findFirst({
            where: {
                token: token
            }
        });

        if (!user) {
            res.status(401).json({
                errors: "Unauthorized"
            });
            return;
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Authentication error:", error);
        res.status(500).json({
            errors: "Internal Server Error"
        });
        return;
    }
}