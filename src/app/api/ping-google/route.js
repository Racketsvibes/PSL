import jwt from 'jsonwebtoken';

const KEY = `-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDZXSm/3y9h1kp2\nHqaC8BTc+sWVFhDBc/xSUucWy0Ww8HtvR97OmnYxu1fQGGmCZH7faX5qSOTqL6AP\nZFUisPgSNabXiuJl09ghhESa90iNpKF7MHEKmAS7abM4zZTEFYSluF7hSqLubieT\ns1EV3p40zGp5UuC7Rf45QlX1KiQhlAnmhWK7t8lvRbcG15xPlXmHj5TFKgj4qB5G\nJtCjLQ6jE8JV6OTRJoF6/FCA4YIqNu+KmN2+3VQ9SbDEUPMCHHttBhs5szC/DVRh\nOTe9gQdssSI1neVJcDNwYlLwOu6xwuqKRTfI8BZsK27pSHpENzxYvPn/3jrVwXUV\n4BExXI7FAgMBAAECggEABICbBEfttdOYAEFbRpwNepRRMmjeGPu7jsL72WuFeohI\nrkHpWhM1/oq4Y22WBebp/9uyDCaNY1JwONFluA29XbcxyQYt8VkFgZA5UZJstM5j\nr+cNeGA0vOMQHM2ZVsRxVnNut7Dxlgm/FR6iP9c4JLTVQcUXNZnaDbqTiDwCupVK\nJc1dEOaLV2BjhKAODfN4f1issKw9IRNpnojwh/EWYCgNIZ+pjF0CNgVKxWxNgdlA\niGJDdvmzExOO7LUedI12ib5he48EjmGwsc3dnKLV84dJkseU1whKvrkLoBIdMIPi\nWk2hBWhi/I8Bw46uNGRhod4h4b3ZGo7TkSpq7XBJgwKBgQD0pH9Al9xCjWYpOh33\nfPtaoZRUESXqT3637NmKxUduz4WmONmjEbvay2pIp2cXkI//6U5fEknWDIUJmNA+\nD/cFMg4DheLuGW//5kliyiPdprji47ngFKD0hJ4Pa5EInJn8jJ1odEK4sWDrQ4mk\n7GQtDeH1NfIyh544eLdmQwmmLwKBgQDjdHevPm1BT32C2/yOeX4IHUw95zrAZ58h\n50r/XAk02rwp8Phn7kS7bJ+Ns79zVzjrvQ0LsDj21LcTLWFfG9aeE5IfEYnlyg8H\n0p24YVEr97XY6EFwrTG6QDJUd/vJ3YOpmDOtMMUNl7dP9sB7L+xTOq6Pg7nmGGer\nH9lZ9kxRSwKBgAqE8DvUy9HIxrXLG/LCWwSAoiIjQqAanvZFpu0CopmvLq4BD8ql\nPpCf4ogROquWubplS8tmu+oKS8Yn3fxtL0/34QZhwWo/icNVIZ6v1m73dke7RwjN\nmkYpVaqQE4JtSWnEmhgdt6i9Z8917fs7dutBB5BFq45kqnb/KdOp2kZdAoGAfEJV\nXDRzhXmCrOm3aLJwqsgurabUDubNJb1w2F6UXP6eSx9s5YJipC2sYMJw9fcRjp/C\nL79+70G4Hk7tYgMYVVWFv1lah2HColhqd58atDVob+46Se8kOob1t/WwZVCRrCYN\nHTGGhW175MB92Q6OQc3OLXMeLNjqUa9dk2sduE8CgYEAja/JbTfnUR6YNkYfLaPy\nAxgxL3ovNo/fqXxty2oIkBLXj+Pvm7s2b+s2X8H+5BcBRPdGPrqzeqy02KgSlbps\nZ7bCx7Yv7klY9C1ldIFCnp2f3+i4ntsukGpd1Ihvhz62EE/jWTrmKr5tlM5MqehO\nnKDYP0HQx4PB0b137yk5a/Y=\n-----END PRIVATE KEY-----\n`;
const EMAIL = "psl-auto-indexer@psl-auto-indexer.iam.gserviceaccount.com";

export const dynamic = 'force-dynamic';

async function getAccessToken() {
  const token = jwt.sign(
    { iss: EMAIL, scope: "https://www.googleapis.com/auth/indexing", aud: "https://oauth2.googleapis.com/token" },
    KEY,
    { algorithm: "RS256", expiresIn: "1h" }
  );

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${token}`
  });
  const data = await res.json();
  return data.access_token;
}

export async function GET() {
  try {
    const accessToken = await getAccessToken();
    const urls = ["https://psllive-lemon.vercel.app/live-score", "https://psllive-lemon.vercel.app/points-table", "https://psllive-lemon.vercel.app/"];
    const results = [];
    
    for (const url of urls) {
      const res = await fetch("https://indexing.googleapis.com/v3/urlNotifications:publish", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${accessToken}` },
        body: JSON.stringify({ url, type: "URL_UPDATED" })
      });
      results.push(await res.json());
    }
    
    return Response.json({ status: "success", data: results });
  } catch (error) {
    return Response.json({ status: "error", error: error.message }, { status: 500 });
  }
}
