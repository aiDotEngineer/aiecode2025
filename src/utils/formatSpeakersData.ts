// Format the speaker data from speakers-sessions-details.json for SpeakerPreview component
import speakersData from './speakers-sessions-details.json';
import {manualKeynoteSpeakers} from './manual-keynote-speakers'; // Renamed for clarity

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
          description?: string;
          track: {
            data?: {
              attributes: {
                name: string;
              }
            }
          };
          // Newly added fields:
          level?: string;
          scope?: string;
          room?: string;
          scheduledAt?: string;
        }
      }>;
    };
  };
}


export interface FormattedData {
  presenters: FormattedSpeaker[];
  tracks: string[];
  formats: string[];
}

// Priority scores for specific speakers (1-1000, higher = more priority)
const SPEAKER_PRIORITY_SCORES: Record<string, number> = {
  // Keynote Speakers - Highest Priority (from manual list)
  "Sarah Guo": 1000,
  "Simon Willison": 1000,
  "Clay Bavor": 1000,
  "Danielle Persczyk": 1000,
  "Greg Brockman": 1000,
  "Kevin Hou": 1000,
  "Jack Rae": 1000,
  // [INFO] Prioritize Logan Kilpatrick (Google DeepMind, AI Studio Lead, Gemini 2.5)
  "Logan Kilpatrick": 900,
  "Harrison Chase": 900,
  "Christian Szegedy": 900,
  "Quan Vuong": 900,
  "Shrestha Basu Mallick": 900,
  "Jerome Swannack": 1000, // Added Jerome Swannack
  "Den Delimarsky": 700, // Added Den Delimarsky
  "Jost Tobias Springenberg": 700, // Added Jost Tobias Springenberg

  // Other High Priority Speakers (from speakers-sessions-details.json)
  "Solomon Hykes": 900, 
  "Jesse Han": 910,
  "Micah Hill-Smith": 900,
  "Raiza Martin": 950,
  "Dani Grant": 900,
  "Joel Hron": 900,
  "Anoop Kotha": 700,
  "Kelvin Ma": 800, 
  "Philipp Schmid": 900, 
  "Ben Parr": 900,
  "Justin Junyang Lin": 800, // Added Justin Junyang Lin
  "Boris Cherny": 800, // Added Boris Cherny
  "Ben Kus": 900, // Added Ben Kus
  "swyx": -1, // Added swyx
  "Ben Dunphy": -0.5, // Added Ben Dunphy
  "Ankur Goyal": 700, // Added Ankur Goyal
  "Scott Wu": 900,

  // Mid-Tier Priority
  "Chelcie Taylor": 900,
  "Aman Kishore": 800,
  "Victor Dibia": 800,
  "Omar Khattab": 300,
  "Sean Grove": 800, // Adjusted from previous version
  "Will Brown": 800, // Adjusted from previous version

  // Standard Priority or specific company boosts
  "David Hsu": 700,
  "Brooke Hopkins": 700,
  "Jyh-Jing Hwang": 700,
  "Chang She": 600,
  "Devansh Tandon": 600, 
  "Chun Jiang": 600, 

  // Lower Priority / Default Tier Grouping
  "Rossella Blatt Vital": 500,
  "Julia Neagu": 700,
  "Deanna Emery": 200,
  "Sharon Zhou": 300,
  "Preeti Somal": 800,
  "Annika Brundyn": 500,
  "Aastha Jhunjhunwala": 200,

  // Speakers from specific companies or roles if not covered above
  "Damien Murphy": 300, // Google
  "Rustin Banks": 300, // Google Labs
  "Hariharan Ganesan": 300, // Google
  "Christopher Chedeau": 300, // Facebook
  "Kyle Kranen": 300, // NVIDIA
  "Mitesh Patel": 300, // NVIDIA
  "Michael Albada": 300, // Microsoft Security AI Research
  "Dominik Kundel": 300, // OpenAI
  "Jaspreet Singh": 300, // Intuit
  "Ola Mabadeje": 300, // Cisco
  "Taylor Jordan Smith": 300, // Red Hat
  "Shafik Quoraishee": 300, // New York Times
};



// Default priority score for speakers not in the list above
const DEFAULT_PRIORITY_SCORE = 100;

// List of speakers to exclude from the results - because bad data
const EXCLUDED_SPEAKERS = new Set([
  "Steve Ruiz",
  "Okta Speaker",
  "Julia Kasper",
  "Den Delimarsky",
  "Cedric Vidal",
  "Dat Ngo",
  "Aman Khan",
  "Jim Bennett",
  "Tomas Reimers"
]);

// Define the type for manual speaker entries based on manual-keynote-speakers.json
interface ManualSpeakerEntry {
  Name: string;
  Company: string;
  Domain: string;
  Tagline: string;
  ProfilePicture: string;
  Sessions: Array<{
    Title: string;
    Format: string;
    Description?: string;
    Tracks?: string; // Can be a comma-separated string or a single track
  }>;
}

// Cast the imported JSON to our defined type
const manualKeynoteSpeakersData = manualKeynoteSpeakers as ManualSpeakerEntry[];

