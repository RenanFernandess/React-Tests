
interface GeminiAPIResponse {
  candidates: {
    content: {
      parts: { text: string }[];
    };
  }[];
}

export interface InsightData {
  feasibility: {
    status: 'viable' | 'needs_adjustment' | 'unfeasible'
    content: string
  }
  diagnosis: {
    content: string
  }
  suggestions: {
    items: string[]
  }
  extraIncome: {
    items: string[]
  }
  investment: {
    items: string[]
  }
  motivation: {
    content: string
  }
}

const GEMINI_API_KEY = String(import.meta.env.VITE_GEMINI_API_KEY);
const MODEL_NAME = "gemini-flash-latest";
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta2/models/${MODEL_NAME}:generateContent?key=${GEMINI_API_KEY}`;

const callGeminiAPI = async (prompt: string): Promise<GeminiAPIResponse> => {
  const response = await fetch(GEMINI_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
    }),
  })

  if (!response.ok) {
    throw new Error(`Erro na chamada da API Gemini: ${response.statusText}`);
  }

  return (await response.json()) as GeminiAPIResponse
}

export const getInsight = async (prompt: string): Promise<InsightData> => {
  const response = await callGeminiAPI(prompt);
  const text = response.candidates[0].content.parts[0].text;
  return JSON.parse(text) as InsightData;
}
