import { Request, Response } from "express";
import UserModel from "../models/user";
import jwt from "jsonwebtoken"

export const getAll = async (req: Request, res: Response) => {
    const { email } = req.params;

};




