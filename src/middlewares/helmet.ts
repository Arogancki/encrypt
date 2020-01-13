import { Request, Response, NextFunction, Application } from "express";
import _helmet from "helmet";

export const helmet = (app: Application) =>
    function helmet(req: Request, res: Response, next: NextFunction) {
        app.use((req: Request, res: Response, next: NextFunction) => {
            (_helmet as Function)(req, res, next);
        });
        app.disable(`x-powered-by`);
        app.set(`trust proxy`, 1);
        next();
    };
