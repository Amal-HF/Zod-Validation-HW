import { NextFunction, Request, Response } from 'express';
import { AnyZodObject, ZodError } from 'zod';

const validate = (schema: AnyZodObject) => 
    (req:Request, res:Response, next:NextFunction) => {
        try {
            schema.parse({
                body: req.body,
                params: req.params,
                query: req.query,
                headers: req.headers
            });
            next();
        } catch (err) {
            const ZodError = err as ZodError;
            return res.status(400).json({
                // message: ZodError.errors //i can write it like this but its will be hard for front end
                message: ZodError.errors[0].message
            });
        }
    };

    export default validate;