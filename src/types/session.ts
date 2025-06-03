// [INFO] Extended FormattedSpeaker to include level, scope, room, and scheduledAt for session attributes
export interface FormattedSpeaker {
  id: string;
  attributes: {
    name: string;
    tagline: string;
    socialLinks?: string;
    displayOrder: number;
    priorityScore: number; // 1-1000 priority score (higher = more priority)
    profilePhoto: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    company: {
      data?: {
        attributes: {
          name: string;
        };
      };
    };
    sessions: {
      data: Array<FormattedSession>;
    };
  };
}

export interface FormattedSession {
  attributes: {
    id: string;
    title: string;
    format?: string;
    description?: string;
    track: {
      data?: {
        attributes: {
          name: string;
        };
      };
    };
    // Newly added fields:
    level?: string;
    scope?: string;
    room?: string;
    scheduledAt?: string;
  };
}

export type SessionViewModel = FormattedSession["attributes"] & {
  speakers: FormattedSpeaker[];
};
