import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USER_EMAIL,
      pass:  process.env.USER_PASSWORD
    }
  });
  

export async function sendEmail(email, points) {
    try {
        const mailOptions = {
            from:  process.env.USER_EMAIL,
            to: email,
            subject: 'points transfere',
            text: `you've received new points: ${points}` 
        }; 
        await transporter.sendMail(mailOptions);
    } catch (error) {
        throw error;
    }
} 