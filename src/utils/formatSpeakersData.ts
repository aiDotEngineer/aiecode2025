// Format the speaker data from speakers-sessions-details.json for SpeakerPreview component
import speakersData from './speakers-sessions-details.json';

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
        }
      }
    };
    company: {
      data?: {
        attributes: {
          name: string;
        }
      }
    };
    sessions: {
      data: Array<{
        attributes: {
          title: string;
          format?: string;
          track: {
            data?: {
              attributes: {
                name: string;
              }
            }
          }
        }
      }>
    }
  }
}

export interface FormattedData {
  presenters: FormattedSpeaker[];
  tracks: string[];
  formats: string[];
}

// Priority scores for specific speakers (1-1000, higher = more priority)
const SPEAKER_PRIORITY_SCORES: Record<string, number> = {
  // Examples - update with actual speaker names and scores
  "Joel Hron": 900,
  "Aman Kishore": 800,
  "Chang She": 700,
  "David Hsu": 600,
  "Devansh Tandon": 500
};

// Default priority score for speakers not in the list above
const DEFAULT_PRIORITY_SCORE = 100;

export function formatSpeakersData(): FormattedData {
  const tracks = new Set<string>();
  const formats = new Set<string>();
  
  // Transform speaker data into the format expected by SpeakerPreview
  const presenters = speakersData.map((speaker, index) => {
    // Get priority score for this speaker
    const priorityScore = SPEAKER_PRIORITY_SCORES[speaker.Name] || DEFAULT_PRIORITY_SCORE;
    
    // Extract session tracks and formats for this speaker
    speaker.Sessions.forEach(session => {
      // Collect tracks
      if (session.Tracks) {
        session.Tracks.split(',').forEach(track => {
          const trimmedTrack = track.trim();
          if (trimmedTrack) {
            tracks.add(trimmedTrack);
          }
        });
      }
      
      // Collect formats
      if (session.Format) {
        formats.add(session.Format);
      }
    });
    
    // Handle socialLinks to convert null to undefined
    const socialLinks = speaker.LinkedIn || speaker["X (Twitter)"] || speaker["Company Website"] || undefined;
    
    return {
      id: speaker["Speaker ID"],
      attributes: {
        name: speaker.Name,
        tagline: speaker.TagLine,
        socialLinks,
        displayOrder: index, // Use the order from the JSON file
        priorityScore, // Add priority score
        profilePhoto: {
          data: {
            attributes: {
              url: speaker["Profile Picture"]
            }
          }
        },
        company: {
          data: speaker.Company ? {
            attributes: {
              name: speaker.Company
            }
          } : undefined
        },
        sessions: {
          data: speaker.Sessions.map(session => ({
            attributes: {
              title: session.Title,
              format: session.Format,
              track: {
                data: session.Tracks ? {
                  attributes: {
                    name: session.Tracks
                  }
                } : undefined
              }
            }
          }))
        }
      }
    };
  });

  // Sort presenters: higher priority score first, then by displayOrder
  const sortedPresenters = [...presenters].sort((a, b) => {
    // First compare priority scores (higher comes first)
    const scoreDiff = b.attributes.priorityScore - a.attributes.priorityScore;
    if (scoreDiff !== 0) {
      return scoreDiff;
    }
    // If same priority score, sort by display order
    return a.attributes.displayOrder - b.attributes.displayOrder;
  });

  return {
    presenters: sortedPresenters,
    tracks: Array.from(tracks).filter(Boolean),
    formats: Array.from(formats).filter(Boolean)
  };
} 