import { GeminiClient } from './GeminiClient';
import { ChatHistory } from '../../types';

const geminiClient = new GeminiClient();

export const sendMessageToGemini = async (
  history: ChatHistory[],
  message: string
): Promise<string> => {
  return geminiClient.sendMessage(history, message);
};

export { GeminiClient };
