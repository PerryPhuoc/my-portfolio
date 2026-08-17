"use client";

import { useState } from "react";

export default function AdminPage() {
    const [code, setCode] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleVerify() {
        setLoading(true);
        setMessage("");

        try {
        const response = await fetch("/api/auth/verify", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ code }),
        });

        const data = await response.json();

        setMessage(data.message);
        } catch {
        setMessage("Something went wrong.");
        } finally {
        setLoading(false);
        }
    }

    return (
        <main>
        <h1>Owner Access</h1>

        <p>Enter your 6-digit authenticator code.</p>

        <input
            type="text"
            inputMode="numeric"
            maxLength={6}
            value={code}
            onChange={(event) =>
            setCode(event.target.value.replace(/\D/g, ""))
            }
            placeholder="000000"
        />

        <button
            type="button"
            onClick={handleVerify}
            disabled={loading || code.length !== 6}
        >
            {loading ? "Verifying..." : "Verify"}
        </button>

        {message && <p>{message}</p>}
        </main>
    );
}