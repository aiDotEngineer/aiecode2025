declare module '*/speakers-sessions-details.json' {
  interface Session {
    "Session ID": string;
    "Title": string;
    "Description": string;
    "Format": string;
    "Level": string;
    "Scope": string;
    "Tracks": string;
    "Room": string;
    "Scheduled At": string;
  }

  interface Speaker {
    "Speaker ID": string;
    "Name": string;
    "Company": string;
    "Company Domain": string;
    "Company URL": string;
    "Company Website": string;
    "Title": string;
    "TagLine": string;
    "Bio": string;
    "X (Twitter)": string;
    "LinkedIn": string;
    "Blog": string;
    "Profile Picture": string;
    "Session Count": number;
    "Sessions": Session[];
  }

  const data: Speaker[];
  export default data;
} 