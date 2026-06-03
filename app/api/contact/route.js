import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  const { firstName, lastName, email, company, jobTitle, message } = await request.json()

  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: process.env.RESEND_TO_EMAIL,
      subject: `New message from ${firstName} ${lastName}`,
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || '-'}</p>
        <p><strong>Job title:</strong> ${jobTitle || '-'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 })
  }
}