import { NextResponse } from "next/server";
import CardDetails from '@/data/cardDetails';

export async function GET() {
    return NextResponse.json(CardDetails);
} 