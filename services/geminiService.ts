import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateBlessing(guestName: string, relationship: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a traditional Indian Hindu wedding blessing message for a couple (Anil Kumar and Hemavathi) from a guest named ${guestName} who is their ${relationship}. 
      The tone should be warm, respectful, and include traditional values like 'Saubhagyavati Bhava', prosperity, and eternal love. 
      Keep it around 2-3 sentences. Start with a traditional Sanskrit greeting transliterated or translated.`,
      config: {
        temperature: 0.8,
        topP: 0.95,
      },
    });
    return response.text || "May your union be blessed by the divine and your journey together be filled with prosperity and love.";
  } catch (error) {
    console.error("Error generating blessing:", error);
    return "Wishing you a lifetime of happiness, togetherness, and divine blessings.";
  }
}
