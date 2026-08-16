// import { NextResponse } from "next/server";
// import { generateURI } from "otplib";
// import QRCode from "qrcode";

// export async function GET() {
//     const secret = process.env.PORTFOLIO_TOTP_SECRET;

//     if (!secret) {
//         return NextResponse.json(
//         { error: "TOTP secret is not configured." },
//         { status: 500 }
//         );
//     }

//     const uri = generateURI({
//         issuer: "PVP Portfolio",
//         label: "Owner",
//         secret,
//     });

//     const qrCode = await QRCode.toDataURL(uri);

//     return NextResponse.json({
//         qrCode,
//     });
// }