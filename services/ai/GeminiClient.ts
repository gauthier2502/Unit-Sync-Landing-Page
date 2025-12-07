import { GoogleGenAI } from "@google/genai";
import { AI_CONFIG } from '../../config';
import { ChatHistory } from '../../types';

export class GeminiClient {
  private apiKey: string | undefined;

  constructor() {
    this.apiKey = process.env.API_KEY;
  }

  public isConfigured(): boolean {
    return !!this.apiKey;
  }

  public async sendMessage(history: ChatHistory[], message: string): Promise<string> {
    if (!this.isConfigured()) {
      console.warn("API Key not found");
      return AI_CONFIG.fallbackMessage;
    }

    try {
      const ai = new GoogleGenAI({ apiKey: this.apiKey! });

      const chat = ai.chats.create({
        model: AI_CONFIG.model,
        config: {
          systemInstruction: AI_CONFIG.systemInstruction,
        }
      });

      const result = await chat.sendMessage({ message });
      return result.text;
    } catch (error) {
      console.error("Gemini API Error:", error);
      return AI_CONFIG.errorMessage;
    }
  }
}
