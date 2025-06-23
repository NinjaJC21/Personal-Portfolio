import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
const route = {
    email: 'api/email'
};
export async function POST(req) {
    const { name, email, message, budget } = await req.json();
    if (!name || !email || !message || !budget) {
        return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
    }
    await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>',
        to: ['jaysprojects2025@gmail.com', 'jaysprojects021@gmail.com'],
        subject: `New Contact Request from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nBudget: ${budget}\n\n${message}`,
    });
    return new Response(JSON.stringify({ message: 'Email sent' }), { status: 200 });
}
export default route;
