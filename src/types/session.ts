export interface Session {
  "Session ID": string;
  Title: string;
  Description: string;
  "Session Format": string;
  Level: string;
  Scope: string;
  "Assigned Track": string;
  Room: string;
  "Scheduled At": string;
  Speakers: string;
  Companies: string;
  "Company Domains": string;
  Titles: string;
}

export interface SessionWithSpeakerInfo {
  id: string;
  title: string;
  description?: string;
  format?: string;
  trackNames: string[];
  speakerName: string;
  speakerTagline?: string;
  Room?: string;
  "Scheduled At"?: string;
}
