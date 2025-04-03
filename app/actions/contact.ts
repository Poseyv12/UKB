'use server'

import { Resend } from 'resend';
import { z } from 'zod';
import fs from 'fs';
import path from 'path';

if (!process.env.RESEND_API_KEY) {
  throw new Error('Missing RESEND_API_KEY environment variable');
}

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  services: z.array(z.string()).min(1, {
    message: "Please select at least one service.",
  }),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export async function sendContactEmail(data: ContactFormData) {
  try {
    const validatedData = contactSchema.parse(data);

    // Read the email template
    const templatePath = path.join(process.cwd(), 'app/emails/contact-template.html');
    let emailHtml = fs.readFileSync(templatePath, 'utf8');

    // Replace placeholders with actual data
    emailHtml = emailHtml
      .replace('{{name}}', validatedData.name)
      .replace('{{email}}', validatedData.email)
      .replace('{{services}}', validatedData.services.join(', '))
      .replace('{{message}}', validatedData.message);

    const { error } = await resend.emails.send({
      from: 'Ultimate Kitchen & Bath <contact@reflectingchristdaily.com>',
      to: ['poseyv12@gmail.com'],
      subject: 'New Contact Form Submission',
      html: emailHtml,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return { 
        success: false, 
        error: 'Failed to send email. Please try again later.' 
      };
    }

    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { 
        success: false, 
        error: 'Invalid form data',
        details: error.errors 
      };
    }
    
    console.error('Error sending email:', error);
    return { 
      success: false, 
      error: 'Failed to send email. Please try again later.' 
    };
  }
} 