export function formatSpeakersData(): FormattedData {
  const tracks = new Set<string>();
  const formats = new Set<string>();
  const manualSpeakerNames = new Set<string>();
  let allPresenters: FormattedSpeaker[] = [];

  // 1. Process Manual Keynote Speakers
  const manualPresenters: FormattedSpeaker[] = manualKeynoteSpeakersData.map((manualSpeaker, index) => {
    manualSpeakerNames.add(manualSpeaker.Name);
    const priorityScore = SPEAKER_PRIORITY_SCORES[manualSpeaker.Name] || 1000; // Default to 1000 for manual keynotes

    return {
      id: `manual-${manualSpeaker.Name.replace(/\s+/g, '-').toLowerCase()}-${index}`,
      attributes: {
        name: manualSpeaker.Name,
        tagline: manualSpeaker.Tagline,
        socialLinks: undefined, // Manual speakers don't have social links in this JSON
        displayOrder: index, // Original order from manual JSON
        priorityScore,
        profilePhoto: {
          data: {
            attributes: {
              url: manualSpeaker.ProfilePicture
            }
          }
        },
        company: {
          data: manualSpeaker.Company ? {
            attributes: {
              name: manualSpeaker.Company
            }
          } : undefined
        },
        sessions: {
          data: manualSpeaker.Sessions.map(session => ({
            attributes: {
              title: session.Title,
              format: session.Format,
              description: session.Description,
              track: session.Tracks ? { 
                data: { attributes: { name: session.Tracks } } 
              } : { data: undefined },
              // These fields are not present in manual speakers, but included for type consistency
              level: undefined,
              scope: undefined,
              room: undefined,
              scheduledAt: undefined,
            }
          }))
        }
      }
    };
  });

  // // [LOG] [PRIORITY] [formatSpeakersData] [2025-05-13T20:29:02-07:00] [36mEnsuring Logan Kilpatrick is prioritized as a keynote speaker[0m
  // const logan = manualPresenters.find(s => s.attributes.name === "Logan Kilpatrick");
  // if (logan) {
  //   console.log('[PRIORITY] [formatSpeakersData] [2025-05-13T20:29:02-07:00]', '\x1b[32mLogan Kilpatrick found in manual keynote speakers and prioritized.\x1b[0m', logan);
  // } else {
  //   console.warn('[WARN] [formatSpeakersData] [2025-05-13T20:29:02-07:00]', '\x1b[31mLogan Kilpatrick NOT found in manual keynote speakers!\x1b[0m');
  // }
  
  allPresenters = allPresenters.concat(manualPresenters);

  // 2. Process Speakers from speakers-sessions-details.json
  const existingPresenters: FormattedSpeaker[] = speakersData
    .filter(speakerFromJson => 
      !manualSpeakerNames.has(speakerFromJson.Name) // Avoid duplicates
    )
    .map((speakerFromJson, index) => {
      const priorityScore = SPEAKER_PRIORITY_SCORES[speakerFromJson.Name] || (DEFAULT_PRIORITY_SCORE * (Math.random() + 1));
      
      const socialLinks = speakerFromJson.LinkedIn || speakerFromJson["X (Twitter)"] || speakerFromJson["Company Website"] || undefined;
      
      // [LOG] [MAP] [formatSpeakersData] [2025-05-19T16:15:22-07:00] \x1b[36mMapping session fields: level, scope, room, scheduledAt\x1b[0m
return {
  id: speakerFromJson["Speaker ID"],
  attributes: {
    name: speakerFromJson.Name,
    tagline: speakerFromJson.TagLine,
    socialLinks,
    displayOrder: index, // Original order from this JSON file
    priorityScore,
    profilePhoto: {
      data: {
        attributes: {
          url: speakerFromJson["Profile Picture"]
        }
      }
    },
    company: {
      data: speakerFromJson.Company ? {
        attributes: {
          name: speakerFromJson.Company
        }
      } : undefined
    },
    sessions: {
      data: speakerFromJson.Sessions.map(session => ({
        attributes: {
          title: session.Title,
          format: session.Format,
          description: session.Description,
          track: {
            data: session.Tracks ? {
              attributes: {
                name: session.Tracks
              }
            } : undefined
          },
          // New fields mapped from JSON
          level: session.Level || undefined,
          scope: session.Scope || undefined,
          room: session.Room || undefined,
          scheduledAt: session["Scheduled At"] || undefined,
        }
      }))
    }
  }
};

    });
  allPresenters = allPresenters.concat(existingPresenters);
  allPresenters = allPresenters.filter(speaker => !EXCLUDED_SPEAKERS.has(speaker.attributes.name));

  // 3. Sort all presenters together
  const sortedPresenters = allPresenters.sort((a, b) => {
    const scoreDiff = b.attributes.priorityScore - a.attributes.priorityScore;
    if (scoreDiff !== 0) {
      return scoreDiff;
    }
    return a.attributes.displayOrder - b.attributes.displayOrder;
  });

  // 4. Collect tracks and formats from the final sorted list
  sortedPresenters.forEach(presenter => {
    presenter.attributes.sessions.data.forEach(session => {
      if (session.attributes.track?.data?.attributes.name) {
        session.attributes.track.data.attributes.name.split(',').forEach(trackName => {
          const trimmedTrack = trackName.trim();
          if (trimmedTrack) tracks.add(trimmedTrack);
        });
      }
      if (session.attributes.format) {
        formats.add(session.attributes.format);
      }
    });
  });

  return {
    presenters: sortedPresenters,
    tracks: Array.from(tracks).filter(Boolean),
    formats: Array.from(formats).filter(Boolean)
  };
}