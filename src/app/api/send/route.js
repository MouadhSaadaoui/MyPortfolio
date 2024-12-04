import { NextResponse } from 'next/server';
import { Resend } from 'resend'; // Import Resend

// Initialize Resend with your API key
const resend = new Resend('re_iM8kD5Je_3s3pmVXuRdnq8qAWM9rQ987i'); // Replace with your Resend API key

const toEmail = 'saadaoui.mouadh@esprit.tn'; // The email address where you want to receive the message

export async function POST(req) {
  // Get form data from the request body
  const { email, subject, message } = await req.json();
  console.log("Received data:", email, subject, message);

  try {
    // Send the email using Resend API
    const data = await resend.sendEmail({
      from: email, // Use the sender's email address (dynamic)
      to: [toEmail], // Send the email to your email address
      subject: subject,
      html: `
        <h1>${subject}</h1>
        <p>New message submitted:</p>
        <p>${message}</p>
        <p>From: ${email}</p> <!-- Include the sender's email in the body -->
      `, // Use HTML content instead of React JSX
    });

    // Return a response indicating success
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);

    // Return an error response
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to send email.",
      },
      { status: 500 } // Server error
    );
  }
}
