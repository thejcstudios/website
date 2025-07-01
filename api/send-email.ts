import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phoneNumber, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Please fill in all required fields.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtpout.secureserver.net',
      port: 465,
      secure: true, // SSL
      auth: {
        user: process.env.EMAIL_USER, // your full email address
        pass: process.env.EMAIL_PASS, // your email password or app password
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,    // from the website user
      to: process.env.EMAIL_TO,        // your email address (recipient)
      subject,
      html: `
        <h3>New message from website contact form</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber || 'N/A'}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
