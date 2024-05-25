import { Schema, model } from "mongoose";

const userSchema = new Schema({
    firstname: {type: String, require : true},
    lastname: {type: String, require : true},
    email: {type: String, require : true},
    logincode: {type: String, length : 6, require : true},
    roles:{type:{
        admin: Boolean,
        seller: Boolean,
        },require: true
    },
})

export default model("User", userSchema, "users")