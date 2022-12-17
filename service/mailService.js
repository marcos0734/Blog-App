const nodemailer = require ('nodemailer')
const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"harsh.bhawsar16@gmail.com",
        pass:"ezeiojionriicffr"
    }

})

module.export