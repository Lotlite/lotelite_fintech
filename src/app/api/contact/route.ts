import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Contact from '@/models/Contact';

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create new contact entry
    const contact = await Contact.create({
      name,
      email,
      message
    });

    return NextResponse.json(
      { message: 'Contact form submitted successfully', contact },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to submit contact form' },
      { status: 500 }
    );
  }
} 