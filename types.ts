
export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}

export interface ResourceItem {
  title: string;
  description: string;
  category: 'understanding' | 'action' | 'safety';
  icon: string;
}
