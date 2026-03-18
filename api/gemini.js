const GEMINI_MODEL = "gemini-2.5-flash";
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Server Gemini key is not configured" });
  }

  const prompt = req.body?.prompt;
  if (typeof prompt !== "string" || !prompt.trim()) {
    return res.status(400).json({ error: "Missing prompt" });
  }

  try {
    const response = await fetch(`${GEMINI_ENDPOINT}?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 220,
        },
      }),
    });

    if (!response.ok) {
      let message = `Gemini API ${response.status}`;
      try {
        const errorData = await response.json();
        const apiMessage = errorData?.error?.message;
        if (apiMessage) message = `${message}: ${apiMessage}`;
      } catch {
        // keep default message when body is not JSON
      }
      return res.status(response.status).json({ error: message });
    }

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts
      ?.map((part) => part.text)
      .filter(Boolean)
      .join("\n");

    return res.status(200).json({
      text: text || "I could not generate a response right now. Please try again.",
    });
  } catch {
    return res.status(502).json({ error: "Failed to contact Gemini API" });
  }
}