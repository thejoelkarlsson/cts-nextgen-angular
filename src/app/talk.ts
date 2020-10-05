import { Speaker } from './speaker';

export interface Talk {
  id: number;
  speakers: Speaker[];
  title: string;
  description: string;
  feedbackUrl: string;
  presentationUrl: string;
  tracks: string[];
  level: number;
}
