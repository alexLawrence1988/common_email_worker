const router = require("express").Router();
const emailHelper = require("../helpers/emailHelper")();

router.get("/send", async (req, res) => {
  const to = req.query.to;
  const subject = req.query.subject;
  const text = req.query.text;

  const result = await emailHelper.sendEmail(to, text, subject);

  res
    .status(result ? 200 : 500)
    .send(result ? "Email sent." : "An error occured sending email");
});

router.get("/techpulse/send", async (req, res) => {
  const to = "alexjlawrence88@gmail.com";
  const subject = "techpulse enquiry";
  const text = `Enquiry from ${req.query.email}: ${req.query.message}`;

  const result = await emailHelper.sendEmailTechPulse(to, text, subject);

  res
    .status(result ? 200 : 500)
    .send(result ? "Email sent." : "An error occured sending email");
});

module.exports = router;
