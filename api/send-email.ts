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
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Send the message to yourself
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO,
      subject,
      html: `
        <h3>New message from website contact form</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber || 'N/A'}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    // 2. Send auto-reply to user
    await transporter.sendMail({
      from: `"The JC Studios" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'We received your message',
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for contacting <strong>The JC Studios</strong>.</p>
        <p>We’ve received your message:</p>
        <blockquote style="border-left: 4px solid #ccc; padding-left: 10px; color: #555;">
          ${message}
        </blockquote>
        <p>Our team will get back to you shortly.</p>
        <p>For quicker assistance, feel free to reach out at +639950371821.</p>
        <br/>
        <p>Warm regards,<br/>The JC Studios Team</p>
        <p style="font-size: 0.8rem; color: #888;">This is an automated response. Please do not reply directly to this email.</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
