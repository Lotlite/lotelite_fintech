import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';

export async function GET() {
    try {
        // Attempt to connect to MongoDB
        await connectDB();
        
        return NextResponse.json(
            { message: 'MongoDB connection successful' },
            { status: 200 }
        );
    } catch (error: any) {
        console.error('MongoDB connection test failed:', error);
        return NextResponse.json(
            { error: 'MongoDB connection failed', details: error.message },
            { status: 500 }
        );
    }
} 