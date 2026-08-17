import { SignJWT, jwtVerify } from "jose";

const SESSION_COOKIE = "pvp_admin_session";

function getSessionSecret() {
  const secret = process.env.PORTFOLIO_SESSION_SECRET;

  if (!secret) {
    throw new Error("PORTFOLIO_SESSION_SECRET is not configured.");
  }

  return new TextEncoder().encode(secret);
}

export async function createSession() {
  return new SignJWT({
    authenticated: true,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1d")
    .sign(getSessionSecret());
}

export async function verifySession(token: string) {
  try {
    const { payload } = await jwtVerify(
      token,
      getSessionSecret()
    );

    return payload.authenticated === true;
  } catch {
    return false;
  }
}

export { SESSION_COOKIE };