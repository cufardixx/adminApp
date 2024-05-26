import nodemailer from "nodemailer"

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  

  interface EmailParams {
    to: string
    subject: string
    html: string
  }

  const sendEmail =async ({to,subject,html}: EmailParams) => {
    try{
        const result = await transporter.sendMail({
            from:"Company <facundpicia@gmail.com>",
            to,
            subject,
            html,
        })
        console.log({result});
        
        return {ok:true, message: "Mail enviado con exito!"}
    }catch(error){
        console.log({error});
        return{
            ok:false,
            message: "Error con el envi del mail",
            err: error,}
        }
  }

  export default sendEmail