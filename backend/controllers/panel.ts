import { Request, Response } from "express";
import UserModel from "../models/user";
import jwt, { JsonWebTokenError } from "jsonwebtoken"

export const getAll = async (req: Request, res: Response) => {
    
    const token = req.cookies.jwt

    try {
        const user = jwt.verify(token, process.env.TOKEN_SECRET as string)
        res.status(200).json({ok:true, message: []})
        console.log({user});
        
    } catch (error) {
        if(error instanceof JsonWebTokenError){
            console.log({name: error.name, mesasage: error.message});
            return res.status(401).json({ok:false, message: "zczxczsc"})
        }
    }   res.status(500).json({ok:false, message: "server fail"})

    

};




