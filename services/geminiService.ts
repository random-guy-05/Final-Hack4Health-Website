import { GoogleGenAI, Chat } from "@google/genai";
import { ChatMessage } from '../types';

let ai: GoogleGenAI | null = null;
let chat: Chat | null = null;

const getAi = (): GoogleGenAI | null => {
    if (ai) {
        return ai;
    }
    
    const API_KEY = process.env.API_KEY;
    if (API_KEY) {
        ai = new GoogleGenAI({ apiKey: API_KEY });
        return ai;
    }
    return null;
}

const initializeChat = (systemInstruction: string) => {
    const currentAi = getAi();
    if (!currentAi) {
        console.warn("Gemini AI not initialized because API_KEY is missing.");
        return;
    }
    chat = currentAi.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: systemInstruction,
        },
    });
}

export const getBotResponse = async (userMessage: string, context: string): Promise<string> => {
  const currentAi = getAi();
  if (!currentAi) {
      const errorMessage = "I'm sorry, I'm not configured correctly and cannot respond right now.";
      console.error("API_KEY environment variable is not set. Chatbot is disabled.");
      return errorMessage;
  }

  try {
    if (!chat) {
        initializeChat(context);
    }
    
    if (!chat) {
        throw new Error("Chat could not be initialized. This might be due to a missing API key.");
    }

    const response = await chat.sendMessage({ message: userMessage });
    return response.text;
  } catch (error) {
    console.error("Error getting response from Gemini:", error);
    // Reset chat on error, in case the session is invalid
    chat = null;
    return "I'm sorry, I'm having trouble connecting right now. Please try again later.";
  }
};