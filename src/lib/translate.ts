import axios from "axios";

const TRANSLATE_API_URL = "https://libretranslate.com/translate"; // Use self-hosted for unlimited

export async function autoTranslate(text: string, targetLang: string) {
  try {
    const response = await axios.post(TRANSLATE_API_URL, {
      q: text,
      source: "en",
      target: targetLang,
      format: "text",
      api_key: "", // Leave blank if self-hosted
    });

    return response.data.translatedText || text;
  } catch (error) {
    console.error("Translation error:", error);
    return text; // Fallback to English
  }
}
