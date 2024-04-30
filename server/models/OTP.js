const mongoose = require("mongoose");
const emailTemplate = require("../email/otpVerificationTemplate")
const mailSender = require("../utils/mailSender")

const OTPSchema = new mongoose.Schema({
  useremail: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60 * 5, // The document will be automatically deleted after 5 minutes of its creation time
  },
});

async function sendVerificationEmail(useremail, otp) {
  try {
    const mailResponse = await mailSender(
      useremail,
      "Verification Email",
      emailTemplate(otp)
    );
    console.log("Email sent successfully: ", mailResponse.response);
  } catch (error) {
    console.log("Error occurred while sending email: ", error);
    throw error;
  }
}

OTPSchema.pre("save", async function (next) {
  console.log("New document saved to database");

  // Only send an email when a new document is created
  if (this.isNew) {
    await sendVerificationEmail(this.useremail, this.otp);
  }
  next();
});

const OTP = mongoose.model("OTP", OTPSchema);

module.exports = OTP;
