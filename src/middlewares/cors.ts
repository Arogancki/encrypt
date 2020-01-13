import _cors from "cors";
import { Application, Request, Response, NextFunction } from "express";

export function cors(app: Application) {
    return (req: Request, res: Response, next: NextFunction) => {
        const corsMiddleware = _cors();
        app.use((req: Request, res: Response, next: NextFunction) => {
            (corsMiddleware as Function)(req, res, next);
        });
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        if (req.method === "OPTIONS") {
            res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
            return res.sendStatus(200);
        }
        return next();
    };
}
