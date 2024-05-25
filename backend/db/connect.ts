import mongoose from "mongoose"
import UserModel from "../models/user";


async function connectDB(){
    if(!process.env.MONGODB_URL){
        throw new Error("Falta la variable de entorno MONGODB_URL")
    }
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Conexion exitosa con la DB");
       // const newUser = new UserModel({
         //   firstname: "Facundo",
           // lastname: "Picia",
            //email: "facundopicia@gmail.com",
            //logincode:"0000",
            //roles: {
            //    admin: true, 
            //    seller: true
            //},
        //})
        //await newUser.save()
    }catch(error){
        console.log("Error al conectarse a la DB", error); 
    }
    
}


export default connectDB