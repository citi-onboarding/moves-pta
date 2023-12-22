// pages/api/sendEmail.js

import nodemailer from 'nodemailer';

export default async function handler(req : any, res : any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, phone, message } = req.body;

  // Create a Nodemailer transporter
  let transporter = nodemailer.createTransport({
    /* Configure your email service here (SMTP, etc.) */
    service: 'gmail',
    auth: {
      user: 'felipe.torres@citi.org.br',
      pass: 'Fetoma10!',
    },
  });

  // Email content
  const mailOptions = {
    from: 'felipe.torres@citi.org.br',
    to: 'ftm2@cin.ufpe.br',
    subject: 'New Contact Form Submission',
    html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Message: ${message}</p>
    `,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Email sent');
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Error sending email' });
  }
}
