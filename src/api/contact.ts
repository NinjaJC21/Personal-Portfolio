// api/contact.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request): Promise<Response> {
  try {
    const body = await req.json();
    const { name, email, message, budget } = body;

    if (!name || !email || !message || !budget) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), {
        status: 400,
      });
    }

    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['jaysprojects2025@gmail.com', 'jaysprojects021@gmail.com'],
      subject: `New Contact Request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nBudget: ${budget}\nMessage: ${message}`,
    });

    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Email send failed:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    });
  }
}
