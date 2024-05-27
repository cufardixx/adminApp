import { Request, Response } from "express";
import sendEmail from "../helpers/mailer";
import UserModel from "../models/user";
import generarCodigoDeValidacion from "../helpers/generadorCode";
import jwt from "jsonwebtoken"

export const login = async (req: Request, res: Response) => {
    const { email } = req.params;
    const { code } = req.body;

    try {
        const user = await UserModel.findOne({ email, logincode: code });

        if (!user) {
            return res.status(400).json({ ok: false, message: "Credenciales inválidas" });
        }

        return res.status(200).json({ ok: true, message: "Inicio de sesión correcto" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ ok: false, message: "Error interno del servidor" });
    }
    res.cookie("JWT", process.env.TOKEN_SECRET)
};




export const generateCode = async (req: Request, res: Response) => {
    const { email } = req.params;

    try {
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(400).json({ ok: false, message: "Usuario no encontrado" });
        }

        const code = generarCodigoDeValidacion();
        user.logincode = code;
        await user.save();

        await sendEmail({ to: email, subject: `Este es tu código: ${code}`, html: `Código para ingresar: ${code}` });

        return res.status(200).json({ ok: true, message: "Código enviado" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ ok: false, message: "Error interno del servidor" });
    }
};
