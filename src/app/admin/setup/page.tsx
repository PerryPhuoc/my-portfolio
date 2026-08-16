// import { generateURI } from "otplib";
// import QRCode from "qrcode";

// export default async function SetupPage() {
//   const secret = process.env.PORTFOLIO_TOTP_SECRET;

//   if (!secret) {
//     return (
//       <main>
//         <h1>TOTP Setup</h1>
//         <p>PORTFOLIO_TOTP_SECRET is not configured.</p>
//       </main>
//     );
//   }

//   const uri = generateURI({
//     issuer: "PVP Portfolio",
//     label: "Owner",
//     secret,
//   });

//   const qrCode = await QRCode.toDataURL(uri);

//   return (
//     <main>
//       <h1>TOTP Setup</h1>

//       <p>
//         Scan this QR code with your authenticator app.
//       </p>

//       <img src={qrCode} alt="PVP Portfolio TOTP setup QR code" />

//       <p>
//         After scanning, your authenticator should generate a
//         6-digit code for PVP Portfolio.
//       </p>
//     </main>
//   );
// }