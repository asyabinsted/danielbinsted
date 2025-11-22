import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Lazy initialization to avoid build-time errors
function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new Resend(apiKey);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message, senderEmail } = body;

    // Validate input
    if (!message || !senderEmail) {
      return NextResponse.json(
        { error: 'Message and email are required' },
        { status: 400 }
      );
    }

    // Initialize Resend client at runtime
    const resend = getResendClient();
    if (!resend) {
      console.error('RESEND_API_KEY is not set in environment variables');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Email configuration
    const recipientEmail = 'daniel.binsted@gmail.com';
    const subject = `New message from ${senderEmail}`;
    const emailBody = `
You have received a new message through your portfolio website.

From: ${senderEmail}

Message:
${message}

---
This message was sent via your portfolio contact form.
    `.trim();

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: recipientEmail,
      subject: subject,
      text: emailBody,
      replyTo: senderEmail,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}

