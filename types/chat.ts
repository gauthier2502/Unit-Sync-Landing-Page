export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface ChatHistory {
  role: string;
  parts: { text: string }[];
}
