import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USER_EMAIL,
      pass:  process.env.USER_PASSWORD
    }
  });
  

export async function sendEmail(email, transactionId) {
    try {
        const mailOptions = {
            from:  process.env.USER_EMAIL,
            to: email,
            subject: 'points transfere',
            text: `you got new points please click on this link ${process.env.API_BASE_URL}/api/transfere/accept/${transactionId} 
            within 10 mins to get your points` 
        }; 
        await transporter.sendMail(mailOptions);
    } catch (error) {
        throw error;
    }
} 