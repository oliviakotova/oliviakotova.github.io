import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail", // Use appropriate service
      auth: {
        user: process.env.EMAIL_USER, // Email account
        pass: process.env.EMAIL_PASS, // Email password or app-specific password
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Your email where the form data will be sent
      subject: `Message from ${name}`,
      text: message,
      html: `<p>Message from: ${name}</p><p>Email: ${email}</p><p>${message}</p>`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
      res.status(500).json({ error: "Failed to send the message." });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
