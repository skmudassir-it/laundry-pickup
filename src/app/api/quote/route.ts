import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // In production, you would save this to a database or send an email.
    // For now, we just acknowledge receipt.
    console.log("Quote request received:", body);

    return NextResponse.json({
      success: true,
      message: "Quote request received. We'll get back to you within the hour!",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }
}
