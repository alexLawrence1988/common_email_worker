const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.EMAIL_PASS
  }
});

module.exports = () => {
  this.sendEmail = (addr, msg, subject) => {
    return new Promise((resolve, reject) => {
      const mailOptions = {
        from: process.env.EMAIL_FROM, // sender address
        to: addr, // list of receivers
        subject: subject, // Subject line
        html: msg // plain text body
      };

      transporter.sendMail(mailOptions, function(err, info) {
        if (err) {
          console.log(err);
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });
  };
  return this;
};
