import { NextResponse } from "next/server";
import { verify } from "otplib";

export async function POST(request: Request) {
    try {
        const { code } = await request.json();

        if (typeof code !== "string" || !/^\d{6}$/.test(code)) {
        return NextResponse.json(
            { success: false, message: "Invalid code format." },
            { status: 400 }
        );
        }

        const secret = process.env.PORTFOLIO_TOTP_SECRET;

        if (!secret) {
        return NextResponse.json(
            { success: false, message: "TOTP is not configured." },
            { status: 500 }
        );
        }

        const result = await verify({
        secret,
        token: code,
        });

        if (!result.valid) {
        return NextResponse.json(
            { success: false, message: "Invalid or expired code." },
            { status: 401 }
        );
        }

        return NextResponse.json({
        success: true,
        message: "TOTP verified.",
        });
    } catch {
        return NextResponse.json(
        { success: false, message: "Invalid request." },
        { status: 400 }
        );
    }
}