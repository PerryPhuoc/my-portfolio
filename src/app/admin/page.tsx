"use client";

import { useState } from "react";

export default function AdminPage() {
    const [code, setCode] = useState("");

    return (
        <main>
        <h1>Owner Access</h1>

        <p>Enter your 6-digit authenticator code.</p>

        <input
            type="text"
            inputMode="numeric"
            maxLength={6}
            value={code}
            onChange={(event) => setCode(event.target.value)}
            placeholder="000000"
        />

        <button type="button">
            Verify
        </button>
        </main>
    );
}