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
  "Dani Grant": 900,
  "Joel Hron": 900,
  "Chelcie Taylor": 800,
  "Aman Kishore": 800,
  "David Hsu": 700,
  "Rossella Blatt Vital": 500,
  "Chang She": 600,
  "Brooke Hopkins": 700,
  "Julia Neagu": 500,
  "Deanna Emery": 500,
  "Sharon Zhou": 500,
  "Preeti Somal": 500,
  "Annika Brundyn": 500,
  "Aastha Jhunjhunwala": 500,

  // keynote speakers
  "Raiza Martin": 900,
  "Sarah Guo": 900,
  "Clay Bavor": 900,
  "Jared Palmer": 900,
  "Daniel Persczyk": 900,
  "Simon Willison": 900,
  "Logan Kilpatrick": 900,
  "Harrison Chase": 900,
  "Solomon Hykes": 900,
  "Jesse Han": 900,
  "Micah Hill-Smith": 900,
  "Sean Grove": 800,

  // Prioritize speakers from major tech companies
  "Devansh Tandon": 600, // Google
  "Kelvin Ma": 900, // Google Photos
  "Philipp Schmid": 900, // Google DeepMind
  "Damien Murphy": 300, // Google
  "Rustin Banks": 300, // Google Labs
  "Hariharan Ganesan": 300, // Google
  "Christopher Chedeau": 300, // Facebook
  "Kyle Kranen": 300, // NVIDIA
  "Mitesh Patel": 300, // NVIDIA
  "Victor Dibia": 800, // Microsoft Research
  "Michael Albada": 300, // Microsoft Security AI Research
  "Dominik Kundel": 300, // OpenAI
//   "Sean DuBois": 300, // OpenAI
  "Anoop Kotha": 300, // OpenAI
//   "Vaibhav Page": 300, // BlackRock
//   "Infant Vasanth": 300, // BlackRock
  "Jaspreet Singh": 300, // Intuit
  "Ola Mabadeje": 300, // Cisco
  "Taylor Jordan Smith": 300, // Red Hat
  "Jyh-Jing Hwang": 700, // Waymo
  "Shafik Quoraishee": 300, // New York Times
};

// Default priority score for speakers not in the list above
const DEFAULT_PRIORITY_SCORE = 100;

export function formatSpeakersData(): FormattedData {
  const tracks = new Set<string>();
  const formats = new Set<string>();
  
  // Transform speaker data into the format expected by SpeakerPreview
  const presenters = speakersData.map((speaker, index) => {
    // Get priority score for this speaker
    const priorityScore = SPEAKER_PRIORITY_SCORES[speaker.Name] || (DEFAULT_PRIORITY_SCORE * Math.random());
    
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